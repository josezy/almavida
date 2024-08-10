import fs from 'fs';
import z from 'zod';
import OpenAI from 'openai';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { Document } from 'langchain/document';
import { zodFunction } from 'openai/helpers/zod';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const RUTInfo = z.object({
  phone: z.string(),
  nit: z.string(),
  name: z.string(),
  address: z.string(),
  email: z.string(),
})

async function loadFile(filePath: string, mimeType: string): Promise<Document<Record<string, any>>[]> {
  if (mimeType.startsWith('application/pdf')) {
    const loader = new PDFLoader(filePath, {
      splitPages: false,
    });
    return await loader.load();
  } else {
    const text = await fs.promises.readFile(filePath, 'utf8');
    return [new Document({ pageContent: text })];
  }
}

async function processDocuments(docs: Document<Record<string, any>>[]): Promise<typeof RUTInfo> {
  const system_prompt = `
    You are an AI assistant that analyzes documents and extracts key information.
    For NIT do not include the verification digit DV
  `;
  const completion = await client.beta.chat.completions.parse({
    model: 'gpt-4o-2024-08-06',
    messages: [
      { role: 'system', content: system_prompt },
      { role: 'user', content: docs[0].pageContent }
    ],
    tools: [zodFunction({ name: 'query', parameters: RUTInfo })],
  });
  return completion.choices[0].message.tool_calls[0].function.parsed_arguments as typeof RUTInfo;
}

export async function sendToLLM(filePath: string, mimeType: string): Promise<typeof RUTInfo> {
  try {
    const docs = await loadFile(filePath, mimeType);
    return await processDocuments(docs);
  } catch (error) {
    console.error('Error in sendToLLM:', error);
    throw new Error('Failed to process file with LLM');
  }
}

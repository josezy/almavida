import z from 'zod';
import OpenAI from 'openai';
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

export async function sendToLLM(contents: string): Promise<typeof RUTInfo> {
  try {
    const system_prompt = `
      You are an AI assistant that analyzes documents and extracts key information.
      For NIT do not include the verification digit DV
    `;
    const completion = await client.beta.chat.completions.parse({
      model: 'gpt-4o-2024-08-06',
      messages: [
        { role: 'system', content: system_prompt },
        { role: 'user', content: contents }
      ],
      tools: [zodFunction({ name: 'query', parameters: RUTInfo })],
    });
    return completion.choices[0].message.tool_calls[0].function.parsed_arguments as typeof RUTInfo;
  } catch (error) {
    console.error('Error in sendToLLM:', error);
    throw new Error('Failed to process file with LLM');
  }
}

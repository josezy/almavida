import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const orderId = randomUUID().split('-')[0]
  const amount = "0"
  const currency = "COP"
  const concatenatedString = `${orderId}${amount}${currency}${process.env.BOLD_SECRET}`
  const encondedText = new TextEncoder().encode(concatenatedString);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const integritySignature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return res.json({
    orderId,
    currency,
    amount,
    apiKey: process.env.BOLD_IDENTITY,
    integritySignature,
    description: 'La pinche descripción de la compra',
    tax: 'consumption',
  })
}

export default handler

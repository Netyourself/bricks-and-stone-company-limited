import { fetchPageContent } from '@/services/wordpressService';
import { NextApiRequest, NextApiResponse } from 'next';

// wordpress API
export default async function handlerWP(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await fetchPageContent('');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';

let cachedUrl: string | null = null;

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (cachedUrl) {
    return res.status(200).json({ backendUrl: cachedUrl });
  }

  try {
    const response = await fetch('https://haakoaho.github.io/speak-fun/deployments.json');
    const data = await response.json();
    cachedUrl = data.backendUrl;

    return res.status(200).json({ backendUrl: cachedUrl });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch backendUrl' });
  }
}

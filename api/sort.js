export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { inputString } = req.body;

    if (!inputString || typeof inputString !== 'string') {
      return res.status(400).json({ error: 'Invalid input. Please provide a string.' });
    }

    const sorted = inputString.split('').sort().join('');
    return res.status(200).json({ result: sorted });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


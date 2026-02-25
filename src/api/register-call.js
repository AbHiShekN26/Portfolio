// api/register-call.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const agentId = "agent_fb9a6ba5a106fc49e61189a7b9";
  const apiKey = process.env.RETELL_API_KEY; // We will set this in Vercel Dashboard

  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = await response.json();
    // This 'access_token' is what your frontend needs
    res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
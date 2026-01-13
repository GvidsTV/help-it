const Anthropic = require('@anthropic-ai/sdk');

// This uses the NEW name you set in Netlify
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  try {
    const { message, history } = JSON.parse(event.body);

    const conversationHistory = (history || []).map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    }));

    conversationHistory.push({ role: "user", content: message });

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1024,
      system: "You are the 'HIT Man'. Helpful IT Man with a Mafia persona. Firm but professional.",
      messages: conversationHistory,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: response.content[0].text }),
    };
  } catch (error) {
    console.error('Claude Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "The line is tapped. Connection failed." }),
    };
  }
};

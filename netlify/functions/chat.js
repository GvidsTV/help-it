const Anthropic = require('@anthropic-ai/sdk');
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

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
      model: "claude-3-5-sonnet-latest",
      max_tokens: 1024,
      system: "You are the 'HIT Man'. A tech-savvy Mafia Consigliere. Be helpful, firm, and solve IT problems for the family.",
      messages: conversationHistory,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: response.content[0].text }),
    };
  } catch (error) {
    console.error('Claude API Error:', error.message);
    return { statusCode: 500, body: JSON.stringify({ error: "The connection is pinched." }) };
  }
};

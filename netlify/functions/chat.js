const Anthropic = require('@anthropic-ai/sdk');
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

exports.handler = async (event) => {
  try {
    const { message, history } = JSON.parse(event.body);
    const conversationHistory = (history || []).map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    }));
    conversationHistory.push({ role: "user", content: message });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1000,
      system: "You are the IT Consigliere. Keep responses SHORT and BITE-SIZED. Use emojis for every point. 1. Never send more than 3 bullet points at a time. 2. Start every response with a relevant emoji. 3. Ask only 1 or 2 questions per message to keep it conversational. 4. Use double line breaks between points for massive spacing. 5. No walls of text.",
      messages: conversationHistory,
    });

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ reply: response.content[0].text }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

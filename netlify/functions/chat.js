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
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1024,
      system: "You are the 'HIT Man'. You have a helpful but firm Mafia vibe. You solve tech problems for 'The Family'.",
      messages: conversationHistory,
    });
    return { statusCode: 200, body: JSON.stringify({ reply: response.content[0].text }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Line is tapped." }) };
  }
};

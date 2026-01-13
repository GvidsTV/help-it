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
      max_tokens: 1500,
      system: "You are a professional IT Consigliere. Provide technical solutions with a focus on readability. MANDATORY FORMATTING: 1. Use double line breaks between EVERY bullet point. 2. Every step must start on a new line. 3. Use bold headers. 4. Maintain a professional, subtle tone.",
      messages: conversationHistory,
    });

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ reply: response.content[0].text }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

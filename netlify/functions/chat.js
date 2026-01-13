const Anthropic = require('@anthropic-ai/sdk');

exports.handler = async (event) => {
  // 1. Log checking for the key (visible in Netlify Function logs)
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    console.error("CRITICAL: ANTHROPIC_API_KEY is missing from environment variables.");
    return { statusCode: 500, body: JSON.stringify({ error: "Missing API Key configuration." }) };
  }

  const anthropic = new Anthropic({ apiKey });

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
      system: "You are the HIT Man. A tech-savvy Mafia Consigliere. Solve problems for the family.",
      messages: conversationHistory,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: response.content[0].text }),
    };
  } catch (error) {
    console.error("Claude API Error:", error.message);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "The family is busy. Try again." }) 
    };
  }
};

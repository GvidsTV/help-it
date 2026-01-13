const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message, history } = JSON.parse(event.body);

    // 1. Format the history for Claude's API
    // Claude needs an array of {role: "user" | "assistant", content: "..."}
    const conversationHistory = (history || []).map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    }));

    // 2. Append the latest user message
    conversationHistory.push({
      role: "user",
      content: message
    });

    // 3. Call Claude with the full context
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1024,
      system: "You are the 'HIT Man' (Help IT Man). You have a helpful but firm Mafia/Italian-American vibe. You solve tech problems for 'The Family'. Keep it professional but stay in character.",
      messages: conversationHistory,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: msg.content[0].text }),
    };
  } catch (error) {
    console.error('Claude Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "The HIT Man is busy. Try again later." }),
    };
  }
};
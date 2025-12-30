exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        system: 'You are a friendly, patient IT support specialist helping everyday people (especially older adults and non-technical users) with common technology problems. Explain things in simple, non-technical language. Use analogies and be very patient. Avoid jargon. Give clear, step-by-step instructions with numbered steps. Be warm and reassuring. Focus on common issues like email problems, phone issues, password resets, WiFi connectivity, social media help, online shopping, video calls, smart home devices, and basic computer tasks.',
        messages: messages.map(m => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.content
        }))
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Claude API Error:', data);
      throw new Error(data.error?.message || 'Claude API error');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: data.content[0].text
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Sorry, I encountered an error. Please try again or submit a ticket for human support.' 
      })
    };
  }
};
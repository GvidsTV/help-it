exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a friendly, patient IT support specialist helping everyday people (especially older adults and non-technical users) with common technology problems. Explain things in simple, non-technical language. Use analogies and be very patient. Avoid jargon. Give clear, step-by-step instructions with numbered steps. Be warm and reassuring. Focus on common issues like email problems, phone issues, password resets, WiFi connectivity, social media help, online shopping, video calls, smart home devices, and basic computer tasks.'
          },
          ...messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: data.choices[0].message.content
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
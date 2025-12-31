exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // Format messages for Claude API
    const formattedMessages = messages.map(m => {
      // If message has an image, create content array
      if (m.image && m.role === 'user') {
        return {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: m.image.type,
                data: m.image.data
              }
            },
            {
              type: 'text',
              text: m.content || 'Please analyze this image and help me with the issue shown.'
            }
          ]
        };
      }
      
      // Regular text message
      return {
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      };
    });

    console.log('Sending to Claude:', JSON.stringify(formattedMessages).substring(0, 500));

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: 'You are a friendly, patient IT support specialist helping everyday people (especially older adults and non-technical users) with common technology problems. When users share screenshots or photos, carefully analyze them and provide specific help based on what you see. Explain things in simple, non-technical language. Use analogies and be very patient. Avoid jargon. Give clear, step-by-step instructions with numbered steps. Be warm and reassuring. Focus on common issues like email problems, phone issues, password resets, WiFi connectivity, social media help, online shopping, video calls, smart home devices, and basic computer tasks.',
        messages: formattedMessages
      })
    });

    const data = await response.json();

    console.log('Claude response:', JSON.stringify(data).substring(0, 500));

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
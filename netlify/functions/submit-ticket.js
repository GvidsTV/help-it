exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, issue, priority } = JSON.parse(event.body);

    // Map priority to Freshdesk values (1=Low, 2=Medium, 3=High, 4=Urgent)
    const priorityMap = {
      'low': 1,
      'medium': 2,
      'high': 3,
      'urgent': 4
    };

    const ticketData = {
      name: name,
      email: email,
      phone: phone || '',
      subject: `IT Support Request - ${priority.toUpperCase()}`,
      description: issue,
      status: 2, // Open
      priority: priorityMap[priority] || 2,
      source: 2, // Portal
      tags: ['help-it-app', 'web-submission']
    };

    const response = await fetch(`https://${process.env.FRESHDESK_DOMAIN}/api/v2/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(process.env.FRESHDESK_API_KEY + ':X').toString('base64')
      },
      body: JSON.stringify(ticketData)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Freshdesk API Error:', data);
      throw new Error(data.description || 'Failed to create ticket');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        ticketId: data.id,
        message: `Ticket #${data.id} created successfully. Check your email for updates!`
      })
    };

  } catch (error) {
    console.error('Error creating ticket:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to submit ticket. Please try again.' 
      })
    };
  }
};

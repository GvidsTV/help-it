const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Send data to your Formspree ID
    const response = await fetch("https://formspree.io/f/xnjjqdgo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.issue,
        priority: data.priority,
        source: "Help IT Website Ticket"
      }),
    });

    if (!response.ok) {
      throw new Error("Formspree rejected the request");
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Ticket Error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to send ticket" }),
    };
  }
};
export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const { message } = JSON.parse(event.body || "{}");
    if (!message || typeof message !== "string") {
      return {
        statusCode: 400,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reply: "No message received." }),
      };
    }

    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reply: "Missing CLAUDE_API_KEY in server env." }),
      };
    }

    // Call Anthropic Messages API
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        // Version header required by Anthropic-compatible APIs (commonly used)
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await resp.json().catch(() => null);

    if (!resp.ok) {
      // Return useful debug info without crashing the function
      return {
        statusCode: 500,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          reply: "The Consigliere had trouble responding. Try again.",
          details: data || { error: `HTTP ${resp.status}` },
        }),
      };
    }

    // Anthropic response usually: { content: [{ type:"text", text:"..." }], ... }
    const text =
      data?.content?.find((c) => c.type === "text")?.text ??
      data?.content?.[0]?.text ??
      null;

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ reply: text || "No reply returned." }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        reply: "System error. Try again.",
        error: String(err?.message || err),
      }),
    };
  }
}

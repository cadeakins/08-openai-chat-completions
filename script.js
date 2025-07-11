
async function main() {
  // Send a POST request to the OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', // We are POST-ing data to the API
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      'Authorization': `Bearer ${apiKey}` // Include the API key for authorization
    },
    // Send model details and system message
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful AI toolbot that helps users learn about internet memes. Keep answers short, witty, and do not use emojis.' },
        { role: 'user', content: 'Tell me a fun fact about big chungus' }]
    })
  });
  // Parse and store the response data
  const result = await response.json();
  // Log result to the console
  console.log(result.choices[0].message.content);
};

// Call the main function
main();
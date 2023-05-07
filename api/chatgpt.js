fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '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'
  },
  body: JSON.stringify({
    prompt: message,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.5
  })
})
.then(response => response.json())
.then(data => {
  if (data.choices && data.choices.length > 0) {
    addMessage('chatgpt', data.choices[0].text.trim());
  }
})
.catch(error => {
  console.error('Error:', error);
});

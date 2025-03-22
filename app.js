const apiKey = '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'; // Replace with your actual API key
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const responseDiv = document.getElementById('response');

sendButton.addEventListener('click', async () => {
    const userMessage = userInput.value;
    if (!userMessage) return;

    responseDiv.innerHTML = "Loading..."; // Show loading message

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        });

        const data = await response.json();
        const botReply = data.choices[0].message.content;
        responseDiv.innerHTML = botReply; // Display the bot's response
    } catch (error) {
        console.error('Error:', error);
        responseDiv.innerHTML = "Error occurred while fetching response.";
    }
});

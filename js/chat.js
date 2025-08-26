document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // Load initial greeting from bot
    addMessage('안녕하세요! SSAFY 챗봇입니다. 무엇을 도와드릴까요?', 'bot');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = userInput.value.trim();

        if (userMessage) {
            addMessage(userMessage, 'user');
            userInput.value = '';
            
            // Show loading indicator
            const loadingIndicator = addMessage('...', 'bot');

            // Simulate API call
            setTimeout(() => {
                // As per PRD, return a fixed message if no API key
                const botResponse = 'API Key가 없습니다.';
                updateMessage(loadingIndicator, botResponse);
            }, 1000);
        }
    });

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        return messageElement;
    }

    function updateMessage(element, newMessage) {
        element.textContent = newMessage;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

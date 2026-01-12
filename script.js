// Ensure JS is loaded
window.onload = function () {
    console.log("JavaScript connected successfully.");
};

// Handle Enter key
function handleKeyPress(event) {
    if (event.key === "Enter") {
        chatbotResponse();
    }
}

// Chatbot response logic
function chatbotResponse() {
    const inputField = document.getElementById("userInput");
    const userInput = inputField.value.toLowerCase().trim();
    const chatOutput = document.getElementById("chatOutput");

    if (userInput === "") return;

    let response = "Sorry, I don't understand that yet.";

    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Hello! How can I help you learn about chatbots?";
    }
    else if (userInput.includes("chatbot")) {
        response = "A chatbot is a program designed to simulate human conversation.";
    }
    else if (userInput.includes("nlp")) {
        response = "NLP stands for Natural Language Processing. It helps computers understand human language.";
    }
    else if (userInput.includes("ai")) {
        response = "Artificial Intelligence enables machines to perform tasks that normally require human intelligence.";
    }
    else if (userInput.includes("bye")) {
        response = "Goodbye! Thanks for visiting this website.";
    }

    // Append chat history
    chatOutput.innerHTML += `
        <div><strong>You:</strong> ${userInput}</div>
        <div><strong>Chatbot:</strong> ${response}</div>
        <hr>
    `;

    inputField.value = "";
}
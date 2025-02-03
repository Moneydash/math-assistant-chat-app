import React, { useState } from 'react';
import { fetchMathAnswer } from '../requests';
import './styles.css';

const MathAssistantChat: React.FC = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [messages, setMessages] = useState<React.ReactNode[]>([]);

    const handleSend = async () => {
      if (userInput.trim()) {
          addMessage(`${userInput}`);
          setUserInput('');

          try {
              const answer = await fetchMathAnswer(userInput);
              console.log(answer);
              const formattedMessage = answer?.outputs[0]?.outputs[0]?.artifacts?.message
                  .replace(/-/g, '•')
                  .replace(/\\\(/g, '(')
                  .replace(/\\\)/g, ')')
                  .replace(/\\\[/g, '[')
                  .replace(/\\\]/g, ']');
              addMessage(<pre>{formattedMessage}</pre>);
          } catch (error) {
              addMessage('Math Assistant: Sorry, I could not process your request.');
          }
      }
  };

    const addMessage = (message: React.ReactNode) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
      <div className="chat-container">
        <h1>Math Assistant Chat App</h1>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask your math question..."
        />
        <button onClick={handleSend}>Send</button>
        <p className="chat-note">
            <b>Note:</b> The chats you enter are temporary and not saved in our database to ensure user privacy. However, please be aware that chat responses may be stored in the OpenAI threads database for quality and improvement purposes.
        </p>
      </div>
    );
};

export default MathAssistantChat;
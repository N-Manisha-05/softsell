'use client';

import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import styles from './MockChatWidget.module.css';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const predefinedQA: { question: string; answer: string }[] = [
  { question: 'hi', answer: 'Hello! How can I help you with SoftSell today?' },
  { question: 'hello', answer: 'Hi there! Feel free to ask me anything about SoftSell.' },
  { question: 'how are you', answer: "I'm just a bot, but I'm here to help you!" },
  { question: 'how do i sell my license', answer: 'Upload your license details, get a valuation, and receive payment instantly.' },
  { question: 'what license types do you support', answer: 'We support Windows, Office, Adobe, and many other popular software licenses.' },
  { question: 'how long does it take to get paid', answer: 'Payments are processed within 24 hours after license validation.' },
  { question: 'thank you', answer: "You're welcome! Let me know if you have any other questions." },

  { question: 'can i get a refund', answer: 'Refunds are available within 7 days of purchase, subject to terms.' },
  { question: 'do you offer support', answer: 'Yes, our support team is available 24/7 via chat and email.' },
  { question: 'where is my order', answer: 'You can track your order status in your dashboard under "Orders".' },
  { question: 'how to contact support', answer: 'You can reach support via the chat here or email support@softsell.com.' },
  { question: 'pricing details', answer: 'Please visit our pricing page for detailed plans and options.' },
  { question: 'what is softsell', answer: 'SoftSell is a platform to sell and buy software licenses securely and quickly.' },
];

const normalizeText = (text: string) =>
  text.toLowerCase().replace(/[^\w\s]/gi, '').trim();

const UserIcon = () => (
  <svg
    className={styles.icon}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A7.969 7.969 0 0012 20a7.969 7.969 0 006.879-2.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BotIcon = () => (
  <svg
    className={styles.icon}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7v6a7 7 0 0014 0V9a7 7 0 00-7-7zM9 12h6" />
  </svg>
);

const MockChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi! Ask me anything about SoftSell.' },
  ]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userInput = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userInput }]);

    const match = predefinedQA.find((qa) =>
      normalizeText(userInput).includes(normalizeText(qa.question))
    );

    const botReply = match
      ? match.answer
      : "Sorry, I don't understand. Try asking something else.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);

    setInput('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.width} id="chat">
    <div className={styles.chatWidget}>
      <div className={styles.chatHeader}>
        <h2>SoftSell Chat</h2>
      </div>

      <div ref={chatBoxRef} className={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${msg.sender === 'user' ? styles.messageUser : styles.messageBot}`}
          >
            <div
              className={`${styles.messageBubble} ${
                msg.sender === 'user' ? styles.messageUserBubble : styles.messageBotBubble
              }`}
            >
              <span className={styles.messageSender} aria-label={msg.sender === 'user' ? 'User' : 'Bot'}>
                {msg.sender === 'user' ? <UserIcon /> : <BotIcon />}
                &nbsp;{msg.sender === 'user' ? 'You:' : 'Bot:'}
              </span>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={onInputChange}
          onKeyDown={onKeyPress}
          className={styles.inputField}
          aria-label="Chat input"
          spellCheck={false}
          autoComplete="off"
        />
        <button onClick={handleSend} className={styles.sendButton} aria-label="Send message">
          Send
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default MockChatWidget;

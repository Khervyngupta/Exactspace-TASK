import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessageList from './components/ChatMessageList';

import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = { text: message, user: randomUser, likes: 0 };
    setMessages([...messages, newMessage]);
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  return (
    <div className="app-container">
      <h1>Chat App</h1>
      <hr/>
      <ChatMessageList messages={messages} handleLike={handleLike} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
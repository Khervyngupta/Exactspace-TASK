import React from 'react';
import ChatMessage from './ChatMessage';

function ChatMessageList({ messages, handleLike }) {
  return (
    <div className="chat-message-list">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          message={message}
          index={index}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
}

export default ChatMessageList;
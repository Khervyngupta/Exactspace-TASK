import React from 'react';

function ChatMessage({ message, index, handleLike }) {
    return (
      <div className="chat-message">
        <div className="message-header">
          <p className='profile-image'>E</p>
          <span className="username">{message.user}</span>
          <span className="timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
        </div>
        <div className="message-content">
          <p>{message.text}</p>
          <button className="like-button" onClick={() => handleLike(index)}>
            Like ({message.likes})
          </button>
        </div>
      </div>
    );
  }

export default ChatMessage;
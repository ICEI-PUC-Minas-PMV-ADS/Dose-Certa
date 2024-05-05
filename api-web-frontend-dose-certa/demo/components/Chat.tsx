import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';

interface Message {
  id: number;
  content: string;
  userId: number;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>('/api/chat/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post<Message>('/api/chat/messages', {
        content: newMessage,
        // Supondo que você tenha o ID do usuário disponível, substitua "1" pelo ID real do usuário
        userId: 1,
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>
        <i className="pi pi-comment" style={{ marginRight: '5px' }}></i>
        Chat
      </h1>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map(message => (
          <div key={message.id}>
            <strong>User {message.userId}:</strong> {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <Button label="Send" icon="pi pi-send" onClick={handleSendMessage} />
      </div>
    </div>
  );
}

export default Chat;

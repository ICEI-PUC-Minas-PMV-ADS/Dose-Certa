'use client';

import axios from 'axios';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';

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
        // Substitua "1" pelo ID do usuário real
        userId: 1,
      });
      // Atualiza o estado das mensagens com a nova mensagem
      setMessages([...messages, response.data]);
      // Limpa o campo de nova mensagem após o envio
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={{ display: 'flex', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ flex: '1', paddingRight: '10px' }}>
        <div className="col-12 border-bottom-2 p-2" style={{ marginBottom: '20px' }}>
          <h2>Bate-papo</h2>
        </div>

        <div style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          {messages.map(message => (
            <div key={message.id} style={{ marginBottom: '10px' }}>
              <strong>User {message.userId}:</strong> {message.content}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Digite uma mensagem..."
            style={{ flex: '1', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
          <Button label="Enviar" icon="pi pi-send" onClick={handleSendMessage} style={{ backgroundColor: '#0471DA', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', transition: 'background-color 0.3s' }} />
        </div>
      </div>
      <div style={{ flex: '0.7', paddingLeft: '10px', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginLeft: '30px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Conversas recentes</h2>
        {/* Adicione aqui a lista de conversas recentes */}
      </div>
    </div>
  );
}

export default Chat;

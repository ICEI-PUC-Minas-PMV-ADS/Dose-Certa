import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';

type Message = { text: string; sender: 'user' | 'bot'; userName?: string };

function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [userName, setUserName] = useState('');
    const [chatEnded, setChatEnded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatEnded) {
            setMessages([]);
            setUserName('');
            setUserInput('');
            setChatEnded(false);
            setShowMenu(false);
        } else if (messages.length === 0) {
            setMessages([{ text: "Olá, como você se chama?", sender: "bot" }]);
        }
    }, [chatEnded, messages.length]);

    const getBotResponse = useCallback(
        (userInput: string, messages: Message[]) => {
            const normalizedInput = userInput.toLowerCase().trim();
            const greetingPatterns = [/^oi/, /^olá/, /^tudo bem/, /^eae/, /^salve/];
            const endChatPatterns = [/^encerrar/, /^terminar/, /^sair/, /^tchau/, /^adeus/];

            if (greetingPatterns.some(pattern => pattern.test(normalizedInput))) {
                return "Olá, como você se chama?";
            } else if (endChatPatterns.some(pattern => pattern.test(normalizedInput))) {
                setChatEnded(true);
                return "Até logo!";
            } else if (showMenu) {
                if (userInput === "1") {
                    setShowMenu(false);
                    return `Olá, ${userName}! Como posso te ajudar?<br /><br />1 - Como Cadastrar Pacientes<br />2 - Como Funcionam as Anotações<br />3 - Como Cadastrar Medicações`;
                } else if (userInput === "2") {
                    setChatEnded(true);
                    return "Até logo!";
                } else {
                    return "Desculpe, não entendi. Por favor, escolha uma opção válida (1 ou 2).";
                }
            } else {
                if (userInput === "1") {
                    setShowMenu(true);
                    return "Certo! Para Cadastrar Pacientes você deve seguir estes passos:<br />1 - Acessar a tela de pacientes<br />2 - Clicar no botão à direita da tela<br />3 - Preencher os dados<br /><br />O que deseja fazer agora?<br /><br />1 - Voltar ao menu<br />2 - Encerrar chat";
                } else if (userInput === "2") {
                    setShowMenu(true);
                    return "Explicação sobre as anotações...<br /><br />O que deseja fazer agora?<br /><br />1 - Voltar ao menu<br />2 - Encerrar chat";
                } else if (userInput === "3") {
                    setShowMenu(true);
                    return "Instruções para cadastrar medicações...<br /><br />O que deseja fazer agora?<br /><br />1 - Voltar ao menu<br />2 - Encerrar chat";
                } else if (messages.length === 1) {
                    setUserName(userInput);
                    return `Olá, ${userInput}! Como posso te ajudar?<br /><br />1 - Como Cadastrar Pacientes<br />2 - Como Funcionam as Anotações<br />3 - Como Cadastrar Medicações`;
                } else {
                    return "Desculpe, não entendi. Por favor, escolha uma das opções.";
                }
            }
        },
        [showMenu, userName]
    );

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: userInput, sender: "user", userName },
                { text: getBotResponse(userInput, prevMessages), sender: "bot" },
            ]);
            setUserInput('');
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-container">
                <div className="chat-header">
                    <h2>BOT RODRIGO</h2>
                </div>
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            {message.sender === 'bot' && (
                                <Image
                                    src="/img/iconBot.svg" // Caminho relativo à pasta public
                                    alt="Bot"
                                    className="avatar"
                                    width={40}
                                    height={40}
                                />
                            )}
                            <p dangerouslySetInnerHTML={{ __html: message.text }} />
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Escreva uma mensagem..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}>
                        <FiSend size={20} color="#EDF5FF" />
                    </button>
                </div>

                <style jsx>{`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

        .chat-container {
            font-family: 'Outfit', sans-serif;
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            background-color: #fff;
            }

            .chat-header {
                background-color: #007bff;
                text-align: center;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .chat-header h2
                color: white;
                font-size: 14px;
                font-weight: bold;
                margin: 0;
            }

            .chat-messages {
            padding: 10px;
            height: 300px;
            overflow-y: auto;
            }

            .message {
            display: flex;
            align-items: flex-start;
            margin-bottom: 10px;
            }

            .message.user {
            justify-content: flex-end;
            }

            .message.user p {
            background-color: #97C2F8;
            color: #333;
            padding: 8px 12px;
            border-radius: 15px 15px 0 15px;
            max-width: 75%;
            }

            .message.bot {
            justify-content: flex-start;
            }

            .message.bot p {
            background-color: #EDF5FF;
            color: #333;
            padding: 8px 12px;
            border-radius: 15px 15px 15px 0;
            max-width: 75%;
            }

            .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
            }

            .chat-input {
                display: flex;
                align-items: center;
                padding: 10px;
                background-color: #F0F7FF;
              }

              .chat-input input {
                flex: 1; /* Faz o input ocupar todo o espaço disponível */
                height: 40px;
                border: none;
                outline: none;
                background-color: transparent;
                margin: 0 10px;
                padding: 0 15px;
              }


            .chat-input button {
                background-color: #97C2F8;
                width: 40px;
                height: 40px;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
              }

      `}</style>
            </div>
        </div>
    );
}

export default Chatbot;

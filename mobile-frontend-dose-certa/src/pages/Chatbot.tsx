import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type Message = { text: string; sender: 'user' | 'bot'; userName?: string };

function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [userName, setUserName] = useState('');
    const [chatEnded, setChatEnded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const messagesEndRef = useRef<ScrollView>(null);

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
        messagesEndRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <View style={styles.chatContainer}>
            <View style={styles.chatHeader}>
                <Text style={styles.chatHeaderText}>BOT RODRIGO</Text>
            </View>

            <ScrollView
                ref={messagesEndRef}
                onContentSizeChange={() => messagesEndRef.current?.scrollToEnd({ animated: true })}
                style={styles.chatMessages}
            >
                {messages.map((message, index) => (
                    <View key={index} style={[styles.message, message.sender === 'user' ? styles.userMessage : styles.botMessage]}>
                        {message.sender === 'bot' && (
                            <Image source={require('./img/iconBot.svg')} style={styles.avatar} />
                        )}
                        <Text style={[styles.messageText, message.sender === 'user' ? styles.userMessageText : {}]}>
                            {message.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.chatInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva uma mensagem..."
                    value={userInput}
                    onChangeText={setUserInput}
                    onSubmitEditing={handleSendMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Icon name="send" size={20} color="#EDF5FF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chatHeader: {
        backgroundColor: '#007bff',
        padding: 15,
        alignItems: 'center',
    },
    chatHeaderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    chatMessages: {
        flex: 1,
        padding: 10,
    },
    message: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    userMessage: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    botMessage: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    messageText: {
        backgroundColor: '#EDF5FF',
        borderRadius: 15,
        maxWidth: '80%',
    },
    userMessageText: {
        backgroundColor: '#97C2F8',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    chatInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007bff',
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Chatbot;

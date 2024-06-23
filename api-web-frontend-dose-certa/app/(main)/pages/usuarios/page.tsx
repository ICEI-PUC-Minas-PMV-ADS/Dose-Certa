'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useRef } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

const Usuarios = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('Agente');
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const toast = useRef<Toast>(null);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });
    const imageSrc = 'public/demo/images/login/logo.png';
    const handleCadastrar = async () => {

        try {
            if (!name || !cpf || !dataNascimento || !email || !password) {
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Preencha todos os campos.' });
                return;
            }

            const response = await fetch(`https://dosecerta.azurewebsites.net/api/Users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, cpf, dataNascimento, email, password, userType }),
            });

            if (!response.ok) {
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao cadastrar usuário.' });
            }

            toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado com sucesso' });

            router.push('/auth/login');
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Falha no cadastro.' });

        }
    };

    return (
        <div className={containerClassName}>
        <div className="flex flex-row items-center justify-center">
            {/* Imagem à esquerda */}
            <div className="w-1/2">
                {/* Coloque aqui a tag da imagem */}
               {/* <img src={imageSrc} alt="Imagem de fundo" className="w-full h-auto object-cover" />  */}
            </div>
            {/* Formulário de login à direita */}
            <div className="w-1/2">
                <div className="flex flex-column align-items-center justify-content-center">
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Seja bem, vindo(a)!</div>
                            <span className="text-600 font-medium">Faça seu cadastro para continuar</span>
                        </div>
                        <div>
                            <label htmlFor="nome1" className="block text-900 text-xl font-medium mb-2">
                                Nome
                            </label>
                            <InputText id="nome1" type="text" placeholder="Nome" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} onChange={(e) => setName(e.target.value)}/>
                            {/* inputs cpf e data de ascimento  */}
                            <label htmlFor="cpf1" className="block text-900 text-xl font-medium mb-2">
                                CPF
                            </label>
                            <InputText id="cpf1" type="text" placeholder="CPF" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} onChange={(e) => setCpf(e.target.value)}/>
                            <label htmlFor="dataNascimento1" className="block text-900 text-xl font-medium mb-2">
                                Data de Nascimento
                            </label>
                            <InputText id="dataNascimento1" type="text" placeholder="Data de Nascimento" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} onChange={(e) => setDataNascimento(e.target.value)}/>
                            {/* inputs email e senha */}
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                            <InputText id="email1" type="text" placeholder="Email" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }}  onChange={(e) =>  setEmail(e.target.value)}/>
    
                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Senha
                            </label>
                            <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>
    
                            <div className="flex align-items-center justify-content-between mb-5">
    
                            </div>
                            <Button label="Cadastrar" className="w-full p-3 text-xl" onClick={handleCadastrar}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Usuarios;

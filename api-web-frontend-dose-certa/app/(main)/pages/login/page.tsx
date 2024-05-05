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

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const toast = useRef<Toast>(null);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:5092/api/auth/login?key=WKKTxXNEyayNn7frBp0ErULwxQYvaZaU`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Falha na autenticação');
            }
    
            const data = await response.json();
            localStorage.setItem('tokenDoseCerta', data.token);
            toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Login efetuado com sucesso' });

            router.push('/dashboard');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Falha na autenticação' });
           
        }
    };

    return (
        <div className={containerClassName}>
            <div className="flex flex-row items-center justify-center">
                {/* Imagem à esquerda */}
                <div className="w-1/2">
                    {/* <img src={imageSrc} alt="Imagem de fundo" className="w-full h-auto object-cover" /> */}
                </div>
                {/* Formulário de login à direita */}
                <div className="w-1/2">
                    <div className="flex flex-column align-items-center justify-content-center">
                        <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">
                                <div className="text-900 text-3xl font-medium mb-3">Seja bem, vindo(a)!</div>
                                <span className="text-600 font-medium">Faça login para continuar</span>
                            </div>
                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText id="email1" type="text" placeholder="Email" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                    Senha
                                </label>
                                <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                    <div className="flex align-items-center">
                                        <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2"></Checkbox>
                                        <label htmlFor="rememberme1">Lembrar-me</label>
                                    </div>
                                    <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Esqueceu a senha?
                                </a>
                                </div>
                                <Button label="Sign In" className="w-full p-3 text-xl" onClick={handleLogin}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';

const LandingPage = () => {

    const router = useRouter();

    const handleLoginClick = () => {
        router.replace('/auth/login');
    };

    const handleRegisterClick = () => {
        router.replace('/pages/usuarios');
    };

    return (
        <div className="d-flex">
            <div className="p-2 w-100 flex justify-content-end">
                <Button
                    label="ENTRAR"
                    icon="pi pi-plus"
                    style={{ marginRight: '.5em', backgroundColor: '#0C84F3', border: 'none' }}
                    onClick={handleLoginClick}
                />
                <Button
                    label="CADASTRAR"
                    icon="pi pi-plus"
                    style={{ marginRight: '.5em', backgroundColor: '#0C84F3', border: 'none' }}
                    onClick={handleRegisterClick}
                />
            </div>

            <div className="surface-0 text-700 text-center">
                <div className="text-blue-600 font-bold mb-3">saúde em equilíbrio</div>
                <div className="text-900 font-bold text-5xl mb-3">DOSE CERTA</div>
                <div className="text-600 text-2xl mb-5">organização de medicamentos simples e acessível</div>

            </div>
        </div>
    );
}
export default LandingPage;
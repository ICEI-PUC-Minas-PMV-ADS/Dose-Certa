import React, { useEffect } from 'react';
import { useLogin } from './LoginContext';
import LandingPage from '../app/(main)/pages/landing/page';
import LoginPage from './(main)/pages/login/page';
import Usuarios from './(main)/pages/usuarios/page';
import { useRouter, usePathname } from 'next/navigation';
import Dashboard from './(main)/page';
import PacientesDemo from './(main)/pages/pacientes/page';
import ResidenciaDemo from './(main)/pages/residencia/page';
import AnotacaoDemo from './(main)/pages/note/page';
import VisitaDemo from './(main)/pages/visita/page';

const AppRoutes = () => {
  const { isLoggedIn } = useLogin();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn && pathname !== '/auth/login' && pathname !== '/pages/usuarios') {
      router.replace('/');
    }
  }, [isLoggedIn, router, pathname]);

  return (
    <>
      {isLoggedIn ? ( 
        <>
          {pathname === '/dashboard' ? <Dashboard /> : null}
          {pathname === '/pages/pacientes' ? <PacientesDemo /> : null}
          {pathname === '/pages/residencia' ? <ResidenciaDemo /> : null}
          {pathname === '/pages/note' ? <AnotacaoDemo /> : null}
          {pathname === '/pages/visita' ? <PacientesDemo /> : null}
          {pathname === '/pages/visita' ? <VisitaDemo /> : null}

        </>
      ) : (
        <> {/* Rotas acessíveis apenas se não estiver logado */}
          {pathname === '/' ? <LandingPage /> : null}
          {pathname === '/pages/usuarios' ? <Usuarios /> : null} 
          {pathname === '/auth/login' ? <LoginPage /> : null}
          
        </>
      )}
    </>
  );
};

export default AppRoutes;



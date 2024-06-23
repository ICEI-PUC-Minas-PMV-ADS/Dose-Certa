import React, { useEffect } from 'react';
import { useLogin } from './LoginContext';
import LandingPage from '../app/(main)/pages/landing/page';
import LoginPage from './(main)/pages/login/page';
import Usuarios from './(main)/pages/usuarios/page';
import { useRouter, usePathname } from 'next/navigation';
import Dashboard from './(main)/page';

import PacientesDemo from './(main)/pages/pacientes/page';
import MedicamentoDemo from './(main)/pages/medicamentos/page';
import MedicacoesDemo from './(main)/pages/medicacao/page';
import ResidenciaDemo from './(main)/pages/residencia/page';
import VisitasDemo from './(main)/pages/visita/page';
import AnotacaoDemo from './(main)/pages/note/page';
import DashboardDemo from './(main)/pages/dashboard/page';

const AppRoutes = () => {
  const { isLoggedIn } = useLogin();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn && pathname !== '/auth/login' && pathname !== '/pages/usuarios') {
      // router.replace('/');
    }
  }, [isLoggedIn, router, pathname]);

  return (
    <>
      {isLoggedIn ? ( 
        <>
          {pathname === '/pages/dashboard' ? <DashboardDemo /> : null}
          {pathname === '/pages/pacientes' ? <PacientesDemo /> : null}
          {pathname === '/pages/medicamento' ? <MedicamentoDemo /> : null}
          {pathname === '/pages/medicacoes' ? <MedicacoesDemo /> : null}
          {pathname === '/pages/residencias' ? <ResidenciaDemo /> : null}
          {pathname === '/pages/visitas' ? <VisitasDemo /> : null}
          {pathname === '/pages/anotacoes' ? <AnotacaoDemo /> : null}

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



import React, { useEffect } from 'react';
import { useLogin } from './LoginContext';
import LandingPage from '../app/(main)/pages/landing/page';
import { useRouter, usePathname } from 'next/navigation';
import LoginPage from './(main)/pages/login/page';
const AppRoutes = () => {

  const { isLoggedIn } = useLogin();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {

    if (!isLoggedIn && pathname != '/auth/login') {
      router.replace('/');
    }
  }, [isLoggedIn, router, pathname]);

  return (
    <>
      {!isLoggedIn && pathname != '/auth/login'  ? <LandingPage /> : <LoginPage />}
    </>
  );
};

export default AppRoutes;

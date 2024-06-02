import React from 'react';

import {useUser} from '../contexts/UserContext';
import Auth from './auth';
import MyDrawer from './mydrawer';

const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed 
      ? <MyDrawer />
      : <Auth />
    }
    </>
  )
}

export default Route;
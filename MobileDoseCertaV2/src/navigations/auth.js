import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import NewAccountPage from '../pages/NewAccountPage';
import LandingPage from '../pages/LandingPage';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="NewAccount"
        component={NewAccountPage}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Auth;

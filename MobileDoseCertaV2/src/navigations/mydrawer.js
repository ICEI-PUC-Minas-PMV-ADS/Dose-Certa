import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import {
  HouseSimple,
  User,
  Pulse,
  Pill,
  Key,
  DoorOpen,
  PencilSimple,
  SignOut,
} from "phosphor-react-native";
import { useUser } from "../contexts/UserContext";
import axios from "axios";

import Dashboard from "../pages/dashboard";
import Pacientes from "../pages/pacientes";
import Medicamento from "../pages/medicamento";
import Medicacao from "../pages/medicacao";
import Residencias from "../pages/residencias";
import Anotacoes from "../pages/anotacoes";
import Visitas from "../pages/visitas";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const { setSigned, setName } = useUser();

  const handleLogout = () => {
    axios
      .post(
        "https://dosecerta.azurewebsites.net/api/auth/logout",
        {},
        {
          headers: {
            "x-api-key": "WKKTxXNEyayNn7frBp0ErULwxQYvaZaU",
          },
        }
      )
      .then((response) => {
        setSigned(false);

        // Limpar o token de autenticação ou qualquer outro estado relacionado ao login
        // Por exemplo: localStorage.removeItem('token');
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
        Alert.alert("Erro", "Falha no logout", [
          { text: "OK", onPress: () => console.log(error.message) },
        ]);
      });
  };

  const LogoutScreen = () => {
    handleLogout();
    return null;
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#177CED",
        drawerActiveBackgroundColor: "#177CED",
        drawerInactiveBackgroundColor: "#fff",
        drawerItemStyle: {
          borderTopLeftRadius: 55,
          borderBottomLeftRadius: 55,
          paddingLeft: 15,
          marginRight: -10,
        },
        drawerStyle: {
          paddingTop: 30,
          gap: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Visão Geral"
        component={Dashboard}
        options={{
          drawerIcon: ({ focused }) => (
            <HouseSimple size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="Pacientes"
        component={Pacientes}
        options={{
          drawerIcon: ({ focused }) => (
            <User size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Pacientes",
        }}
      />
      <Drawer.Screen
        name="Medicamentos"
        component={Medicamento}
        options={{
          drawerIcon: ({ focused }) => (
            <Pulse size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Medicamentos",
        }}
      />
      <Drawer.Screen
        name="Medicações"
        component={Medicacao}
        options={{
          drawerIcon: ({ focused }) => (
            <Pill size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Medicações",
        }}
      />
      <Drawer.Screen
        name="Residências"
        component={Residencias}
        options={{
          drawerIcon: ({ focused }) => (
            <Key size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Residências",
        }}
      />
      <Drawer.Screen
        name="Visitas"
        component={Visitas}
        options={{
          drawerIcon: ({ focused }) => (
            <DoorOpen size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Visitas",
        }}
      />
      <Drawer.Screen
        name="Anotações"
        component={Anotacoes}
        options={{
          drawerIcon: ({ focused }) => (
            <PencilSimple size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Anotações",
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={LogoutScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <SignOut size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Sair",
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  activeDrawerItem: {
    backgroundColor: "lightblue",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

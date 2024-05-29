import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import {
  HouseSimple,
  User,
  Pulse,
  Pill,
  Key,
  DoorOpen,
  PencilSimple,
} from "phosphor-react-native";
import Dashboard from "../pages/dashboard";
import Pacientes from "../pages/pacientes";
import Medicamento from "../pages/medicamento";
import Medicacao from "../pages/medicacao";
import Residencias from "../pages/residencias";
import Anotacoes from "../pages/anotacoes";
import Visitas from "../pages/visitas";



const Drawer = createDrawerNavigator();

export default function MyDrawer() {
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
          drawerIcon: ({ focused, size, color }) => (
            <HouseSimple size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="Pacientes"
        component={Pacientes}
        options={{
          drawerIcon: ({ focused, size }) => (
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
          drawerIcon: ({ focused, size }) => (
            <PencilSimple size={18} color={focused ? "#fff" : "#177CED"} />
          ),
          drawerLabel: "Anotações",
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

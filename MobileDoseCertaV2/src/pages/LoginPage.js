import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationProp } from '@react-navigation/native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <Button
        mode="contained"
        color="#0C84F3"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate('NewAccount')}
      >
        Cadastro
      </Button>
      <Button
        mode="contained"
        color="#0C84F3"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate('LandingPage')}
      >
        LandingPage
      </Button>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
});

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Dose Certa</Text>
        <Text style={styles.subtitle}>Saúde em equilíbrio</Text>
      </View>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={require("../assets/img/img-landing-page.png")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          mode="contained"
          textColor={"#1631C2"}
          buttonColor={"#D9D9D9"}
          style={styles.btnLogin}
          onPress={() => navigation.navigate("LoginPage")}
        >
          Entrar
        </Button>
        <Button
          mode="contained"
          textColor={"#D9D9D9"}
          buttonColor={"#1631C2"}
          style={styles.btnNewAccount}
          onPress={() => navigation.navigate("NewAccount")}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#1631C2",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "semibold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "semibold",
  },
  containerText: {
    width: "80%",
    display: "flex",
    gap: 14,
    marginTop: 40
  },
  containerImg: {
    width: '80%'
  },
  img: {
    width: 300,
    height: 327.37
  },
  btn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 26,
  },
  btnLogin: {
    borderRadius: 20,
    width: 300,
    padding: 5,
  },
  btnNewAccount: {
    width: 300,
    padding: 5,
    borderRadius: 20,
    borderWidth: 0.6,
    borderColor: '#D9D9D9'
  },
  btnNewAccountText: {
    color: '#D9D9D9',
    textAlign: 'center'
  },
});

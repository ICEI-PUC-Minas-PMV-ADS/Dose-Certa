import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useUser } from "../contexts/UserContext";
import axios from "axios";

const LoginPage = ({ navigation }) => {
  const emptyAgente = {
    id: null,
    email: "",
    password: "",
  };

  const { setSigned, setName } = useUser();
  const [agente, setAgente] = useState(emptyAgente);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onInputEmailChange = (value) => {
    setAgente((prevAgente) => ({ ...prevAgente, email: value }));
  };

  const onInputPasswordChange = (value) => {
    setAgente((prevAgente) => ({ ...prevAgente, password: value }));
  };

  const handleEntrar = () => {
    if (!agente.email.trim() || !agente.email.includes("@")) {
      Alert.alert("Alerta", "Insira um email válido.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    if (!agente.password.trim()) {
      Alert.alert("Alerta", "Insira uma senha válida.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    const credentials = {
      email: agente.email,
      password: agente.password,
    };

    axios
      .post("https://dosecerta.azurewebsites.net/api/auth/login", credentials, {
        headers: {
          "x-api-key": "WKKTxXNEyayNn7frBp0ErULwxQYvaZaU",
        },
      })
      .then((response) => {
        setSigned(true);
      })
      .catch((error) => {
        console.log(error.response);
        Alert.alert("Erro", `Erro ao fazer login: ${error.message}`, [
          { text: "OK", onPress: () => console.log(error.message) },
        ]);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.TexTitle}>OLÁ, SEJA BEM VINDO(A)!</Text>
        <Text variant="bodyMedium">Faça login para continuar</Text>
      </View>
      <View style={styles.containerForm}>
        <View style={styles.groupUsersModal}>
          <Text variant="bodyMedium">Email:</Text>
          <TextInput
            value={agente.email}
            onChangeText={onInputEmailChange}
            style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
          />
        </View>

        <View style={styles.groupUsersModal}>
          <Text variant="bodyMedium">Senha:</Text>
          <TextInput
            value={agente.password}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={toggleShowPassword}
              />
            }
            onChangeText={onInputPasswordChange}
            style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <View style={styles.btn}>
          <Button
            mode="contained"
            textColor={"#D9D9D9"}
            buttonColor={"#1631C2"}
            style={styles.btnEntrar}
            onPress={handleEntrar}
          >
            Entrar
          </Button>
          <TouchableOpacity
            mode="contained"
            textColor={"#D9D9D9"}
            buttonColor={"#1631C2"}
            style={styles.btnLoginText}
            onPress={() => navigation.navigate("NewAccount")}
          >
            <Text>Não tem uma conta? Faça o Cadastro aqui.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 25,
    alignItems: "center",
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  TexTitle: {
    color: "#022E4E",
    fontSize: 34,
    fontWeight: "medium",
    textTransform: "uppercase",
    width: 300,
    textAlign: "center",
  },
  btn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 26,
  },
  btnEntrar: {
    borderRadius: 20,
    width: 300,
    padding: 5,
  },
  btnNewAccount: {
    width: 300,
    padding: 5,
    borderRadius: 20,
    borderWidth: 0.6,
    borderColor: "#D9D9D9",
  },
  btnLoginText: {
    color: "#D9D9D9",
    textAlign: "center",
  },
  containerForm: {
    width: 300,
  },
  groupUsersModal: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
  },
  groupStatus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

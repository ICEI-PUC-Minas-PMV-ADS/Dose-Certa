import React, {useState} from "react";
import { View, StyleSheet, Pressable, TouchableOpacity, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

const NewAccountPage = ({ navigation }) => {
  const emptyAgente = {
    id: null,
    name: "",
    email: "",
    password: "",
    userType: "Agente",
    cpf: "",
    dataNascimento: new Date(),
  };

  const [agente, setAgente] = useState(emptyAgente);
  const [showPassword, setShowPassword] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  const onInputNomeChange = (value) => {
    setAgente((prevAgente) => ({ ...prevAgente, name: value }));
  };

  const onInputEmailChange = (value) => {
    setAgente((prevAgente) => ({ ...prevAgente, email: value }));
  };

  const onInputCPFChange = (value) => {
    setAgente((prevAgente) => ({ ...prevAgente, cpf: value }));
  };

  const onInputPasswordChange = (value) => {
    setAgente((prevAgente) => ({ ...prevAgente, password: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || agente.dataNascimento;
    setShowPicker(false);
    setAgente({
      ...agente,
      dataNascimento: currentDate,
      formattedDataNascimento: formatDate(currentDate),
    });
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const handleTextInputClick = () => {
    setAgente((prevState) => ({
      ...prevState,
      showPicker: true,
    }));
  };

  const handleCadastrar = () => {
    if (!agente.name.trim()) {
      Alert.alert('Alerta', "O campo 'Nome' é obrigatório.", [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    if (!agente.email.trim() || !agente.email.includes('@')) {
      Alert.alert('Alerta', "O campo 'Email' é obrigatório.", [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    if (!agente.cpf.length === 11) {
      Alert.alert('Alerta', "O campo 'CPF' deve conter 11 caracteres.", [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    if (!agente.password.trim()) {
      Alert.alert('Alerta', "Insira uma senha válida.", [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    const formattedDataNascimento = formatDate(agente.dataNascimento);
    const newUSer = {
      name: agente.name,
      email: agente.email,
      password: agente.password,
      userType: "Agente",
      cpf: agente.cpf,
      dataNascimento: formattedDataNascimento,
    };

    const request = axios.post("https://dosecerta.azurewebsites.net/api/Users", newUSer);

    request
      .then((response) => {
        setAgente({
          ...emptyAgente,
        });
        navigation.navigate("LoginPage")
      })
      .catch((error) => {
        console.error(
          "Erro ao salvar agente:",
          error.response ? error.response.data : error
        );
      });
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.TexTitle}>OLÁ, SEJA BEM VINDO(A)!</Text>
        <Text variant="bodyMedium">Faça seu cadastro para continuar</Text>
      </View>
      <View style={styles.containerForm}>
      <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Nome:</Text>
                <TextInput
                  value={agente.name}
                  onChangeText={onInputNomeChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Email:</Text>
                <TextInput
                  value={agente.email}
                  onChangeText={onInputEmailChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">CPF:</Text>
                <TextInput
                  value={agente.cpf}
                  onChangeText={onInputCPFChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Data de Nascimento:</Text>
                {showPicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={new Date(agente.dataNascimento)}
                    onChange={onChangeDate}
                  />
                )}
                <Pressable onPress={toggleDatepicker}>
                  <TextInput
                    value={agente.formattedDataNascimento}
                    onFocus={handleTextInputClick}
                    style={{
                      backgroundColor: "#EDF5FF",
                      borderColor: "#4B92E1",
                    }}
                    editable={false}
                  />
                </Pressable>
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
            style={styles.btnRegistrar}
            onPress={handleCadastrar}
          >
            Registre-se
          </Button>
          <TouchableOpacity
            mode="contained"
            textColor={"#D9D9D9"}
            buttonColor={"#1631C2"}
            style={styles.btnNewAccountText}
            onPress={() => navigation.navigate("LoginPage")}
          >
            <Text>Já tem uma conta? Faça o Login aqui.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewAccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: 'center',
    gap: 25,
    alignItems: "center",
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  TexTitle: {
    color: "#022E4E",
    fontSize: 34,
    fontWeight: "medium",
    textTransform: 'uppercase',
    width: 300,
    textAlign: 'center'
  },
  btn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 26,
  },
  btnRegistrar: {
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
  btnNewAccountText: {
    color: "#D9D9D9",
    textAlign: "center",
  },
  containerForm: {
    width: 300
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
  }
});


import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
  DataTable,
  IconButton,
  Divider,
  TextInput
} from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";

const PacientesDemo = () => {
  let emptyPacientes = {
    id: '',
    name: '',
    cpf: '',
    dataNascimento: new Date(),
    status: ''
  };

  const [data, setData] = useState([]);
  const [user, setUser] = useState(emptyPacientes);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userDialog, setUserDialog] = useState(false);
  const [deleteUserDialog, setDeleteUserDialog] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://192.168.0.6:5092/api/users')
      .then((response) => {
        console.log(response.data)
        

        setData(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  const hideDialog = () => {
    setUserDialog(false);
  };

  const hideDeleteUserDialog = () => {
    setDeleteUserDialog(false);
  };

  const openNew = (userId = null) => {
    setSelectedUserId(userId);
    setUserDialog(true);

    if (userId) {
      const selectedUser:any = data.find((user:any) => user.id === userId);
      if (selectedUser) {
        setUser({ ...selectedUser, dataNascimento: new Date(selectedUser.dataNascimento) });
      }
    } else {
      setUser({ ...emptyPacientes });
    }
  };

  const saveUser = () => {
    const newUser = {
      dataNascimento: user.dataNascimento,
      cpf: user.cpf,
      name: user.name,
      email: "teste@gmail.com",
      password: "23456",
      userType: "Agente"
    };

    const request = selectedUserId 
      ? axios.put(`http://192.168.0.6:5092/api/users/${selectedUserId}`, newUser) 
      : axios.post('http://192.168.0.6:5092/api/users', newUser);

    request
      .then(() => {
        hideDialog();
        fetchData();
      })
      .catch((error) => {
        console.error('Erro ao salvar paciente:', error);
      });
  };

  const onInputChange = (name:any, value:any) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onCalendarChange = (event:any, selectedDate:any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setUser((prevState) => ({
        ...prevState,
        dataNascimento: selectedDate
      }));
    }
  };

  const confirmDelete = (userId:any) => {
    setSelectedUserId(userId);
    setDeleteUserDialog(true);
  };

  const deleteUser = () => {
    axios
      .delete(`http://192.168.0.6:5092/api/users/${selectedUserId}`)
      .then(() => {
        hideDeleteUserDialog();
        fetchData();
      })
      .catch((error) => {
        console.error('Erro ao excluir paciente:', error);
      });
  };

  const from = 0;
  const to = data.length;

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium">{""}</Text>
          <Button
            icon="plus"
            mode="contained"
            buttonColor="#0C84F3"
            textColor="#fff"
            style={{ borderRadius: 10 }}
            onPress={() => openNew()}
          >
            Novo
          </Button>
        </View>
        {/* <TextInput
          label="Pesquisar"
          value={globalFilter}
          onChangeText={(value) => setGlobalFilter(value)}
          placeholder="Pesquisar..."
          style={styles.searchBar}
        /> */}
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nome</DataTable.Title>
            <DataTable.Title>CPF</DataTable.Title>
            <DataTable.Title>Data de Nascimento</DataTable.Title>
            <DataTable.Title>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item:any) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.cpf}</DataTable.Cell>
              <DataTable.Cell>{item.dataNascimento}</DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                  icon="pencil"
                  iconColor="#F24E1E"
                  size={20}
                  onPress={() => openNew(item.id)}
                />
                <IconButton
                  icon="trash-can"
                  iconColor="#44BF30"
                  size={20}
                  onPress={() => confirmDelete(item.id)}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>

        <Portal>
          <Dialog
            visible={userDialog}
            onDismiss={hideDialog}
            style={styles.dialog}
          >
            <Dialog.Title>{selectedUserId ? 'Editar Paciente' : 'Novo Paciente'}</Dialog.Title>
            <Divider />
            <Dialog.Content>
              <View>
                <Text variant="bodyMedium">Nome:</Text>
                <TextInput
                  value={user.name}
                  onChangeText={(value) => onInputChange('name', value)}
                  placeholder="Digite o nome"
                  style={styles.input}
                />
              </View>
              <View>
                <Text variant="bodyMedium">CPF:</Text>
                <TextInput
                  value={user.cpf}
                  onChangeText={(value) => onInputChange('cpf', value)}
                  placeholder="Digite o CPF"
                  style={styles.input}
                />
              </View>
              <View>
                <Text variant="bodyMedium">Data de Nascimento:</Text>
                <Button onPress={() => setShowDatePicker(true)}>{user.dataNascimento.toLocaleDateString('pt-BR')}</Button>
                {showDatePicker && (
                  <DateTimePicker
                    value={user.dataNascimento}
                    mode="date"
                    display="default"
                    onChange={onCalendarChange}
                  />
                )}
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon="close"
                textColor="#FF0000"
                onPress={hideDialog}
              >
                Cancelar
              </Button>
              <Button
                icon="content-save"
                textColor="#00FF00"
                onPress={saveUser}
              >
                Salvar
              </Button>
            </Dialog.Actions>
          </Dialog>

          <Dialog
            visible={deleteUserDialog}
            onDismiss={hideDeleteUserDialog}
          >
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content>
              <View style={styles.confirmation}>
                <Text>Tem certeza de que deseja excluir?</Text>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={hideDeleteUserDialog}
                textColor="#FF0000"
              >
                Não
              </Button>
              <Button
                onPress={deleteUser}
                textColor="#00FF00"
              >
                Sim
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  searchBar: {
    marginBottom: 10,
    backgroundColor: '#EDF5FF',
    borderColor: '#4B92E1'
  },
  dialog: {
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    backgroundColor: '#EDF5FF',
    borderColor: '#4B92E1',
    marginBottom: 10
  },
  confirmation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default PacientesDemo;
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  Provider as PaperProvider,
  Text,
  DataTable,
  IconButton,
  Divider,
  TextInput,
} from "react-native-paper";
import { PaintBrush, Warning, Eye } from "phosphor-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

const Pacientes = () => {
  const emptyPaciente = {
    id: null,
    name: "",
    email: "",
    password: "",
    userType: "Paciente",
    cpf: "",
    dataNascimento: new Date(),
  };

  const [data, setData] = useState([]);
  const [paciente, setPaciente] = useState(emptyPaciente);

  const [selectedPacienteId, setSelectedPacienteId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [editPacienteDialog, setEditPacienteDialog] = useState(false);
  const [edit, setEdit] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [deletePacienteDialog, setDeletePacienteDialog] = useState(false);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  useEffect(() => {
    fetchData();
  }, []);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day); // Mês em JavaScript é zero-based
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dosecerta.azurewebsites.net/api/Users");
      const pacientesData = response.data.map((paciente) => ({
        ...paciente,
        dataNascimento: parseDate(paciente.dataNascimento), // Convertendo a string para Date
      }));
      setData(pacientesData);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  const openModal = (item) => {
    if (item.hasOwnProperty("name")) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      console.error("O item não é um paciente válido.");
    }
  };

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  const openNew = (pacienteId = null) => {
    setSelectedPacienteId(pacienteId);
    setDialogVisible(true);
    if (pacienteId) {
      const selectedPaciente = data.find(
        (paciente) => paciente.id === pacienteId
      );
      if (selectedPaciente) {
        setPaciente({
          ...selectedPaciente,
          dataNascimento: new Date(selectedPaciente.dataNascimento),
          formattedDataNascimento: formatDate(
            new Date(selectedPaciente.dataNascimento)
          ),
        });
      }
    } else {
      setPaciente({
        ...emptyPaciente,
        formattedDataNascimento: formatDate(new Date()), // Removendo redundância
      });
    }
  };

  const savePaciente = () => {
    const formattedDataNascimento = formatDate(paciente.dataNascimento);
    const newUSer = {
      name: paciente.name,
      email: paciente.email,
      password: paciente.password,
      userType: "Paciente",
      cpf: paciente.cpf,
      dataNascimento: formattedDataNascimento,
    };

    const request = paciente.id
      ? axios.put(`https://dosecerta.azurewebsites.net/api/Users/${paciente.id}`, newUSer)
      : axios.post("https://dosecerta.azurewebsites.net/api/Users", newUSer);

    request
      .then((response) => {
        setDialogVisible(false);
        fetchData();
        setPaciente({
          ...paciente,
          formattedDataNascimento: formattedDataNascimento,
        });
      })
      .catch((error) => {
        console.error(
          "Erro ao salvar paciente:",
          error.response ? error.response.data : error
        );
      });
  };

  const deletePaciente = () => {
    axios
      .delete(`https://dosecerta.azurewebsites.net/api/Users/${selectedPacienteId}`)
      .then((response) => {
        setDeletePacienteDialog(false);
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover paciente:", error);
      });
  };

  const confirmDelete = (pacienteId) => {
    setSelectedPacienteId(pacienteId);
    setDeletePacienteDialog(true);
  };

  const editPaciente = (paciente) => {
    setPaciente(paciente);
    setEditPacienteDialog(true);
    setEdit(true);
    openNew(paciente.id);
  };

  const onInputNomeChange = (value) => {
    setPaciente((prevPaciente) => ({ ...prevPaciente, name: value }));
  };

  const onInputEmailChange = (value) => {
    setPaciente((prevPaciente) => ({ ...prevPaciente, email: value }));
  };

  const onInputCPFChange = (value) => {
    setPaciente((prevPaciente) => ({ ...prevPaciente, cpf: value }));
  };

  const onInputPasswordChange = (value) => {
    setPaciente((prevPaciente) => ({ ...prevPaciente, password: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || paciente.dataNascimento;
    setShowPicker(false);
    setPaciente({
      ...paciente,
      dataNascimento: currentDate,
      formattedDataNascimento: formatDate(currentDate),
    });
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const handleTextInputClick = () => {
    setPaciente((prevState) => ({
      ...prevState,
      showPicker: true,
    }));
  };

  const hideDeletePacienteDialog = () => {
    setDeletePacienteDialog(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.btn}>
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

        <DataTable style={{color: '#000'}}>
          <DataTable.Header>
            <DataTable.Title style={styles.column}>Nome</DataTable.Title>
            <DataTable.Title style={styles.column}>Email</DataTable.Title>
            <DataTable.Title style={styles.column}>CPF</DataTable.Title>
            <DataTable.Title style={styles.buttonColumn}>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id} onPress={() => openModal(item)}>
              <DataTable.Cell style={styles.column}>{item.name}</DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                {item.email}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>{item.cpf}</DataTable.Cell>
              <DataTable.Cell style={styles.buttonColumn}>
                <View style={styles.iconContainer}>
                  <IconButton
                    icon="pencil"
                    iconColor="#F24E1E"
                    size={20}
                    style={styles.iconButton}
                    onPress={() => editPaciente(item)}
                  />
                  <IconButton
                    icon="trash-can"
                    iconColor="#44BF30"
                    size={20}
                    style={styles.iconButton}
                    onPress={() => confirmDelete(item.id ?? "")}
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>

        <Portal>
          <Dialog
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            style={styles.dialogContainer}
          >
            <Dialog.Title>Detalhes</Dialog.Title>
            <Dialog.Content style={styles.dialogContent}>
              <View>
                <View>
                  <ScrollView>
                    <View style={styles.infoContainer}>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Nome:</Text>
                        <Text style={styles.inputInfo}>
                          {selectedItem?.name}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Email:</Text>
                        <Text style={styles.inputInfo}>
                          {selectedItem?.email}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">CPF:</Text>
                        <Text style={styles.inputInfo}>
                          {selectedItem?.cpf}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Data de Nascimento:</Text>
                        <Text style={styles.inputInfo}>
                          {formatDate(selectedItem?.dataNascimento)}
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon={"close"}
                textColor="#000000"
                onPress={() => setModalVisible(false)}
              >
                Fechar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}
            style={styles.containerStyle}
          >
            <Dialog.Title>
              {edit ? "Editar Paciente" : "Novo Paciente"}
            </Dialog.Title>
            <Divider />
            <Dialog.Content>
              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Nome:</Text>
                <TextInput
                  value={paciente.name}
                  onChangeText={onInputNomeChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Email:</Text>
                <TextInput
                  value={paciente.email}
                  onChangeText={onInputEmailChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">CPF:</Text>
                <TextInput
                  value={paciente.cpf}
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
                    value={new Date(paciente.dataNascimento)}
                    onChange={onChangeDate}
                  />
                )}
                <Pressable onPress={toggleDatepicker}>
                  <TextInput
                    value={paciente.formattedDataNascimento}
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
                  value={paciente.password}
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
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon={"close"}
                textColor="#FF0000"
                onPress={() => setDialogVisible(false)}
              >
                Cancelar
              </Button>
              <Button
                icon={"check"}
                buttonColor="#0C84F3"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => savePaciente()}
              >
                Salvar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            visible={deletePacienteDialog}
            onDismiss={hideDeletePacienteDialog}
            style={styles.dialogDelete}
          >
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content style={styles.deleteAlign}>
              <Warning size={32} color="#FF0000" />
              <Text style={styles.confirmationText}>
                Tem certeza de que deseja excluir?
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon={"close"}
                textColor="#000000"
                onPress={() => hideDeletePacienteDialog()}
              >
                Cancelar
              </Button>
              <Button
                icon={"check"}
                buttonColor="#FF0000"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => deletePaciente()}
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

export default Pacientes;

const styles = StyleSheet.create({
  confirmationText: {
    fontSize: 16,
    marginLeft: 10,
  },
  column: {
    width: 5,
    margin: 0,
    padding: 0,
  },
  buttonColumn: {
    display: "flex",
  },
  containerStyle: {
    backgroundColor: "white",
    color: '#000'
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  iconButton: {
    margin: 0,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    color: '#000'
  },
  columnInfo: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 10,
  },
  inputInfo: {
    paddingVertical: 8,
    paddingLeft: 5,
    borderWidth: 0.4,
    marginTop: 5,
    borderRadius: 5,
  },
  dialogDelete: {
    backgroundColor: "#fff",
    padding: 20,
    color: '#000'
  },
  deleteAlign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  untilText: {
    fontSize: 18,
    alignSelf: "center",
    marginHorizontal: 0,
  },

  dateInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  addButton: {
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
  },
  buttonCell: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  editCell: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
  },

  closeButton: {
    marginTop: 10,
    color: "#0C84F3",
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  btn: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  modalContent: {
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 30,
    backgroundColor: "white",
    justifyContent: "center",
  },
  centeredItems: {
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  scrollViewContainer: {
    flexGrow: 1,
  },
  infoContainer: {
    marginBottom: 20,
  },

  infoText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 120,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
  },
  cellText: {
    textAlign: "center",
  },
  transparentTitle: {
    opacity: 0,
  },
  dateContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ccc",
  },
  dateText: {
    fontSize: 11,
  },

  multiSelectContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  multiSelectPlaceholder: {
    fontSize: 16,
  },
  multiSelectSelectedText: {
    fontSize: 14,
  },
  multiSelectIcon: {
    width: 20,
    height: 20,
  },
  multiSelectInputSearch: {
    height: 40,
    fontSize: 16,
  },
  multiSelectSelectedStyle: {
    borderRadius: 12,
  },
  multiSelectSelectAll: {
    alignItems: "flex-end",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  multiSelectSelectAllText: {
    color: "blue",
  },

  dialogContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    color: "#000"
  },
  dialogContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dialogActions: {
    justifyContent: "space-around",
  },
  dialogButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

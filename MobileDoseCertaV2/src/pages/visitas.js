import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView
} from "react-native";
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
import { Warning } from "phosphor-react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

const Visitas = () => {
  const emptyVisita = {
    id: "",
    date: new Date(),
    status: "",
    observacoes: "",
    idUsuarioPaciente: null,
  };

  const [data, setData] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [visita, setVisita] = useState(emptyVisita);
  const [selectedVisitaId, setSelectedVisitaId] = useState(null);

  const [deleteVisitaDialog, setDeleteVisitaDialog] = useState(false);
  const [visitaDialog, setVisitaDialog] = useState(false);
  const [editVisitaDialog, setEditVisitaDialog] = useState(false);
  const [edit, setEdit] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisitaDialog(false);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  const options = [
    { label: "A Fazer", value: "A Fazer" },
    { label: "Em Andamento", value: "Em Andamento" },
    { label: "Concluído", value: "Concluído" },
  ];

  useEffect(() => {
    fetchData();
    fetchPacientes();
    setPage(0);
  }, [itemsPerPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dosecerta.azurewebsites.net/api/Visita");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const fetchPacientes = () => {
    axios
      .get("https://dosecerta.azurewebsites.net/api/Users")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar pacientes:", error);
      });
  };

  const openNew = (visitaId = null) => {
    setSelectedVisitaId(visitaId);
    setVisitaDialog(true);
    if (visitaId) {
      const selectedVisita = data.find((visita) => visita.id === visitaId);
      if (selectedVisita) {
        const formattedVisita = {
          ...selectedVisita,
          date: new Date(selectedVisita.date),
          formattedDate: formatDate(new Date(selectedVisita.date)),
        };
        setVisita(selectedVisita);
      }
    } else {
      setVisita({ ...emptyVisita, formattedDate: formatDate(new Date()) });
    }
  };

  const openModal = (item) => {
    if (item.hasOwnProperty("observacoes")) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      console.error("O item não é uma Visita válido.");
    }
  };

  const hideDeleteVisitaDialog = () => {
    setDeleteVisitaDialog(false);
  };

  const confirmDelete = (visitaId) => {
    setSelectedVisitaId(visitaId);
    setDeleteVisitaDialog(true);
  };

  const editVisita = (visita) => {
    setVisita(visita);
    setEditVisitaDialog(true);
    setEdit(true);
    openNew(visita.id);
  };

  const deleteVisita = () => {
    axios
      .delete(`https://dosecerta.azurewebsites.net/api/Visita/${selectedVisitaId}`)
      .then((response) => {
        hideDeleteVisitaDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover visita:", error);
      });
  };

  const onPacienteChange = (value) => {
    setVisita((prevVisita) => ({ ...prevVisita, idUsuarioPaciente: value }));
  };

  const onStatusChange = (value) => {
    setVisita((prevVisita) => ({ ...prevVisita, status: value }));
  };

  const onInputChange = (value) => {
    setVisita((prevState) => ({
      ...prevState,
      observacoes: value,
    }));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  const onCalendarChange = (event, selectedDate) => {
    const currentDate = selectedDate || visita.date;
    const adjustedDate = new Date(
      currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
    );
    setShowPicker(false);
    setVisita({
      ...visita,
      date: adjustedDate,
      formattedDate: formatDate(adjustedDate),
    });
  };

  const getPacienteName = (userId) => {
    if (userId === undefined) return "N/A";
    const paciente = pacientes.find((paciente) => paciente.id === userId);
    return paciente ? paciente.name : "N/A";
  };

  const saveVisita = () => {
    const newVisita = {
      id: visita.id || "",
      date: visita.date,
      status: visita.status,
      observacoes: visita.observacoes,
      idUsuarioPaciente: visita.idUsuarioPaciente || 0,
    };

    const request = visita.id
      ? axios.put(`https://dosecerta.azurewebsites.net/api/Visita/${visita.id}`, newVisita)
      : axios.post("https://dosecerta.azurewebsites.net/api/Visita", newVisita);

    request
      .then((response) => {
        hideDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao salvar visita:", error);
      });
  };

  const showCalendar = () => {
    setShowPicker(true); // Exibe o DateTimePicker ao clicar no TextInput
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const handleTextInputClick = () => {
    setVisita((prevState) => ({
      ...prevState,
      showPicker: true,
    }));
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
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Paciente</DataTable.Title>
            <DataTable.Title>Data</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
            <DataTable.Title>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id} onPress={() => openModal(item)}>
              <DataTable.Cell>
                {getPacienteName(item.idUsuarioPaciente)}
              </DataTable.Cell>
              <DataTable.Cell>{formatDate(new Date(item.date))}</DataTable.Cell>
              <DataTable.Cell>{item.status}</DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                  icon="pencil"
                  iconColor="#F24E1E"
                  size={20}
                  onPress={() => editVisita(item)}
                />
                <IconButton
                  icon="trash-can"
                  iconColor="#44BF30"
                  size={20}
                  onPress={() => confirmDelete(item.id ?? "")}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
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
                        <Text variant="titleMedium">Paciente:</Text>
                        <Text style={styles.inputInfo}>
                          {getPacienteName(selectedItem?.idUsuarioPaciente)}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Data:</Text>
                        <Text style={styles.inputInfo}>
                        {formatDate(new Date(selectedItem?.date))}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Status:</Text>
                        <Text style={styles.inputInfo}>
                          {selectedItem?.status}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Status:</Text>
                        <Text style={styles.inputInfo}>
                          {selectedItem?.observacoes}
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
            visible={visitaDialog}
            onDismiss={hideDialog}
            style={styles.containerStyle}
          >
            <Dialog.Title>
              {edit ? "Editar Visita" : "Nova Visita"}
            </Dialog.Title>
            <Divider />
            <Dialog.Content>
              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Paciente:</Text>
                <RNPickerSelect
                  placeholder={{ label: "Selecione um paciente", value: null }}
                  value={visita.idUsuarioPaciente}
                  onValueChange={onPacienteChange}
                  items={pacientes.map((paciente) => ({
                    label: paciente.name,
                    value: paciente.id,
                  }))}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Data:</Text>
                {showPicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={new Date(visita.date)}
                    onChange={onCalendarChange}
                  />
                )}
                <Pressable onPress={toggleDatepicker}>
                  <TextInput
                    value={visita.formattedDate}
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
                <Text variant="bodyMedium">Status:</Text>
                <RNPickerSelect
                  placeholder={{ label: "Selecione um status", value: null }}
                  value={visita.status}
                  onValueChange={onStatusChange}
                  items={options}
                />
              </View>
              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Observações:</Text>
                <TextInput
                  value={visita.observacoes}
                  onChangeText={onInputChange}
                  multiline
                  numberOfLines={8}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon={"close"}
                textColor="#FF0000"
                onPress={() => hideDialog()}
              >
                Cancel
              </Button>
              <Button
                icon={"check"}
                buttonColor="#0C84F3"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => saveVisita()}
              >
                Salvar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            visible={deleteVisitaDialog}
            onDismiss={hideDeleteVisitaDialog}
            style={styles.dialogDelete}
          >
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content style={styles.deleteAlign}>
              <Warning size={32} color="#FF0000" />
              <Text variant="bodyMedium">
                Tem certeza de que deseja excluir?
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon={"close"}
                textColor="#000000"
                onPress={() => hideDeleteVisitaDialog()}
              >
                Cancelar
              </Button>
              <Button
                icon={"check"}
                buttonColor="#FF0000"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => deleteVisita()}
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

export default Visitas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  infoContainer: {
    marginBottom: 20,
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
  btn: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  dialogContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  dialogContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnnew: {
    width: 100,
    paddingVertical: 5,
    backgroundColor: "#0C84F3",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  deleteAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  dialogDelete: {
    backgroundColor: "#fff",
  },
  containerStyle: {
    backgroundColor: "white",
  },
  groupUsersModal: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    marginBottom: 8,
  },
  btnActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxHeight: "80%",
  },
});

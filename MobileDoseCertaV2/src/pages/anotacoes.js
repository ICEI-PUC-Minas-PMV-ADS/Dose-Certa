import { useState, useEffect } from "react";
import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
import axios from "axios";

const Anotacoes = () => {
  let emptyNote = {
    id: "",
    content: "",
    idUserPaciente: null
  };

  let emptyPaciente = {
    id: 0,
    name: "",
  };

  const [data, setData] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [note, setNote] = useState(emptyNote);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const [deleteNoteDialog, setDeleteNoteDialog] = useState(false);
  const [noteDialog, setNoteDialog] = useState(false);
  const [editNoteDialog, setEditNoteDialog] = useState(false);
  const [edit, setEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const hideDialog = () => setNoteDialog(false);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  useEffect(() => {
    fetchData();
    fetchPacientes();
    setPage(0);
  }, [itemsPerPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dosecerta.azurewebsites.net/api/Notes");
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

  const openNew = (noteId = null) => {
    setSelectedNoteId(noteId);
    setNoteDialog(true);
    if (noteId) {
      const selectedNote = data.find((note) => note.id === noteId);
      if (selectedNote) {
        setNote(selectedNote);
      }
    } else {
      setNote({ ...emptyNote, content: "", idUserPaciente: null });
    }
  };

  const hideDeleteNoteDialog = () => {
    setDeleteNoteDialog(false);
  };

  const confirmDelete = (noteId) => {
    setSelectedNoteId(noteId);
    setDeleteNoteDialog(true);
  };

  const editNote = (note) => {
    setNote(note);
    setEditNoteDialog(true);
    setEdit(true);
    openNew(note.id);
  };

  const deleteNote = () => {
    axios
      .delete(`https://dosecerta.azurewebsites.net/api/Notes/${selectedNoteId}`)
      .then((response) => {
        hideDeleteNoteDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover nota:", error);
      });
  };

  const onPacienteChange = (value) => {
    setNote((prevNote) => ({ ...prevNote, idUserPaciente: value }));
  };

  const onInputChange = (value) => {
    setNote((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

  const getPacienteName = (userId) => {
    if (userId === undefined) return "N/A";
    const paciente = pacientes.find((paciente) => paciente.id === userId);
    return paciente ? paciente.name : "N/A";
  };

  const saveNote = () => {
    const newNote = {
      id: note.id || "",
      content: note.content,
      creationDate: formatDate(new Date()),
      idUserPaciente: note.idUserPaciente || null,
    };

    const request = note.id
      ? axios.put(`https://dosecerta.azurewebsites.net/api/Notes/${note.id}`, newNote)
      : axios.post("https://dosecerta.azurewebsites.net/api/Notes", newNote);

    request
      .then((response) => {
        hideDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao salvar anotação:", error);
      });
  };

  const openModal = (item) => {
    if (item.hasOwnProperty("content")) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      console.error("O item não é uma anotação válido.");
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.btn}>
          <Button
            testID="newNoteButton"
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
            <DataTable.Title>Paciente</DataTable.Title>
            <DataTable.Title>Conteúdo</DataTable.Title>
            <DataTable.Title>Data de Criação</DataTable.Title>
            <DataTable.Title>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id} onPress={() => openModal(item)}>
              <DataTable.Cell>
                {getPacienteName(item.idUserPaciente)}
              </DataTable.Cell>
              <DataTable.Cell>{item.content}</DataTable.Cell>
              <DataTable.Cell>{item.formattedCreationDate}</DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                  icon="pencil"
                  iconColor="#F24E1E"
                  size={20}
                  onPress={() => editNote(item)}
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
                          {getPacienteName(selectedItem?.idUserPaciente)}
                        </Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Anotação:</Text>
                        <Text style={styles.inputInfo}>
                          {selectedItem?.content}
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
            testID="newNoteDialog"
            visible={noteDialog}
            onDismiss={hideDialog}
            style={styles.containerStyle}
          >
            <Dialog.Title>
              {edit ? "Editar Anotação" : "Nova Anotação"}
            </Dialog.Title>
            <Divider />
            <Dialog.Content>
              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Paciente:</Text>
                <RNPickerSelect
                  placeholder={{ label: "Selecione um paciente", value: null }}
                  value={note.idUserPaciente}
                  onValueChange={onPacienteChange}
                  items={pacientes.map((paciente) => ({
                    label: paciente.name,
                    value: paciente.id,
                  }))}
                />
              </View>
              <View>
                <Text variant="bodyMedium">Anotação:</Text>
                <TextInput
                  value={note.content}
                  onChangeText={onInputChange}
                  placeholder="Digite o conteúdo da nota"
                  multiline
                  numberOfLines={10}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon="close"
                textColor="#FF0000"
                onPress={() => hideDialog()}
              >
                Cancel
              </Button>
              <Button
                icon="check"
                buttonColor="#0C84F3"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => saveNote()}
              >
                Salvar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            visible={deleteNoteDialog}
            onDismiss={hideDeleteNoteDialog}
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
                icon="close"
                textColor="#000000"
                onPress={() => hideDeleteNoteDialog()}
              >
                Cancelar
              </Button>
              <Button
                icon="check"
                buttonColor="#FF0000"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => deleteNote()}
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

export default Anotacoes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    color: '#000'
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
  deleteAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
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
  dialogDelete: {
    backgroundColor: "#fff",
    color: "#000"
  },
  containerStyle: {
    backgroundColor: "white",
    color: "#000"
  },
  groupUsersModal: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
});

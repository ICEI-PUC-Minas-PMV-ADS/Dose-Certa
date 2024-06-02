import { useState, useEffect } from "react";
import * as React from "react";
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
import { Warning } from "phosphor-react-native";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

interface Item {
  id?: string;
  content: string;
  idUserPaciente?: number | null;
  formattedCreationDate?: string;
}

interface User {
  id?: number;
  name: string;
}

const Anotacoes = () => {
  let emptyNote: Item = {
    id: "",
    content: "",
    idUserPaciente: null,
  };

  let emptyPaciente: User = {
    id: 0,
    name: "",
  };

  const [data, setData] = useState<Item[]>([]);
  const [pacientes, setPacientes] = useState<User[]>([]);

  const [note, setNote] = useState<Item>(emptyNote);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  const [deleteNoteDialog, setDeleteNoteDialog] = useState(false);
  const [noteDialog, setNoteDialog] = useState(false);
  const [editNoteDialog, setEditNoteDialog] = useState(false);
  const [edit, setEdit] = useState(false);

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

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
      const response = await axios.get("http://localhost:5092/api/Notes");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const fetchPacientes = () => {
    axios
      .get("http://localhost:5092/api/users?UserType=Paciente")
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar pacientes:", error);
      });
  };

  const openNew = (noteId: string | null = null) => {
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

  const confirmDelete = (noteId: string) => {
    setSelectedNoteId(noteId);
    setDeleteNoteDialog(true);
  };

  const editNote = (note: Item) => {
    setNote(note);
    setEditNoteDialog(true);
    setEdit(true);
    openNew(note.id);
  };

  const deleteNote = () => {
    axios
      .delete(`http://localhost:5092/api/Notes/${selectedNoteId}`)
      .then((response) => {
        hideDeleteNoteDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover nota:", error);
      });
  };

  const onPacienteChange = (value: number | null) => {
    setNote((prevNote) => ({ ...prevNote, idUserPaciente: value }));
  };

  const onInputChange = (value: string) => {
    setNote((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

  const getPacienteName = (userId: number | null | undefined) => {
    if (userId === undefined) return "N/A"; // Retorna "N/A" se o userId for undefined
    const paciente = pacientes.find((paciente) => paciente.id === userId);
    return paciente ? paciente.name : "N/A"; // Retorna "N/A" se o usuário não for encontrado
  };

  const saveNote = () => {
    const newNote = {
      id: note.id || "",
      content: note.content,
      idUserPaciente: note.idUserPaciente || null
    };
    
    const request = note.id
      ? axios.put(`http://localhost:5092/api/Notes/${note.id}`, newNote)
      : axios.post("http://localhost:5092/api/Notes", newNote);

    request
      .then((response) => {
        hideDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao salvar anotação:", error);
      });
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
            <DataTable.Title>Conteúdo</DataTable.Title>
            <DataTable.Title>Data de Criação</DataTable.Title>
            <DataTable.Title>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id}>
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
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>

        <Portal>
          <Dialog
            visible={noteDialog}
            onDismiss={hideDialog}
            style={styles.containerStyle}
          >
            <Dialog.Title>{ edit ? 'Editar Anotação' : 'Nova Anotação'}</Dialog.Title>
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
                  style={{ backgroundColor: '#EDF5FF', borderColor:'#4B92E1' }}
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
                icon={"close"}
                textColor="#000000"
                onPress={() => hideDeleteNoteDialog()}
              >
                Cancelar
              </Button>
              <Button
                icon={"check"}
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
  },
  btn: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 15,
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
    marginBottom: 15,
  },
  btnActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
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
import axios from "axios";

const Residencias = () => {
  const emptyResidencia = {
    id: "",
    rua: "",
    numero: "",
    complemento: "",
    cidade: "",
    bairro: "",
    idUsuarioAgente: null
  };

  const [data, setData] = useState([]);
  const [residencia, setResidencia] = useState(emptyResidencia);

  const [selectedResidenciaId, setSelectedResidenciaId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [editResidenciaDialog, setEditResidenciaDialog] = useState(false);
  const [edit, setEdit] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [deleteResidenciaDialog, setDeleteResidenciaDialog] = useState(false);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dosecerta.azurewebsites.net/api/Residencia");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar residências:", error);
    }
  };

  const openNew = (residenciaId = null) => {
    setSelectedResidenciaId(residenciaId);
    setDialogVisible(true);
    if (residenciaId) {
      const selectedResidencia = data.find(
        (residencia) => residencia.id === residenciaId
      );
      if (selectedResidencia) {
        const formattedResidencia = {
          ...selectedResidencia,
        };
        setResidencia(formattedResidencia);
      }
    } else {
      setResidencia({
        ...emptyResidencia,
      });
    }
  };

  const openModal = (item) => {
    if (item.hasOwnProperty("rua")) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      console.error("O item não é um Residência válido.");
    }
  };

  const onInputRuaChange = (value) => {
    setResidencia((prevResidencia) => ({ ...prevResidencia, rua: value }));
  };

  const onInputNumeroChange = (value) => {
    setResidencia((prevResidencia) => ({ ...prevResidencia, numero: value }));
  };

  const onInputComplementoChange = (value) => {
    setResidencia((prevResidencia) => ({
      ...prevResidencia,
      complemento: value,
    }));
  };

  const onInputCidadeChange = (value) => {
    setResidencia((prevResidencia) => ({ ...prevResidencia, cidade: value }));
  };

  const onInputBairroChange = (value) => {
    setResidencia((prevResidencia) => ({ ...prevResidencia, bairro: value }));
  };

  const saveResidencia = () => {
    const newResidencia = {
      id: residencia.id || "",
      rua: residencia.rua,
      numero: residencia.numero,
      complemento: residencia.complemento,
      cidade: residencia.cidade,
      bairro: residencia.bairro,
      idUsuarioAgente: residencia.idUsuarioAgente
    };

    const request = residencia.id
      ? axios.put(
          `https://dosecerta.azurewebsites.net/api/Residencia/${residencia.id}`,
          newResidencia
        )
      : axios.post("https://dosecerta.azurewebsites.net/api/Residencia", newResidencia);

    request
      .then((response) => {
        setDialogVisible(false);
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao salvar residência:", error);
      });
  };

  const editResidencia = (residencia) => {
    setResidencia(residencia);
    setEditResidenciaDialog(true);
    setEdit(true);
    openNew(residencia.id);
  };

  const hideDeleteResidenciaDialog = () => {
    setDeleteResidenciaDialog(false);
  };

  const deleteResidencia = () => {
    axios
      .delete(`https://dosecerta.azurewebsites.net/api/Residencia/${selectedResidenciaId}`)
      .then((response) => {
        hideDeleteResidenciaDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover residência:", error);
      });
  };

  const confirmDelete = (residenciaId) => {
    setSelectedResidenciaId(residenciaId);
    setDeleteResidenciaDialog(true);
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
            <DataTable.Title style={styles.column}>Rua</DataTable.Title>
            <DataTable.Title style={styles.column}>Número</DataTable.Title>
            <DataTable.Title style={styles.column}>Bairro</DataTable.Title>
            <DataTable.Title style={styles.buttonColumn}>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row key={item.id} onPress={() => openModal(item)}>
              <DataTable.Cell style={styles.column}>
                {item.rua}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                {item.numero}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                {item.bairro}
              </DataTable.Cell>
              <DataTable.Cell style={styles.buttonColumn}>
                <View style={styles.iconContainer}>
                  <IconButton
                    icon="pencil"
                    iconColor="#F24E1E"
                    size={20}
                    onPress={() => editResidencia(item)}
                    style={styles.iconButton}
                  />
                  <IconButton
                    icon="trash-can"
                    iconColor="#44BF30"
                    size={20}
                    onPress={() => confirmDelete(item.id ?? "")}
                    style={styles.iconButton}
                  />
                </View>
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
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}
            style={styles.containerStyle}
          >
            <Dialog.Title>
              {edit ? "Editar Residência" : "Nova Residência"}
            </Dialog.Title>
            <Divider />
            <Dialog.Content>
              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Rua:</Text>
                <TextInput
                  value={residencia.rua}
                  onChangeText={onInputRuaChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Número:</Text>
                <TextInput
                  value={residencia.numero}
                  onChangeText={onInputNumeroChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Complemento:</Text>
                <TextInput
                  value={residencia.complemento}
                  onChangeText={onInputComplementoChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Cidade:</Text>
                <TextInput
                  value={residencia.cidade}
                  onChangeText={onInputCidadeChange}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Bairro:</Text>
                <TextInput
                  value={residencia.bairro}
                  onChangeText={onInputBairroChange}
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
                onPress={() => saveResidencia()}
              >
                Salvar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            visible={deleteResidenciaDialog}
            onDismiss={hideDeleteResidenciaDialog}
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
                onPress={() => hideDeleteResidenciaDialog()}
              >
                Cancelar
              </Button>
              <Button
                icon={"check"}
                buttonColor="#FF0000"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => deleteResidencia()}
              >
                Sim
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

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
                        <Text variant="titleMedium">Rua:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.rua}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Número:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.numero}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Complemento:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.complemento}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Cidade:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.cidade}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Bairro:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.bairro}</Text>
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
      </View>
    </PaperProvider>
  );
};

export default Residencias;

const styles = StyleSheet.create({
  confirmationText: {
    fontSize: 16,
    marginLeft: 10,
  },
  column: {
    width: 5,
    margin: 0,
    padding: 0
  },
  buttonColumn: {
    display: "flex",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
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
    borderRadius: 5
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
  dialogDelete: {
    backgroundColor: "#fff",
    padding: 20,
    color: '#000'
  },
  containerStyle: {
    backgroundColor: "white",
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
    borderBottomWidth: 0.5
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
    color: '#000'
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
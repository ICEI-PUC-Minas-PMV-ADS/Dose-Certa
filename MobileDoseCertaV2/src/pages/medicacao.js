import React, { useEffect, useState } from "react";
import {
  View,
  Alert,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  DataTable,
  Button,
  Text,
  Dialog,
  Portal,
  IconButton,
  TextInput,
  Switch,
  Provider as PaperProvider,
} from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MultiSelect } from "react-native-element-dropdown";
import { Warning } from "phosphor-react-native";

import axios from "axios";

const Medicacao = () => {
  const initialMedicacao = {
    id: "",
    idUsuarioPaciente: null,
    observacao: "",
    dataInicio: new Date(),
    dataTermino: new Date(),
    status: false,
    remedios: [],
  };

  const [data, setData] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMedicacaoId, setSelectedMedicacaoId] = useState(null);

  const [medicacao, setMedicacao] = useState(initialMedicacao);

  const [modalVisible, setModalVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [editMedicacaoDialog, setEditMedicacaoDialog] = useState(false);
  const [edit, setEdit] = useState(null);
  const [remedios, setRemedios] = useState([]);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [deleteMedicacaoDialog, setDeleteMedicacaoDialog] = useState(false);
  const [medicacaoToDelete, setMedicacaoToDelete] = useState(null);

  const [showInicioPicker, setShowInicioPicker] = useState(false);
  const [showTerminoPicker, setShowTerminoPicker] = useState(false);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  useEffect(() => {
    fetchData();
    fetchPacientes();
    fetchRemedios();
    setPage(0);
  }, [itemsPerPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dosecerta.azurewebsites.net/api/Medicacao"
      );
      const medicacoes = response.data.map((med) => ({
        ...med,
        status: med.status === 'true' ? true : false,
      }));
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

  const fetchRemedios = async () => {
    try {
      const response = await axios.get(
        "https://dosecerta.azurewebsites.net/api/Remedios"
      );
      setRemedios(response.data);
    } catch (error) {
      console.error("Erro ao buscar remédios:", error);
    }
  };

  const openModal = (item) => {
    if (item.hasOwnProperty('observacao')) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      console.error("O item não é um Medicação válido.");
    }
  };

  const saveMedicacao = () => {
    const newMedicacao = {
      id: medicacao.id || "",
      idUsuarioPaciente: medicacao.idUsuarioPaciente || 0,
      observacao: medicacao.observacao,
      status: medicacao.status ? 'true' : 'false',
      dataInicio: medicacao.dataInicio,
      dataTermino: medicacao.dataTermino,
      remedios: medicacao.remedios || [],
    };

    const request = medicacao.id
      ? axios.put(
          `https://dosecerta.azurewebsites.net/api/Medicacao/${medicacao.id}`,
          newMedicacao
        )
      : axios.post("https://dosecerta.azurewebsites.net/api/Medicacao", newMedicacao);

    request
      .then((response) => {
        setDialogVisible(false);
        fetchData();
      })
      .catch((error) => {
        console.error(
          "Erro ao salvar medicação:",
          error.response ? error.response.data : error
        );
        console.log(error)
      });
  };

  const openNew = (medicacaoId = null) => {
    setSelectedMedicacaoId(medicacaoId);
    setDialogVisible(true);
    if (medicacaoId) {
      const selectedMedicacao = data.find(
        (medicacao) => medicacao.id === medicacaoId
      );
      if (selectedMedicacao) {
        const formattedMedicacao = {
          ...selectedMedicacao,
          dataInicio: new Date(selectedMedicacao.dataInicio),
          dataTermino: new Date(selectedMedicacao.dataTermino),
          formattedDataInicio: formatDate(
            new Date(selectedMedicacao.dataInicio)
          ),
          formattedDataTermino: formatDate(
            new Date(selectedMedicacao.dataTermino)
          ),
        };
        setMedicacao(formattedMedicacao);
      }
    } else {
      setMedicacao({
        ...initialMedicacao,
        formattedDataInicio: formatDate(new Date()),
        formattedDataTermino: formatDate(new Date()),
      });
    }
  };

  const deleteMedicacao = () => {
    axios
      .delete(`https://dosecerta.azurewebsites.net/api/Medicacao/${selectedMedicacaoId}`)
      .then((response) => {
        setDeleteMedicacaoDialog(false);
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover remédio:", error);
      });
  };

  const confirmDelete = (medicacaoId) => {
    setSelectedMedicacaoId(medicacaoId);
    setDeleteMedicacaoDialog(true);
  };

  const editMedicacao = (medicacao) => {
    setMedicacao(medicacao);
    setEditMedicacaoDialog(true);
    setEdit(true);
    openNew(medicacao.id);
  };

  const onPacienteChange = (value) => {
    setMedicacao((prevMedicacao) => ({
      ...prevMedicacao,
      idUsuarioPaciente: value,
    }));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  const onChangeInicio = (event, selectedDate) => {
    const currentDate = selectedDate || medicacao.dataInicio;
    const adjustedDate = new Date(
      currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
    );
    setShowInicioPicker(false);
    setMedicacao({
      ...medicacao,
      dataInicio: adjustedDate,
      formattedDataInicio: formatDate(adjustedDate),
    });
  };

  const onChangeTermino = (event, selectedDate) => {
    const currentDate = selectedDate || medicacao.dataTermino;
    const adjustedDate = new Date(
      currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
    );
    setShowTerminoPicker(false);
    setMedicacao({
      ...medicacao,
      dataTermino: adjustedDate,
      formattedDataTermino: formatDate(adjustedDate),
    });
  };

  const onInputChange = (value) => {
    setMedicacao((prevState) => ({
      ...prevState,
      observacao: value,
    }));
  };

  const toggleDatepickerInicio = () => {
    setShowInicioPicker(!showInicioPicker);
  };

  const toggleDatepickerTermico = () => {
    setShowTerminoPicker(!showTerminoPicker);
  };

  const handleTextInputClickInicio = () => {
    setMedicacao((prevState) => ({
      ...prevState,
      showInicioPicker: true,
    }));
  };

  const handleTextInputClickTermino = () => {
    setMedicacao((prevState) => ({
      ...prevState,
      showTerminoPicker: true,
    }));
  };

  const openDeleteDialog = (id) => {
    setMedicacaoToDelete(id);
    setDeleteMedicacaoDialog(true);
  };

  const hideDeleteMedicacaoDialog = () => {
    setDeleteMedicacaoDialog(false);
  };

  const confirmDeleteMedicacao = async () => {
    if (medicacaoToDelete) {
      await deleteMedicacao(medicacaoToDelete);
      hideDeleteMedicacaoDialog();
    }
  };

  const getPacienteName = (userId) => {
    if (userId === undefined) return "N/A";
    const paciente = pacientes.find((paciente) => paciente.id === userId);
    return paciente ? paciente.name : "N/A";
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
            <DataTable.Title style={styles.column}>Paciente</DataTable.Title>
            <DataTable.Title style={styles.column}>Observação</DataTable.Title>
            <DataTable.Title style={styles.column}>Início</DataTable.Title>
            <DataTable.Title style={styles.column}>Término</DataTable.Title>
            <DataTable.Title style={styles.cell}>Remédios</DataTable.Title>
            <DataTable.Title style={styles.buttonColumn}>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item) => (
            <DataTable.Row
              key={item.id}
              onPress={() => openModal(item)}
              style={{ backgroundColor: item.status === 'true' ? "#C8E6C9" : "#FFCDD2" }}
            >
              <DataTable.Cell style={styles.column}>
                {getPacienteName(item.idUsuarioPaciente)}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                {item.observacao}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                {formatDate(new Date(item.dataInicio))}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                {formatDate(new Date(item.dataTermino))}
              </DataTable.Cell>
              <DataTable.Cell style={styles.column}>
                <Text style={styles.cellText}>{item.remedios.join(", ")}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.buttonColumn}>
                <View style={styles.iconContainer}>
                  <IconButton
                    icon="pencil"
                    iconColor="#F24E1E"
                    size={20}
                    style={styles.iconButton}
                    onPress={() => editMedicacao(item)}
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
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Itens por Página"}
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
                        <Text variant="titleMedium">Observações:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.observacao}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Data de Início:</Text>
                        <Text style={styles.inputInfo}>{formatDate(new Date(selectedItem?.dataInicio))}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Data de Término:</Text>
                        <Text style={styles.inputInfo}>{formatDate(new Date(selectedItem?.dataTermino))}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Remédios:</Text>
                        <Text style={styles.inputInfo}>{selectedItem?.remedios?.join(", ")}</Text>
                      </View>
                      <View style={styles.columnInfo}>
                        <Text variant="titleMedium">Status:</Text>
                        <Text style={styles.inputInfo}>{selectedItem && (selectedItem.status ? "Ativo" : "Inativo")}</Text>
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
            visible={deleteMedicacaoDialog}
            onDismiss={hideDeleteMedicacaoDialog}
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
                onPress={() => hideDeleteMedicacaoDialog()}
              >
                Cancelar
              </Button>
              <Button
                icon={"check"}
                buttonColor="#FF0000"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => deleteMedicacao()}
              >
                Sim
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => setDialogVisible(false)}
            style={styles.dialogContainer}
          >
            <Dialog.Title>
              {edit ? "Editar Medicação" : "Nova Medicação"}
            </Dialog.Title>
            <Dialog.Content style={styles.dialogContent}>
              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Paciente:</Text>
                <RNPickerSelect
                  placeholder={{ label: "Selecione um paciente", value: null }}
                  value={medicacao.idUsuarioPaciente}
                  onValueChange={onPacienteChange}
                  items={pacientes.map((paciente) => ({
                    label: paciente.name,
                    value: paciente.id,
                  }))}
                />
              </View>

              <View>
                <Text variant="bodyMedium">Observação:</Text>
                <TextInput
                  value={medicacao.observacao}
                  onChangeText={onInputChange}
                  placeholder="Observações..."
                  multiline
                  numberOfLines={4}
                  style={{ backgroundColor: "#EDF5FF", borderColor: "#4B92E1" }}
                />
              </View>

              <View style={styles.groupUsersModal}>
                <MultiSelect
                  style={styles.input}
                  data={remedios.map((remedio) => ({
                    label: remedio.nome,
                    value: remedio.nome,
                  }))}
                  value={medicacao.remedios || []}
                  onChange={(selectedItems) =>
                    setMedicacao({ ...medicacao, remedios: selectedItems })
                  }
                  placeholder="Selecione os Remédios"
                  labelField="label"
                  valueField="value"
                />
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Data Início:</Text>
                {showInicioPicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={new Date(medicacao.dataInicio)}
                    onChange={onChangeInicio}
                  />
                )}
                <Pressable onPress={toggleDatepickerInicio}>
                  <TextInput
                    value={medicacao.formattedDataInicio}
                    onFocus={handleTextInputClickInicio}
                    style={{
                      backgroundColor: "#EDF5FF",
                      borderColor: "#4B92E1",
                    }}
                    editable={false}
                  />
                </Pressable>
              </View>

              <View style={styles.groupUsersModal}>
                <Text variant="bodyMedium">Data Término:</Text>
                {showTerminoPicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={new Date(medicacao.dataTermino)}
                    onChange={onChangeTermino}
                  />
                )}
                <Pressable onPress={toggleDatepickerTermico}>
                  <TextInput
                    value={medicacao.formattedDataTermino}
                    onFocus={handleTextInputClickTermino}
                    style={{
                      backgroundColor: "#EDF5FF",
                      borderColor: "#4B92E1",
                    }}
                    editable={false}
                  />
                </Pressable>
              </View>

              <View style={styles.groupStatus}>
                <Text variant="titleMedium">Status da Medicação:</Text>
                <Switch
                  value={medicacao.status}
                  onValueChange={(value) =>
                    setMedicacao((prevState) => ({
                      ...prevState,
                      status: value,
                    }))
                  }
                />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon="close"
                mode="text"
                textColor="#FF0000"
                onPress={() => setDialogVisible(false)}
              >
                Cancelar
              </Button>
              <Button
                icon="check"
                mode="contained"
                buttonColor="#0C84F3"
                textColor="#fff"
                style={{ paddingHorizontal: 10 }}
                onPress={() => saveMedicacao()}
              >
                Salvar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default Medicacao;

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
  dialogDelete: {
    backgroundColor: "#fff",
    padding: 20,
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

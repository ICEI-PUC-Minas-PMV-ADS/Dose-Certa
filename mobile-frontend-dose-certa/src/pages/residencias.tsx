import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Warning } from "phosphor-react-native";

const Residencia = () => {
  const emptyResidencia = {
    id: "",
    rua: "",
    numero: "",
    complemento: "",
    cidade: "",
    bairro: "",
    idUsuarioPaciente: null,
  };

  const [data, setData] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [residencia, setResidencia] = useState(emptyResidencia);
  const [selectedResidenciaId, setSelectedResidenciaId] = useState(null);
  const [residenciaDialog, setResidenciaDialog] = useState(false);
  const [deleteResidenciaDialog, setDeleteResidenciaDialog] = useState(false);
  const [page, setPage] = useState(0);
  const [itemsPerPage, onItemsPerPageChange] = useState(5);

  useEffect(() => {
    fetchData();
    setPage(0);
  }, [itemsPerPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5092/api/Residencia");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

 
  const hideDialog = () => setResidenciaDialog(false);

  const openNew = (residenciaId = null) => {
    setSelectedResidenciaId(residenciaId);
    setResidenciaDialog(true);
    if (residenciaId) {
      const selectedResidencia = data.find((res:any) => res.id === residenciaId);
      if (selectedResidencia) {
        setResidencia(selectedResidencia);
      }
    } else {
      setResidencia(emptyResidencia);
    }
  };

  const hideDeleteResidenciaDialog = () => {
    setDeleteResidenciaDialog(false);
  };

  const confirmDelete = (residenciaId:any) => {
    setSelectedResidenciaId(residenciaId);
    setDeleteResidenciaDialog(true);
  };

  const deleteResidencia = () => {
    axios
      .delete(`http://localhost:5092/api/Residencia/${selectedResidenciaId}`)
      .then(() => {
        hideDeleteResidenciaDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao remover residência:", error);
      });
  };

  const onInputChange = (name:any, value:any) => {
    setResidencia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveResidencia = () => {
    const newResidencia = {
      id: residencia.id || "",
      rua: residencia.rua,
      numero: residencia.numero,
      complemento: residencia.complemento,
      cidade: residencia.cidade,
      bairro: residencia.bairro,
      idUsuarioPaciente: residencia.idUsuarioPaciente || null
    };

    const request = residencia.id
      ? axios.put(`http://localhost:5092/api/Residencia/${residencia.id}`, newResidencia)
      : axios.post("http://localhost:5092/api/Residencia", newResidencia);

    request
      .then(() => {
        hideDialog();
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao salvar residência:", error);
      });
  };

  const getPacienteName = (idUsuarioPaciente:any) => {
    const paciente:any = pacientes.find((p:any) => p.id === idUsuarioPaciente);
    return paciente ? paciente.name : "Não encontrado";
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

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
            <DataTable.Title>Rua</DataTable.Title>
            <DataTable.Title>Número</DataTable.Title>
            <DataTable.Title>Bairro</DataTable.Title>
            <DataTable.Title>{""}</DataTable.Title>
          </DataTable.Header>

          {data.slice(from, to).map((item:any) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.rua}</DataTable.Cell>
              <DataTable.Cell>{item.numero}</DataTable.Cell>
              <DataTable.Cell>{item.bairro}</DataTable.Cell>
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

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            numberOfItemsPerPageList={[5, 10, 15]}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>

        <Portal>
          <Dialog
            visible={residenciaDialog}
            onDismiss={hideDialog}
            style={styles.containerStyle}
          >
            <Dialog.Title>{selectedResidenciaId ? 'Editar Residência' : 'Nova Residência'}</Dialog.Title>
            <Divider />
            <Dialog.Content>
           
              <View>
                <Text variant="bodyMedium">Rua:</Text>
                <TextInput
                  value={residencia.rua}
                  onChangeText={(value) => onInputChange('rua', value)}
                  placeholder="Digite a rua"
                  style={{ backgroundColor: '#EDF5FF', borderColor:'#4B92E1' }}
                />
              </View>
              <View>
                <Text variant="bodyMedium">Número:</Text>
                <TextInput
                  value={residencia.numero}
                  onChangeText={(value) => onInputChange('numero', value)}
                  placeholder="Digite o número"
                  style={{ backgroundColor: '#EDF5FF', borderColor:'#4B92E1' }}
                />
              </View>
              <View>
                <Text variant="bodyMedium">Complemento:</Text>
                <TextInput
                  value={residencia.complemento}
                  onChangeText={(value) => onInputChange('complemento', value)}
                  placeholder="Digite o complemento"
                  style={{ backgroundColor: '#EDF5FF', borderColor:'#4B92E1' }}
                />
              </View>
              <View>
                <Text variant="bodyMedium">Cidade:</Text>
                <TextInput
                  value={residencia.cidade}
                  onChangeText={(value) => onInputChange('cidade', value)}
                  placeholder="Digite a cidade"
                  style={{ backgroundColor: '#EDF5FF', borderColor:'#4B92E1' }}
                />
              </View>
              <View>
                <Text variant="bodyMedium">Bairro:</Text>
                <TextInput
                  value={residencia.bairro}
                  onChangeText={(value) => onInputChange('bairro', value)}
                  placeholder="Digite o bairro"
                  style={{ backgroundColor: '#EDF5FF', borderColor:'#4B92E1' }}
                />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                icon={"close"}
                textColor="#FF0000"
                onPress={hideDialog}
              >
                Cancel
              </Button>
              <Button
                icon={"content-save"}
                textColor="#00FF00"
                onPress={saveResidencia}
              >
                Save
              </Button>
            </Dialog.Actions>
          </Dialog>

          <Dialog
            visible={deleteResidenciaDialog}
            onDismiss={hideDeleteResidenciaDialog}
          >
            <Dialog.Title>Confirmar</Dialog.Title>
            <Dialog.Content>
              <View style={styles.iconWarning}>
                <Warning size={32} color="#FF0000" weight="fill" />
                <Text>Confirmar remoção?</Text>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={hideDeleteResidenciaDialog}
                textColor="#FF0000"
              >
                Cancel
              </Button>
              <Button
                onPress={deleteResidencia}
                textColor="#00FF00"
              >
                Confirm
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
  btn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
  },
  groupUsersModal: {
    marginBottom: 15,
  },
  iconWarning: {
    flexDirection: "row",
    alignItems: "center",
  }
});

export default Residencia;
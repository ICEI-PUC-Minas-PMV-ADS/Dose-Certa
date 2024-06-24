import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet, Modal, ScrollView, TouchableOpacity, } from 'react-native';
import { DataTable, Button, Dialog, Portal, IconButton, TextInput, Switch } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MultiSelect } from 'react-native-element-dropdown';
import { Warning } from "phosphor-react-native";

import axios from 'axios';
import { format } from 'date-fns';

interface Medicamento {
  id?: string;
  observacao: string;
  dataInicio: string;
  dataTermino: string;
  status: boolean;
  remedios: string[];
}

interface Remedio {
  id: string;
  nome: string;
}

const initialMedicamento: Medicamento = {
  id: '',
  observacao: '',
  dataInicio: new Date().toISOString(),
  dataTermino: new Date().toISOString(),
  status: false,
  remedios: []
};


const MedicamentoDemo: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Medicamento | null>(null);
  const [data, setData] = useState<(Medicamento | Remedio)[]>([]);
  const [medicamento, setMedicamento] = useState<Partial<Medicamento>>(initialMedicamento);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [remedios, setRemedios] = useState<Remedio[]>([]);
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [deleteMedicamentoDialog, setDeleteMedicamentoDialog] = useState(false);
  const [medicamentoToDelete, setMedicamentoToDelete] = useState<string | null>(null);




  useEffect(() => {
    fetchData();
    fetchRemedios();
    const interval = setInterval(() => {
      fetchData();
    }, 1000); 
    return () => clearInterval(interval);
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get<Medicamento[]>('http://localhost:5092/api/Medicacao');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

   const fetchRemedios = async () => {
     try {
      const response = await axios.get<Remedio[]>('http://localhost:5092/api/Remedios');
      setRemedios(response.data);
     } catch (error) {
      console.error('Erro ao buscar dados:', error);
     } 
  };  
  
  const openModal = (item: Medicamento | Remedio) => {
    if ('observacao' in item) {
      setSelectedItem(item as Medicamento);
      setModalVisible(true);
    } else {
      console.error('O item não é um Medicamento válido.');
    }
  };

  const saveMedicamento = async () => {
    try {
      if (!medicamento.observacao || !medicamento.dataInicio || !medicamento.dataTermino) {
        Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
        return;
      }

      const updateMedicamento = {
        observacao: medicamento.observacao,
        dataInicio: medicamento.dataInicio,
        dataTermino: medicamento.dataTermino,
        status: medicamento.status, 
        remedios: medicamento.remedios
      };

      if (editingId) {
        await axios.put(`http://localhost:5092/api/Medicacao/${editingId}`, updateMedicamento);
      } else {
        await axios.post('http://localhost:5092/api/Medicacao', updateMedicamento);
      }

      fetchData();
      setMedicamento(initialMedicamento);
      setDialogVisible(false);
      Alert.alert('Sucesso', 'Medicamento salvo com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar medicamento:', error);
      Alert.alert('Erro', 'Erro ao salvar medicamento.');
    }
  };

  const deleteMedicamento = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5092/api/Medicacao/${id}`);
      fetchData();
      Alert.alert('Sucesso', 'Medicamento excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir medicamento:', error);
      Alert.alert('Erro', 'Erro ao excluir medicamento.');
    }
  };

  const editMedicamento = (medicamento: Medicamento) => {
    if (medicamento.id !== undefined) {
      setEditingId(medicamento.id);
      setDialogVisible(true);
    } else {
      console.error('O ID do medicamento é indefinido.');
    }
  };

  const formatarData = (data: string): string => {
    const dataObj = new Date(data);
    const ano = dataObj.getFullYear().toString().substr(-2);
    const mes = ('0' + (dataObj.getMonth() + 1)).slice(-2);
    const dia = ('0' + dataObj.getDate()).slice(-2);
    return `${dia}/${mes}/${ano}`;
  };

  const openNew = () => {
    setMedicamento(initialMedicamento);
    setEditingId(null);
    setDialogVisible(true);
  };

  const openDeleteDialog = (id: string) => {
    setMedicamentoToDelete(id);
    setDeleteMedicamentoDialog(true);
  };

  const hideDeleteMedicamentoDialog = () => {
    setDeleteMedicamentoDialog(false);
    setMedicamentoToDelete(null);
  };

  const confirmDeleteMedicamento = async () => {
    if (medicamentoToDelete) {
      await deleteMedicamento(medicamentoToDelete);
      hideDeleteMedicamentoDialog();
    }
  };


  return (
    <View style={styles.container}>
      <Button
        icon="plus"
        mode="contained"
        buttonColor="#0C84F3"
        textColor="#fff"
        style={styles.addButton}
        onPress={() => openNew()}
      >
        Novo
      </Button>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Observação</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Início</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Término</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Remédios</Text></DataTable.Title>
          <DataTable.Title style={[styles.buttonCell, styles.transparentTitle]}><Text style={styles.cellText}>Ações</Text></DataTable.Title>
        </DataTable.Header>

        {data
          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
          .map((item, index) => (
            <DataTable.Row
              key={index}
              onPress={() => openModal(item)}
              style={{ backgroundColor: (item as Medicamento).status ? '#C8E6C9' : '#FFCDD2' }}
            >
              <DataTable.Cell style={styles.cell}>
                <Text style={styles.cellText}>
                  {(item as Medicamento).observacao || (item as Remedio).nome}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>
                    {(item as Medicamento).dataInicio ? formatarData((item as Medicamento).dataInicio) : ''}
                  </Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>
                    {(item as Medicamento).dataTermino ? formatarData((item as Medicamento).dataTermino) : ''}
                  </Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                <Text style={styles.cellText}>{(item as Medicamento).remedios.join(', ')}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.buttonCell}>
                <View style={styles.buttonContainer}>
                  {(item as Medicamento).id && (
                    <>
                      <IconButton
                        icon="pencil"
                        iconColor="#44BF30"
                        size={18}
                        onPress={() => editMedicamento(item as Medicamento)}
                      />
                      <IconButton
                        icon="delete"
                        iconColor="#F24E1E"
                        size={18}
                        onPress={() => openDeleteDialog((item as Medicamento).id || '')}
                      />
                    </>
                  )}
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
          selectPageDropdownLabel={"Itens por Pagina"}
        />
      </DataTable>


      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>Observações</Text>
                <Text style={styles.infoText}>{selectedItem?.observacao}</Text>
                <Text style={styles.title}>Data de Início</Text>
                <Text style={styles.infoText}>{selectedItem?.dataInicio ? format(new Date(selectedItem.dataInicio), 'dd/MM/yyyy') : ''}</Text>
                <Text style={styles.title}>Data de Término</Text>
                <Text style={styles.infoText}>{selectedItem?.dataTermino ? format(new Date(selectedItem.dataTermino), 'dd/MM/yyyy') : ''}</Text>
                <Text style={styles.title}>Remédios</Text>
                <Text style={styles.infoText}>{(selectedItem as Medicamento)?.remedios?.join(', ')}</Text>
                <Text style={styles.title}>Status</Text>
                <Text style={styles.infoText}>{(selectedItem as Medicamento)?.status ? 'Ativo' : 'Inativo'}</Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={{ color: '#0C84F3', fontSize: 18 }}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Portal>
  <Dialog
    visible={deleteMedicamentoDialog}
    onDismiss={hideDeleteMedicamentoDialog}
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
        onPress={hideDeleteMedicamentoDialog}
      >
        Cancelar
      </Button>
      <Button
        icon={"check"}
        buttonColor="#FF0000"
        textColor="#fff"
        style={{ paddingHorizontal: 10 }}
        onPress={confirmDeleteMedicamento}
      >
        Sim
      </Button>
    </Dialog.Actions>
  </Dialog>
</Portal>


      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)} style={styles.dialogContainer}>
          <Dialog.Title>{editingId ? 'Editar Medicamento' : 'Novo Medicamento'}</Dialog.Title>
          <Dialog.Content style={styles.dialogContent}>
            <TextInput
              label="Observação"
              value={medicamento.observacao}
              onChangeText={(text) => setMedicamento({ ...medicamento, observacao: text })}
              style={styles.input}
            />

            <MultiSelect
              style={styles.input}
              data={remedios.map(remedio => ({ label: remedio.nome, value: remedio.nome }))}
              value={medicamento.remedios || []}
              onChange={(selectedItems) => setMedicamento({ ...medicamento, remedios: selectedItems })}
              placeholder="Selecione os Remédios"
              labelField="label"
              valueField="value"
            />

            <View style={[styles.input, styles.dateInputContainer]}>
              <DateTimePicker
                value={medicamento.dataInicio ? new Date(medicamento.dataInicio) : new Date()}
                mode="date"
                display="default"
                locale="pt-BR"
                onChange={(event, date) => {
                  if (date instanceof Date && !isNaN(date.getTime())) {
                    const dateString = date.toISOString().split('T')[0];
                    setMedicamento(prevState => ({ ...prevState, dataInicio: dateString }));
                  }
                }}
              />
              <Text style={styles.untilText}>Até</Text>
              <DateTimePicker
                value={medicamento.dataTermino ? new Date(medicamento.dataTermino) : new Date()}
                mode="date"
                display="default"
                locale="pt-BR"
                onChange={(event, date) => {
                  if (date instanceof Date && !isNaN(date.getTime())) {
                    const dateString = date.toISOString().split('T')[0];
                    setMedicamento(prevState => ({ ...prevState, dataTermino: dateString }));
                  }
                }}
              />
            </View>
            <Text style={styles.title}>Status da Medicação</Text>
            <Switch
              value={medicamento.status}
              onValueChange={(value) => setMedicamento(prevState => ({ ...prevState, status: value }))}
            />
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
              onPress={() => saveMedicamento()}
            >
              Salvar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default MedicamentoDemo;



const styles = StyleSheet.create({

  confirmationText: {
    fontSize: 16, 
    marginLeft: 10, 
  },

  dialogDelete: {
    backgroundColor: "#fff",
    padding: 20,
  },
  deleteAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  untilText: {
    fontSize: 18, 
    alignSelf: 'center', 
    marginHorizontal: 0,
  },


  dateInputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addButton: {
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  buttonCell: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  editCell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },

  closeButton: {
    marginTop: 10,
    color: '#0C84F3',
    fontSize: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {


    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  centeredItems: {
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    textAlign: 'center', 
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 120,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
  },
  cellText: {
    textAlign: 'center',
  },
  transparentTitle: {
    opacity: 0,
  },
  dateContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
  },
  dateText: {
    fontSize: 11,
  },

  multiSelectContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
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
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  multiSelectSelectAllText: {
    color: 'blue',
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

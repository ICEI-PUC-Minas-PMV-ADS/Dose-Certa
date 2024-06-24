import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Modal, ScrollView, } from 'react-native';
import { DataTable, Button, Dialog, Portal, IconButton } from 'react-native-paper';
import { Warning } from "phosphor-react-native";
import axios from 'axios';

interface Remedio {
  id: string;
  nome: string;
  dosagem: string;
  frequencia: string;
  indicacao: string;
}

const MedicacoesDemo: React.FC = () => {
  const [data, setData] = useState<Remedio[]>([]);
  const [remedio, setRemedio] = useState<Partial<Remedio>>({});
  const [selectedItem, setSelectedItem] = useState<Remedio | null>(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteMedicamentoDialog, setDeleteRemedioDialog] = useState(false);
  const [remedioToDelete, setRemedioToDelete] = useState<string | null>(null);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [page, setPage] = useState<number>(0);
const [itemsPerPage, onItemsPerPageChange] = React.useState(
  numberOfItemsPerPageList[0]
);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Remedio[]>('http://localhost:5092/api/Remedios');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const saveRemedio = async () => {
    try {
      if (!remedio.nome || !remedio.dosagem || !remedio.frequencia) {
        Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
        return;
      }

      const updateRemedio = {
        nome: remedio.nome,
        dosagem: remedio.dosagem,
        horario: new Date().toISOString(),
        indicacao: remedio.indicacao,
        frequencia: remedio.frequencia
      };

      if (editingId) {
        await axios.put(`http://localhost:5092/api/Remedios/${editingId}`, updateRemedio);
      } else {
        await axios.post('http://localhost:5092/api/Remedios', updateRemedio);
      }

      fetchData(); // Atualiza a lista de remédios
      setRemedio({});
      setDialogVisible(false);
      Alert.alert('Sucesso', 'Remédio salvo com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar remédio:', error);
      Alert.alert('Erro', 'Erro ao salvar remédio.');
    }
  };

  const deleteRemedio = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5092/api/Remedios/${id}`);
      fetchData(); // Atualiza a lista de remédios
      Alert.alert('Sucesso', 'Remédio excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir remédio:', error);
      Alert.alert('Erro', 'Erro ao excluir remédio.');
    }
  };

  const editRemedio = (remedio: Remedio) => {
    setRemedio(remedio);
    setEditingId(remedio.id);
    setDialogVisible(true);
  };

  const openNew = () => {
    setRemedio({});
    setEditingId(null);
    setDialogVisible(true);
  };

  const openModal = (item: Remedio) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const openDeleteDialog = (id: string) => {
    setRemedioToDelete(id);
    setDeleteRemedioDialog(true);
  };

  const hideDeleteMedicamentoDialog = () => {
    setDeleteRemedioDialog(false);
    setRemedioToDelete(null);
  };

  const confirmDeleteRemedio = async () => {
    if (remedioToDelete) {
      await deleteRemedio(remedioToDelete);
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
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Dosagem</DataTable.Title>
          <DataTable.Title>Frequência</DataTable.Title>
          <DataTable.Title style={[styles.buttonCell, styles.transparentTitle]}><Text style={styles.cellText}>Ações</Text></DataTable.Title>
        </DataTable.Header>



       
          
        {data
    .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
    .map((item) => (
            <DataTable.Row key={item.id} onPress={() => openModal(item)}>
              <DataTable.Cell>{item.nome}</DataTable.Cell>
              <DataTable.Cell>{item.dosagem}</DataTable.Cell>
              <DataTable.Cell>{item.frequencia}</DataTable.Cell>
              <DataTable.Cell style={styles.buttonCell}>
                <View style={styles.buttonContainer}>
                  {item.id && (
                    <>
                      <IconButton
                        icon="pencil"
                        iconColor="#44BF30"
                        size={18}
                        onPress={() => editRemedio(item)}
                      />
                      <IconButton
                        icon="delete"
                        iconColor="#F24E1E"
                        size={18}
                        onPress={() => openDeleteDialog(item.id)}
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
              {/* Seu conteúdo da modal aqui */}
              <View style={styles.infoContainer}>
              <Text style={styles.title}>Observações</Text>
                <Text style={styles.infoText}>{selectedItem?.nome}</Text>
                <Text style={styles.title}>Dosagem</Text>
                <Text style={styles.infoText}>{selectedItem?.dosagem}</Text>
                <Text style={styles.title}>Frequencia</Text>
                <Text style={styles.infoText}>{selectedItem?.frequencia}</Text>
                <Text style={styles.title}>Indicação</Text>
                <Text style={styles.infoText}>{selectedItem?.indicacao}</Text>
                
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
              onPress={confirmDeleteRemedio}
            >
              Sim
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>


      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>{editingId ? 'Editar Remédio' : 'Novo Remédio'}</Dialog.Title>
          <Dialog.Content>
            <TextInput
              placeholder="Nome"
              value={remedio.nome}
              onChangeText={(text) => setRemedio({ ...remedio, nome: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Dosagem"
              value={remedio.dosagem}
              onChangeText={(text) => setRemedio({ ...remedio, dosagem: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Frequência"
              value={remedio.frequencia}
              onChangeText={(text) => setRemedio({ ...remedio, frequencia: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Indicação"
              value={remedio.indicacao}
              onChangeText={(text) => setRemedio({ ...remedio, indicacao: text })}
              style={styles.input}
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
              onPress={() => saveRemedio()}
            >
              Salvar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default MedicacoesDemo;



const styles = StyleSheet.create({

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
    textAlign: 'center', // Adicionando a propriedade textAlign para centralizar horizontalmente
  },
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
  cellText: {
    textAlign: 'center',
  },

  transparentTitle: {
    opacity: 0,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 120,
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
    alignItems: 'center',
  },
  editCell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30, // Largura fixa menor para os títulos de editar e excluir
  },
});

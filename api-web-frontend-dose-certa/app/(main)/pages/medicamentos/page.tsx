'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import axios from 'axios';

interface Item {
    id?: string;
    nome: string;
    indicacao: string;
    horario: string;
    dosagem: string;
    frequencia: string;
}

const MedicamentoDemo = () => {
    const initialRemedio: Item = {
        id: '',
        nome: '',
        dosagem: '',
        frequencia: '',
        indicacao: '', 
        horario: '' 
    };

    const [data, setData] = useState<Item[]>([]);
    const [selectedRemedioId, setSelectedRemedioId] = useState<string | null>(null);
    const [remedioDialog, setRemedioDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<any>(null);
    const dt = useRef<any>(null);
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    const [remedio, setRemedio] = useState<Item>(initialRemedio);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dosecerta.azurewebsites.net/api/Remedios'); 
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const hideDialog = () => {
        setRemedioDialog(false);
    };
    
    const openNew = (remedioId: string | null = null) => {
        setSelectedRemedioId(remedioId);
        setRemedioDialog(true);
        if (remedioId) {
            const selectedRemedio = data.find((remedio) => remedio.id === remedioId);
            if (selectedRemedio) {
                setRemedio(selectedRemedio);
            }
        } else {
            setRemedio({ ...initialRemedio, nome: '', dosagem: '', frequencia: '', indicacao: '' });
        }
    };

    const saveRemedio = () => {
        
        if (!remedio.nome || !remedio.dosagem || !remedio.frequencia) {
            toast.current?.show({severity: 'warn', summary: 'Atenção', detail: 'Por favor, preencha todos os campos.'});
            return;
        }
    
        
        const updateRemedio = {
            nome: remedio.nome,
            dosagem: remedio.dosagem,
            horario: new Date().toISOString(), 
            indicacao: remedio.indicacao, 
            frequencia: remedio.frequencia
        };
    
        
        const request = selectedRemedioId ? 
            axios.put(`https://dosecerta.azurewebsites.net/api/Remedios/${selectedRemedioId}`, updateRemedio) : 
            axios.post('https://dosecerta.azurewebsites.net/api/Remedios', updateRemedio);
    
        request.then(response => {
            hideDialog();
            fetchData(); 
            toast.current?.show({severity: 'success', summary: 'Sucesso', detail: 'Remédio salvo com sucesso.'});
        })
        .catch(error => {
            console.error('Erro ao salvar remédio:', error);
            console.log(error.response.data);
            toast.current?.show({severity: 'error', summary: 'Erro', detail: 'Erro ao salvar remédio.'});
        });
    };
    
    const editRemedio = (remedio: Item) => {
        setRemedio(remedio);
        openNew(remedio.id);
    };

    const showConfirmDeleteDialog = () => {
        setConfirmDeleteDialog(true);
    };

    const handleDeleteRemedio = () => {
        setConfirmDeleteDialog(false);
        axios
            .delete(`https://dosecerta.azurewebsites.net/api/Remedios/${remedio.id}`)
            .then((response) => {
                hideDialog();
                fetchData();
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Remédio excluído com sucesso.' });
            })
            .catch((error) => {
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir remédio.' });
            });
    };

    const remedioDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" style={{ color: '#FF0000', border: 'none' }} text onClick={hideDialog}  />
            <Button label="Salvar" icon="pi pi-check" style={{ color: '#fff', backgroundColor: '#0C84F3', border: 'none' }} text onClick={saveRemedio} />
        </>
    );
    const deleteRemedioDialogFooter = (
        <>
           <Button label="Não" icon="pi pi-times" style={{ color: '#000', border: 'none' }} text onClick={() => setConfirmDeleteDialog(false)} />
            <Button label="Sim" icon="pi pi-check" style={{ backgroundColor: '#FF0000', border: 'none', color: '#fff' }} text onClick={handleDeleteRemedio} />
        </>
    );

    const actionBodyTemplate = (rowData: Item) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editRemedio(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => {setRemedio(rowData); showConfirmDeleteDialog();}} />
            </>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-end md:align-items-center">
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div className="d-flex">
            <Toast ref={toast} />
            <div className="col-12 border-bottom-2 p-2">
                <h2>Medicamentos</h2>
            </div>

            <div className="p-2 w-100 flex justify-content-end">
                <Button label="Novo" icon="pi pi-plus" style={{ marginRight: '.5em', backgroundColor: '#0C84F3', border: 'none' }} onClick={() => openNew()} />
            </div>
               
            <div>
                <DataTable
                    ref={dt}
                    value={data}
                    dataKey="id"
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    className="datatable-responsive"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                    emptyMessage="Nenhum Medicamento encontrado."
                    globalFilter={globalFilter}
                    header={header}
                    responsiveLayout="scroll"
                >
                    <Column field="nome" header="Nome do Medicamento" />
                    <Column field="dosagem" header="Dosagem" />
                    <Column field="frequencia" header="Frequência" />
                    <Column field="indicacao" header="Indicação" />
                    <Column body={actionBodyTemplate}></Column>
                </DataTable>
            </div>

            <Dialog visible={remedioDialog} style={{ width: '450px' }} header={selectedRemedioId ? 'Editar Medicamento' : 'Novo Medicamento'} modal className="p-fluid" footer={remedioDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="medicamento">Medicamento</label>
                    <InputText id="medicamento" name="nome" value={remedio.nome} onChange={(e) => setRemedio(prevState => ({ ...prevState, nome: e.target.value }))} autoFocus required />
                </div>
                <div className="flex">
                    <div className="field" style={{ marginRight: '1rem' }}>
                        <label htmlFor="dosagem">Dosagem</label>
                        <InputText id="dosagem" name="dosagem" value={remedio.dosagem} onChange={(e) => setRemedio(prevState => ({ ...prevState, dosagem: e.target.value }))} autoFocus required />
                    </div>
                    <div className="field">
                        <label htmlFor="frequencia">Frequência</label>
                        <InputText id="frequencia" name="frequencia" value={remedio.frequencia} onChange={(e) => setRemedio(prevState => ({ ...prevState, frequencia: e.target.value }))} autoFocus required />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="indicacao">Indicação</label>
                    <InputText id="indicacao" name="indicacao" value={remedio.indicacao} onChange={(e) => setRemedio(prevState => ({ ...prevState, indicacao: e.target.value }))} autoFocus required />
                </div>
            </Dialog>

            <Dialog visible={confirmDeleteDialog} style={{ width: '450px' }} header="Confirmação" footer={deleteRemedioDialogFooter} modal onHide={() => setConfirmDeleteDialog(false)}>
                <div className="p-d-flex p-ai-center p-jc-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', color: '#FF0000' }} />
                    {remedio && <span>Tem certeza de que deseja excluir?</span>}
                </div>
               
            </Dialog>
        </div>
    );
}

export default MedicamentoDemo;

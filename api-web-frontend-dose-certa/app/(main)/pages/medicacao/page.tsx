"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { MultiSelect } from "primereact/multiselect";

import axios from 'axios';

interface Medicacao {
    id?: string;
    observacao: string;
    dataInicio: Date;
    dataTermino: Date;
    status: null;
    remedios: string[];
}

interface Remedio {
    id: string;
    nome: string;
}

const MedicacoesDemo = () => {
    const initialMedicacao: Medicacao = {
        id: '',
        observacao: '',
        dataInicio: new Date(),
        dataTermino: new Date(),
        status: null,
        remedios: []
    };

    const [data, setData] = useState<Medicacao[]>([]);
    const [medicacao, setMedicacao] = useState<Medicacao>(initialMedicacao);
    const [medicacaoDialog, setMedicacaoDialog] = useState(false);
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const [remedios, setRemedios] = useState<Remedio[]>([]);
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    useEffect(() => {
        fetchData();
        fetchRemedios();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get<Medicacao[]>('https://dosecerta.azurewebsites.net/api/Medicacao');
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const fetchRemedios = async () => {
        try {
            const response = await axios.get<Remedio[]>('https://dosecerta.azurewebsites.net/api/Remedios');
            setRemedios(response.data);
        } catch (error) {
            console.error('Erro ao buscar remédios:', error);
        }
    };

    const hideDialog = () => {
        setMedicacaoDialog(false);
    };
    
    const openNew = (medicacaoId: string | null = null) => {
        setMedicacaoDialog(true);
        if (medicacaoId) {
            const selectedMedicacao = data.find((medicacao) => medicacao.id === medicacaoId);
            if (selectedMedicacao) {
                setMedicacao(selectedMedicacao);
            }
        } else {
            setMedicacao(initialMedicacao);
        }
    };

    const saveMedicacao = () => {
        if (!medicacao.observacao || !medicacao.dataInicio || !medicacao.dataTermino || medicacao.remedios.length === 0) {
            toast.current?.show({ severity: 'warn', summary: 'Atenção', detail: 'Por favor, preencha todos os campos obrigatórios.' });
            return;
        }
    
        const newMedicacao = {
            observacao: medicacao.observacao,
            dataInicio: medicacao.dataInicio,
            dataTermino: medicacao.dataTermino,
            remedios: medicacao.remedios,
            status: 'ValorDoStatus'
        };

        const request = medicacao.id ? axios.put(`https://dosecerta.azurewebsites.net/api/Medicacao/${medicacao.id}`, newMedicacao) : axios.post('https://dosecerta.azurewebsites.net/api/Medicacao', newMedicacao);
        
        request.then(() => {
            hideDialog();
            fetchData(); 
            toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Medicação salva com sucesso.' });
        }).catch(error => {
            console.error('Erro ao salvar medicação:', error);
            toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar medicação.' });
        });
    };

    const editMedicacao = (Medicacao: Medicacao) => {
        setMedicacao(Medicacao);
        openNew(Medicacao.id);
    };

    const handleDeleteMedicacao = () => {
        if (!medicacao || !medicacao.id) {
            console.error('ID da medicação não está definido.');
            return;
        }

        
        setConfirmDeleteDialog(true);
    };

    const confirmDelete = () => {
        
        setConfirmDeleteDialog(false);

       
        axios
            .delete(`https://dosecerta.azurewebsites.net/api/Medicacao/${medicacao.id}`)
            .then((response) => {
                hideDialog();
                fetchData();
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Medicação excluído com sucesso.' });
            })
            .catch((error) => {
                console.error('Erro ao excluir medicação:', error);
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir Medicaçao.' });
            });
    };

    const cancelDelete = () => {
        
        setConfirmDeleteDialog(false);
    };

    const actionBodyTemplate = (rowData: Medicacao) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editMedicacao(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => {setMedicacao(rowData); handleDeleteMedicacao();}} />
            </>
        );
    };

    const confirmDeleteFooter = (
        <>
            <Button label="Não" icon="pi pi-times" style={{ color: '#000', border: 'none' }} text onClick={cancelDelete} />
            <Button label="Sim" icon="pi pi-check" style={{ backgroundColor: '#FF0000', border: 'none', color: '#fff' }} text onClick={confirmDelete} />
        </>
    );

    const getRemediosSelecionados = (remediosSelecionados: string[], remedios: Remedio[]) => {
        return remediosSelecionados.map(remedioId => {
            const remedio = remedios.find(rem => rem.id === remedioId);
            return (
                <div key={remedioId} style={{ width: '139px', height: '32px', borderRadius: '25px', border: '1px solid #76A6D4', marginRight: '5px', marginBottom: '5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    {remedio ? remedio.nome : ''}
                </div>
            );
        });
    };

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString('pt-BR', options);
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
                <h2>Medicações</h2>
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
                    <Column field="observacao" header="Observação" style={{ width: '300px' }} />
                    <Column field="dataInicio" header="Data de Início" body={(rowData: Medicacao) => formatDate(rowData.dataInicio)} />
                    <Column field="dataTermino" header="Data de Término" body={(rowData: Medicacao) => formatDate(rowData.dataTermino)} />

                    <Column 
                        field="status" 
                        header="Remédio" 
                        body={(rowData: Medicacao) => getRemediosSelecionados(rowData.remedios, remedios)} 
                    />

                    <Column body={actionBodyTemplate}></Column>
                </DataTable>

                <Dialog visible={medicacaoDialog} style={{ width: '450px' }} header={medicacao.id ? 'Editar Medicação' : 'Nova Medicação'} modal className="p-fluid" onHide={hideDialog}>
                    <div className="field">
                        <label htmlFor="observacao">Observação</label>
                        <InputTextarea id="observacao" name="observacao" value={medicacao.observacao} onChange={(e) => setMedicacao(prevState => ({ ...prevState, observacao: e.target.value }))} rows={5} autoResize />
                    </div>
                    <div className="field">
                        <label htmlFor="multiselect">Remédios</label>
                        <MultiSelect 
                            id="multiselect" 
                            value={medicacao.remedios} 
                            options={remedios} 
                            optionLabel="nome" 
                            optionValue="id" 
                            onChange={(e) => setMedicacao(prevState => ({ ...prevState, remedios: e.value }))} 
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="dataInicio">Data de Início</label>
                        <Calendar id="dataInicio" name="dataInicio" value={medicacao.dataInicio} onChange={(e) => setMedicacao(prevState => ({ ...prevState, dataInicio: e.value || new Date() }))} showIcon />
                    </div>
                    <div className="field">
                        <label htmlFor="dataTermino">Data de Término</label>
                        <Calendar id="dataTermino" name="dataTermino" value={medicacao.dataTermino} onChange={(e) => setMedicacao(prevState => ({ ...prevState, dataTermino: e.value || new Date() }))} showIcon />
                    </div>
                    
                    <div className="flex justify-content-end">
                    <Button label="Cancelar" icon="pi pi-times" style={{ color: '#FF0000', border: 'none' }} text onClick={hideDialog} />
                        <Button label="Salvar" icon="pi pi-check" style={{ color: '#fff', backgroundColor: '#0C84F3', border: 'none' }} text onClick={saveMedicacao} />
                    </div>
                </Dialog>

                <Dialog visible={confirmDeleteDialog} style={{ width: '450px' }} header="Confirmação" footer={confirmDeleteFooter} modal onHide={cancelDelete}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', color: '#FF0000' }} />
                    {medicacao && <span>Tem certeza de que deseja excluir?</span>}
                </div>
            </Dialog>
            </div>
        </div>
    );
};

export default MedicacoesDemo;


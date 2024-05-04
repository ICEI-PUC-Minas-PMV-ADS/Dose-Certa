'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import axios from 'axios';

type Nullable<T> = T | null;

interface Item {
    id?: string;
    date: Date;
    status: string;
    observacoes: string;
    idUsuarioPaciente?: number | null; 
    formattedDate?: string;
}

interface User {
    id?: number;
    name: string;
}

const VisitasDemo = () => {
    let emptyVisita: Item = {
        id: '',
        date: new Date(),
        status: '',
        observacoes: '',
        idUsuarioPaciente: null
    };

    let emptyPaciente: User = {
        id: 0,
        name: ''
    }

    const [data, setData] = useState<Item[]>([]);
    const [pacientes, setPacientes] = useState<User[]>([]);
    const [visita, setVisita] = useState<Item>(emptyVisita);
    const [selectedVisitaId, setSelectedVisitaId] = useState<string | null>(null);
    const [visitaDialog, setVisitaDialog] = useState(false);
    const [deleteVisitaDialog, setDeleteVisitaDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    const options = [
        { label: 'A Fazer', value: 'A Fazer' },
        { label: 'Em Andamento', value: 'Em Andamento' },
        { label: 'Concluído', value: 'Concluído' }
    ];

    useEffect(() => {
        fetchData();
        fetchPacientes();
    }, []);

    const fetchData = () => {
        axios
            .get('http://localhost:5092/api/Visita')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    };

    const fetchPacientes = () => {
        axios
            .get('http://localhost:5092/api/users?UserType=Paciente')
            .then((response) => {
                setPacientes([emptyPaciente, ...response.data]); 
            })
            .catch((error) => {
                console.error('Erro ao buscar pacientes:', error);
            });
    };

    const hideDialog = () => {
        setVisitaDialog(false);
    };

    const hideDeleteVisitaDialog = () => {
        setDeleteVisitaDialog(false);
    };

    const openNew = (visitaId: string | null = null) => {
        setSelectedVisitaId(visitaId);
        setVisitaDialog(true);

        if (visitaId) {
            const selectedVisita = data.find((visita) => visita.id === visitaId);
            if (selectedVisita) {
                const formattedVisita = { ...selectedVisita, date: new Date(selectedVisita.date) };
                setVisita(formattedVisita);
            }
        } else {
            setVisita({ ...emptyVisita }); // Defina a data atual apenas se for uma nova visita
        }
    };

    const saveVisita = () => {
        const newVisita = {
            id: visita.id || '',
            date: visita.date,
            status: visita.status,
            observacoes: visita.observacoes,
            idUsuarioPaciente: visita.idUsuarioPaciente || 0
        };

        const request = selectedVisitaId ? axios.put(`http://localhost:5092/api/Visita/${selectedVisitaId}`, newVisita) : axios.post('http://localhost:5092/api/Visita', newVisita);

        request
            .then((response) => {
                hideDialog();
                fetchData();
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Visita salva com sucesso.' });
            })
            .catch((error) => {
                console.error('Erro ao salvar visita:', error);
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar visita.' });
            });
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setVisita((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const onCalendarChange = (e: Nullable<Date>) => {
        if (e) {
            let _visita = { ...visita };
            _visita['date'] = e as Date;
            setVisita(_visita);
        }
    };

    const onStatusChange = (e: DropdownChangeEvent) => {
        let _visita = { ...visita };
        _visita['status'] = e.value;
        setVisita(_visita);
    };

    const onPacienteChange = (selectedPaciente: User | null) => {
        if (selectedPaciente) {
            setVisita({ ...visita, idUsuarioPaciente: selectedPaciente.id });
        } else {
            setVisita({ ...visita, idUsuarioPaciente: null });
        }
    };
    

    const editVisita = (visita: Item) => {
        setVisita({ ...visita });
        openNew(visita.id);
    };

    const confirmDelete = (visita: Item) => {
        setVisita(visita);
        setDeleteVisitaDialog(true);
    };

    const deleteVisita = () => {
        axios
            .delete(`http://localhost:5092/api/Visita/${visita.id}`)
            .then((response) => {
                hideDeleteVisitaDialog(); // Fecha o diálogo de confirmação
                fetchData(); // Atualiza os dados para refletir a exclusão
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Visita excluída com sucesso.' });
            })
            .catch((error) => {
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir visita.' });
            });
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-end md:align-items-center">
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const actionBodyTemplate = (rowData: Item) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editVisita(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDelete(rowData)} />
            </>
        );
    };

    const visitaDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" style={{ color: '#FF0000', border: 'none' }} text onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" style={{ color: '#fff', backgroundColor: '#0C84F3', border: 'none' }} text onClick={saveVisita} />
        </>
    );

    const deleteVisitaDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" style={{ color: '#000', border: 'none' }} text onClick={hideDeleteVisitaDialog} />
            <Button label="Yes" icon="pi pi-check" style={{ backgroundColor: '#FF0000', border: 'none', color: '#fff' }} text onClick={deleteVisita} />
        </>
    );

    const getPacienteName = (idUsuarioPaciente: number) => {
        if (!pacientes || pacientes.length === 0) {
            return 'Carregando...'; // Ou qualquer outra mensagem que você queira exibir enquanto os pacientes estão sendo carregados
        }
    
        const paciente = pacientes.find(p => p.id === idUsuarioPaciente);
        return paciente ? paciente.name : 'Não encontrado';
    };

    const columns = [
        {
            field: 'idUsuarioPaciente',
            header: 'Paciente',
            body: (rowData: Item) => getPacienteName(rowData.idUsuarioPaciente ?? 0)
        },
        { field: 'formattedDate', header: 'Data' },
        { field: 'status', header: 'Status' },
        { field: 'observacoes', header: 'Observações' }
    ];

    return (
        <div className="d-flex">
            <Toast ref={toast} />
            <div className="col-12 border-bottom-2 p-2">
                <h2>Visitas</h2>
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
                    emptyMessage="Nenhuma visita encontrada."
                    globalFilter={globalFilter}
                    header={header}
                    responsiveLayout="scroll"
                >
                    {columns.map((column, i) => (
                        <Column key={i} field={column.field} header={column.header} headerStyle={{ minWidth: '10rem' }} body={column.body} />
                    ))}
                    <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={visitaDialog} style={{ width: '450px' }} header="Nova Visita" modal className="p-fluid" footer={visitaDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="paciente">Paciente</label>
                    <Dropdown id="paciente" optionLabel="name" value={pacientes.find(p => p.id === visita.idUsuarioPaciente)} options={pacientes} onChange={(e) => onPacienteChange(e.value)} disabled={!pacientes.length} placeholder="Selecione um paciente" />
                </div>
                <div className="field">
                    <label htmlFor="data">Data</label>
                    <span className="p-input-icon-right">
                        <Calendar showButtonBar value={visita.date} onChange={(e) => onCalendarChange(e.value as Date)} />
                        <i className="pi pi-calendar" />
                    </span>
                </div>
                <div className="field">
                    <label htmlFor="status">Status</label>
                    <Dropdown id="status" name="status" options={options} value={visita.status} onChange={onStatusChange} optionLabel="label"></Dropdown>
                </div>
                <div className="field">
                    <label htmlFor="obs">Observações</label>
                    <InputTextarea id="obs" name="observacoes" value={visita.observacoes} onChange={onInputChange} required rows={4} cols={20} style={{ resize: 'none' }} />
                </div>
            </Dialog>

            <Dialog visible={deleteVisitaDialog} style={{ width: '450px' }} header="Confirmação" footer={deleteVisitaDialogFooter} modal onHide={hideDeleteVisitaDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', color: '#FF0000' }} />
                    {visita && <span>Tem certeza de que deseja excluir?</span>}
                </div>
            </Dialog>
        </div>
    );
};

export default VisitasDemo;

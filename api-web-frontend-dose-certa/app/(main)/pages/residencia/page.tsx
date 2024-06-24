'use client'
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
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    bairro: string;
    idUsuarioPaciente?: number | null; 
    formattedDate?: string;
}

interface User {
    id?: number;
    name: string;
}

const ResidenciaDemo = () => {
    let emptyResidencia: Item = {
        id: '',
        date: new Date(),
        status: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
        idUsuarioPaciente: null
    };

    let emptyPaciente: User = {  
        id: 0,
        name: ''
    }

    const [data, setData] = useState<Item[]>([]);
    const [pacientes, setPacientes] = useState<User[]>([]);
    const [residencia, setResidencia] = useState<Item>(emptyResidencia);
    const [selectedResidenciaId, setSelectedResidenciaId] = useState<string | null>(null);
    const [residenciaDialog, setResidenciaDialog] = useState(false);
    const [deleteResidenciaDialog, setDeleteResidenciaDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    const options = [
        { label: 'A Fazer', value: 'A Fazer' },
        { label: 'Em Andamento', value: 'Em Andamento' },
        { label: 'Concluído', value: 'Concluído' }
    ];

    useEffect(() => {
        console.log("oii")
        fetchData();
        fetchPacientes();
    }, []);

    const fetchData = () => {
        axios
            .get('http://localhost:5092/api/Residencia')
            .then((response) => {
                console.log(response)
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    };

    const fetchPacientes = () => {
        axios
            .get('http://dosecerta.azurewebsites.net/api/users?UserType=Paciente')
            .then((response) => {
                setPacientes([emptyPaciente, ...response.data]); 
            })
            .catch((error) => {
                console.error('Erro ao buscar pacientes:', error);
            });
    };

    const hideDialog = () => {
        setResidenciaDialog(false);
    };

    const hideDeleteResidenciaDialog = () => {
        setDeleteResidenciaDialog(false);
    };

    const openNew = (residenciaId: string | null = null) => {
        setSelectedResidenciaId(residenciaId);
        setResidenciaDialog(true);

        if (residenciaId) {
            const selectedResidencia = data.find((residencia) => residencia.id === residenciaId);
            if (selectedResidencia) {
                const formattedResidencia = { ...selectedResidencia, date: new Date(selectedResidencia.date) };
                setResidencia(formattedResidencia);
            }
        } else {
            setResidencia({ ...emptyResidencia }); // Defina a data atual apenas se for uma nova visita
        }
    };

    const saveResidencia = () => {
        const newResidencia = {
            id: residencia.id || '',
            rua: residencia.rua,
            numero: residencia.numero,
            complemento: residencia.complemento,
            cidade: residencia.cidade,
            bairro: residencia.bairro,
            idUsuarioPaciente: residencia.idUsuarioPaciente || 0
        };

        const request = selectedResidenciaId ? axios.put(`http://dosecerta.azurewebsites.net/api/Residencia/${selectedResidenciaId}`, newResidencia) : axios.post('http://dosecerta.azurewebsites.net/api/Residencia', newResidencia);

        request
            .then((response) => {
                hideDialog();
                fetchData();
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Residência salva com sucesso.' });
            })
            .catch((error) => {
                console.error('Erro ao salvar residência:', error);
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar residência.' });
            });
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResidencia((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const onPacienteChange = (selectedPaciente: User | null) => {
        if (selectedPaciente) {
            setResidencia({ ...residencia, idUsuarioPaciente: selectedPaciente.id });
        } else {
            setResidencia({ ...residencia, idUsuarioPaciente: null });
        }
    };
    

    const editResidencia = (residencia: Item) => {
        setResidencia({ ...residencia });
        openNew(residencia.id);
    };

    const confirmDelete = (residencia: Item) => {
        setResidencia(residencia);
        setDeleteResidenciaDialog(true);
    };

    const deleteResidencia = () => {
        axios
            .delete(`http://dosecerta.azurewebsites.net/api/Residencia/${residencia.id}`)
            .then((response) => {
                hideDeleteResidenciaDialog(); // Fecha o diálogo de confirmação
                fetchData(); // Atualiza os dados para refletir a exclusão
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Residência excluída com sucesso.' });
            })
            .catch((error) => {
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir residência.' });
            });
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-end md:align-items-center">
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="Pesquisar..." />
            </span>
        </div>
    );

    const actionBodyTemplate = (rowData: Item) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editResidencia(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDelete(rowData)} />
            </>
        );
    };

    const residenciaDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" style={{ color: '#FF0000', border: 'none' }} text onClick={hideDialog} />
            <Button label="Salvar" icon="pi pi-check" style={{ color: '#fff', backgroundColor: '#0C84F3', border: 'none' }} text onClick={saveResidencia} />
        </>
    );

    const deleteResidenciaDialogFooter = (
        <>
            <Button label="Não" icon="pi pi-times" style={{ color: '#000', border: 'none' }} text onClick={hideDeleteResidenciaDialog} />
            <Button label="Sim" icon="pi pi-check" style={{ backgroundColor: '#FF0000', border: 'none', color: '#fff' }} text onClick={deleteResidencia} />
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
        // {
        //     field: 'idUsuarioPaciente',
        //     header: 'Paciente',
        //     body: (rowData: Item) => getPacienteName(rowData.idUsuarioPaciente ?? 0)
        // },
        { field: 'rua', header: 'Rua' },
        { field: 'numero', header: 'Número' },
        { field: 'cidade', header: 'Cidade' },
        { field: 'bairro', header: 'Bairro' },
        { field: 'complemento', header: 'Complemento' },
    ];

    return (
        <div className="d-flex">
            <Toast ref={toast} />
            <div className="col-12 border-bottom-2 p-2">
                <h2>Residências</h2>
            </div>

            <div className="p-2 w-100 flex justify-content-end">
                <Button label="Novo" icon="pi pi-plus" style={{ marginRight: '.5em', backgroundColor: '#0C84F3', border: 'none' }} onClick={() => openNew()} />
            </div>


            <div onClick = {()=>{console.log(columns)}}> 
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
                    emptyMessage="Nenhuma residência encontrada."
                    globalFilter={globalFilter}
                    header={header}
                    responsiveLayout="scroll"
                >
                    {columns.map((column, i) => (
                        <Column key={i} field={column.field} header={column.header} headerStyle={{ minWidth: '10rem' }} />
                    ))}
                    <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={residenciaDialog} style={{ width: '450px' }} header="Nova Residência" modal className="p-fluid" footer={residenciaDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="rua">Rua</label>
                    <InputTextarea id="rua" name="rua" value={residencia.rua} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
                <div className="field">
                    <label htmlFor="numero">Número</label>
                    <InputTextarea id="numero" name="numero" value={residencia.numero} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
                <div className="field">
                    <label htmlFor="complemento">Complemento</label>
                    <InputTextarea id="complemento" name="complemento" value={residencia.complemento} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
                <div className="field">
                    <label htmlFor="cidade">Cidade</label>
                    <InputTextarea id="cidade" name="cidade" value={residencia.cidade} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
                <div className="field">
                    <label htmlFor="bairro">Bairro</label>
                    <InputTextarea id="bairro" name="bairro" value={residencia.bairro} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
            </Dialog>

            <Dialog visible={deleteResidenciaDialog} style={{ width: '450px' }} header="Confirmação" footer={deleteResidenciaDialogFooter} modal onHide={hideDeleteResidenciaDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', color: '#FF0000' }} />
                    {residencia && <span>Tem certeza de que deseja excluir?</span>}
                </div>
            </Dialog>
        </div>
    );
};

export default ResidenciaDemo;

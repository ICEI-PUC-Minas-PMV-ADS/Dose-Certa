'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import axios from 'axios';

interface Item {
    id?: string;
    content: string;
    idUserPaciente?: number | null;
    formattedCreationDate?: '';
}

interface User {  
    id?: number;
    name: string;
}

const AnotacaoDemo = () => {
    let emptyNote: Item = {
        id: '',
        content: '',
        idUserPaciente: null
    };

    let emptyPaciente: User = {
        id: 0,
        name: ''
    }

    const [data, setData] = useState<Item[]>([]);
    const [pacientes, setPacientes] = useState<User[]>([]);
    const [note, setNote] = useState<Item>(emptyNote);
    const [contentInput, setContentInput] = useState('');
    const [pacienteInput, setPacienteInput] = useState(0);
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
    const [noteDialog, setNoteDialog] = useState(false);
    const [deleteNoteDialog, setDeleteNoteDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    useEffect(() => {
        fetchData();
        fetchPacientes();
    }, []);

    const fetchData = () => {
        axios
            .get('http://dosecerta.azurewebsites.net/api/Notes')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    };

    const fetchPacientes = () => {
        axios
            .get('https://dosecerta.azurewebsites.net/api/users?UserType=Paciente')
            .then((response) => {
                setPacientes([emptyPaciente, ...response.data]); 
            })
            .catch((error) => {
                console.error('Erro ao buscar pacientes:', error);
            });
    };

    const hideDialog = () => {
        setNoteDialog(false);
    };

    const hideDeleteNoteDialog = () => {
        setDeleteNoteDialog(false);
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
            setNote({ ...emptyNote, content: '', idUserPaciente: null });
        }
    };    
    
    const saveNote = () => {
        const newNote = {
            id: note.id || '',
            content: note.content,
            idUserPaciente: note.idUserPaciente || null,
        };
        
    
        const request = selectedNoteId ? axios.put(`https://dosecerta.azurewebsites.net/api/Notes/${selectedNoteId}`, newNote) : axios.post('http://dosecerta.azurewebsites.net/api/Notes', newNote);
        
        request.then(response => {
            hideDialog();
            fetchData(); 
            toast.current?.show({severity: 'success', summary: 'Sucesso', detail: 'Anotação salva com sucesso.'});
        })
        .catch(error => {
            console.error('Erro ao salvar anotação:', error);
            toast.current?.show({severity: 'error', summary: 'Erro', detail: 'Erro ao salvar anotação.'});
        });
    };

    const editNote = (note: Item) => {
        setContentInput(note.content);
        setPacienteInput(note.idUserPaciente || 0);
        openNew(note.id);
    };

    const confirmDelete = (note: Item) => {
        setNote(note);
        setDeleteNoteDialog(true); 
    };

    const deleteNote = () => {
        axios
        .delete(`https://dosecerta.azurewebsites.net/api/Notes/${note.id}`)
        .then((response) => {
            hideDeleteNoteDialog(); // Fecha o diálogo de confirmação
            fetchData(); // Atualiza os dados para refletir a exclusão
            toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Anotação excluída com sucesso.' });
        })
        .catch((error) => {
            toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir anotação.' });
        });
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNote(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onPacienteChange = (selectedPaciente: User | null) => {
        if (selectedPaciente) {
            setNote(prevNote => ({ ...prevNote, idUserPaciente: selectedPaciente.id }));
        } else {
            setNote(prevNote => ({ ...prevNote, idUserPaciente: null }));
        }
    };

    const noteDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" style={{ color: '#FF0000', border: 'none' }} text onClick={hideDialog}  />
            <Button label="Save" icon="pi pi-check" style={{ color: '#fff', backgroundColor: '#0C84F3', border: 'none' }} text onClick={saveNote} />
        </>
    );

    const deleteNoteDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" style={{ color: '#000', border: 'none' }} text onClick={hideDeleteNoteDialog} />
            <Button label="Yes" icon="pi pi-check" style={{ backgroundColor: '#FF0000', border: 'none', color: '#fff' }} text onClick={deleteNote} />
        </>
    );

    const getPacienteName = (idUsuarioPaciente: number) => {
        if (!pacientes || pacientes.length === 0) {
            return 'Carregando...'; 
        }
    
        const paciente = pacientes.find(p => p.id === idUsuarioPaciente);
        return paciente ? paciente.name : 'Não encontrado';
    };
    

    const columns = [
        {
            field: 'idUserPaciente',
            header: 'Paciente',
            body: (rowData: Item) => getPacienteName(rowData.idUserPaciente ?? 0)
        },
        { field: 'content', header: 'Anotação' },
        { field: 'formattedCreationDate', header: 'Data de Criação' }
    ];

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
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editNote(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDelete(rowData)} />
            </>
        );
    };

    return (
        <div className="d-flex">
            <Toast ref={toast} />
            <div className="col-12 border-bottom-2 p-2">
                <h2>Anotações</h2>
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
                    emptyMessage="Nenhuma anotação encontrada."
                    globalFilter={globalFilter}
                    header={header}
                    responsiveLayout="scroll"
                >
                    {columns.map((column, i) => (
                        <Column key={i} field={column.field} header={column.header} headerStyle={{ minWidth: '20rem' }} body={column.body} />
                    ))}
                    <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={noteDialog} style={{ width: '450px' }} header='Nova Anotação' modal className="p-fluid" footer={noteDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="paciente">Paciente</label>
                    <Dropdown id="paciente" optionLabel="name" value={pacientes.find(p => p.id === note.idUserPaciente)} options={pacientes} onChange={(e) => onPacienteChange(e.value)} placeholder="Selecione um paciente" />
                </div>
                <div className="field">
                    <label htmlFor="content">Conteúdo</label>
                    <InputTextarea id="content" name="content" value={note.content} onChange={onInputChange} autoFocus required rows={8} cols={20} style={{ resize: 'none' }} />
                </div>
            </Dialog>

            <Dialog visible={deleteNoteDialog} style={{ width: '450px' }} header="Confirmação" footer={deleteNoteDialogFooter} modal onHide={hideDeleteNoteDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', color: '#FF0000' }} />
                    {note && <span>Tem certeza de que deseja excluir?</span>}
                </div>
            </Dialog>
        </div>
    );
}

export default AnotacaoDemo;

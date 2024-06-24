'use client'
import React, { useEffect, useRef, useState} from 'react';
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
    name: string;
    cpf: string,
    dataNascimento: Date;
    // houseId?: string;
    status: string;
    formattedDate?: string;
    idUsuarioPaciente?: number | null;

}

interface User {
    id?: number;
    name: string;
   
}

const PacientesDemo = () => {
    let emptyPacientes: Item = {
        id: '',
        dataNascimento: new Date(),
        status: '',
        name: '',
        cpf: '',
        // houseId: '',
        
    };

    let emptyPaciente: User = {
        id: 0,
        name: ''
    }

    const [data, setData] = useState<Item[]>([]);
    const [pacientes, setPacientes] = useState<User[]>([]);
    const [user, setUser] = useState<Item>(emptyPacientes);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [userDialog, setUserDialog] = useState(false);
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
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
        // fetchPacientes();
    }, []);

    const fetchData = () => {
        axios
            .get('https://dosecerta.azurewebsites.net/api/Users')
            .then((response) => {
                console.log(response);
                
                // Corrigir a data antes de definir o estado
                const correctedData = response.data.map((user: { dataNascimento: string | number | Date; }) => {
                    return {
                        ...user,
                        dataNascimento: new Date(user.dataNascimento).toLocaleDateString('pt-BR')
                    };
                });
    
                setData(correctedData);
            })
    }

    // useEffect(()=>{

    //     const correctedData:any = data.map((user: { dataNascimento: string | number | Date; }) => {
    //         return {
    //             ...user,
    //             dataNascimento: new Date(user.dataNascimento).toLocaleDateString('pt-BR')
    //         };
    //     });

    //     setData(correctedData);

    // },[data])

    const fetchPacientes = () => {
        axios
            .get('https://dosecerta.azurewebsites.net/api/Users?UserType=Agente')
            .then((response) => {
                console.log(response)
                setPacientes([emptyPaciente, ...response.data]); 
            })
            .catch((error) => {
                console.error('Erro ao buscar pacientes:', error);
            });
    };

    const hideDialog = () => {
        setUserDialog(false);
    };

    const hideDeleteUserDialog = () => {
        setDeleteUserDialog(false);
    };

    const openNew = (userId: string | null = null) => {
        setSelectedUserId(userId);
        setUserDialog(true);

        if (userId) {
            const selectedUser= data.find((user) => user.id === userId);
            if (selectedUser) {
                const formattedUser = { ...selectedUser, date: new Date(selectedUser.dataNascimento) };
                setUser(formattedUser);
            }
        } else {
            setUser({ ...emptyPacientes }); // Defina a data atual apenas se for uma nova visita
        }
    };

    const saveUser = () => {
        const newUser = {
            // id: user.id || '',
            dataNascimento: user.dataNascimento,
            cpf: user.cpf,
            name: user.name,
            email:"teste@gmail.com",
            password: "23456",
            userType:"Agente",
            // houseId: 90
            // status: user.status,
            // idUsuarioPaciente: user.idUsuarioPaciente || 0
        };

        const request = selectedUserId ? axios.put(`https://dosecerta.azurewebsites.net/api/Users/${selectedUserId}`, newUser) : axios.post('https://dosecerta.azurewebsites.net/api/Users', newUser);

        request
            .then((response) => {
                hideDialog();
                fetchData();
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Paciente salvo com sucesso.' });
            })
            .catch((error) => {
                console.error('Erro ao salvar paciente:', error);
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar paciente.' });
            });
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const onCalendarChange = (e: Nullable<Date>) => {
        if (e) {
            let _user = { ...user };
            _user['dataNascimento'] = e as Date;
            setUser(_user);
        }
    };

    const onStatusChange = (e: DropdownChangeEvent) => {
        let _user = { ...user };
        _user['status'] = e.value;
        setUser(_user);
    };

    const onPacienteChange = (selectedPaciente: User | null) => {
        if (selectedPaciente) {
            setUser({ ...user, idUsuarioPaciente: selectedPaciente.id });
        } else {
            setUser({ ...user, idUsuarioPaciente: null });
        }
    };
    

    const editUser = (pacientes: Item) => {
        setUser({ ...pacientes });
        openNew(pacientes.id);
    };

    const confirmDelete = (pacientes: Item) => {
        setUser(pacientes);
        setDeleteUserDialog(true);
    };

    const deleteUser = () => {
        axios
            .delete(`https://dosecerta.azurewebsites.net/api/Users/${user.id}`)
            .then((response) => {
                hideDeleteUserDialog(); // Fecha o diálogo de confirmação
                fetchData(); // Atualiza os dados para refletir a exclusão
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Paciente excluída com sucesso.' });
            })
            .catch((error) => {
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir paciente.' });
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
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDelete(rowData)} />
            </>
        );
    };

    const userDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" style={{ color: '#FF0000', border: 'none' }} text onClick={hideDialog} />
            <Button label="Salvar" icon="pi pi-check" style={{ color: '#fff', backgroundColor: '#0C84F3', border: 'none' }} text onClick={saveUser} />
        </>
    );

    const deleteUserDialogFooter = (
        <>
            <Button label="Não" icon="pi pi-times" style={{ color: '#000', border: 'none' }} text onClick={hideDeleteUserDialog} />
            <Button label="Sim" icon="pi pi-check" style={{ backgroundColor: '#FF0000', border: 'none', color: '#fff' }} text onClick={deleteUser} />
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
            field: 'name',
            header: 'Nome',
            // body: (rowData: Item) => getPacienteName(rowData.idUsuarioPaciente ?? 0)
        },
        { field: 'cpf', header: 'CPF' },
        { field: 'dataNascimento', header: 'Data de Nascimento' },
    ];

    return (
        <div className="d-flex">
            <Toast ref={toast} />
            <div className="col-12 border-bottom-2 p-2">
                <h2>Pacientes</h2>
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
                    emptyMessage="Nenhum paciente encontrado."
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

            <Dialog visible={userDialog} style={{ width: '450px' }} header="Novo Paciente" modal className="p-fluid" footer={userDialogFooter} onHide={hideDialog}>
                {/* <div className="field">
                    <label htmlFor="name">Paciente</label>
                    <Dropdown id="name" optionLabel="name" value={pacientes.find(p => p.id === user.idUsuarioPaciente)} options={pacientes} onChange={(e) => onPacienteChange(e.value)} disabled={!pacientes.length} placeholder="Selecione um paciente" />
                </div> */}
                {/* <div className="field">
                    <label htmlFor="name">Paciente</label>
            <InputText id="name" value={user.nomePaciente} onChange={(e) => onPacienteChange(e.target.value)} placeholder="Digite o nome do paciente" />
                </div> */}
                <div className="field">
                    <label htmlFor="name">Paciente</label>
                    <InputTextarea id="name" name="name" value={user.name} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
                <div className="field">
                    <label htmlFor="cpf">CPF</label>
                    <InputTextarea id="cpf" name="cpf" value={user.cpf} onChange={onInputChange} required rows={1} cols={20} style={{ resize: 'none' }} />
                </div>
                <div className="field">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <span className="p-input-icon-right">
                        <Calendar showButtonBar value={user.dataNascimento} onChange={(e) => onCalendarChange(e.value as Date)} />
                        <i className="pi pi-calendar" />
                    </span>
                </div>
            </Dialog>

            <Dialog visible={deleteUserDialog} style={{ width: '450px' }} header="Confirmação" footer={deleteUserDialogFooter} modal onHide={hideDeleteUserDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', color: '#FF0000' }} />
                    {user && <span>Tem certeza de que deseja excluir?</span>}
                </div>
            </Dialog>
        </div>
    );
};

export default PacientesDemo;

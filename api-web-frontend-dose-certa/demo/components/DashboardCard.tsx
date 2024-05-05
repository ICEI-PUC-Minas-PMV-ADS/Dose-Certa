import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import axios from 'axios';

const DashboardCard = () => {
    const [patientCount, setPatientCount] = useState(0);

    useEffect(() => {
        async function fetchPatientCount() {
            try {
                const response = await axios.get('/api/users/patientCount');
                setPatientCount(response.data);
            } catch (error) {
                console.error('Erro ao buscar o número de pacientes:', error);
            }
        }

        fetchPatientCount();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
                <Card style={{ width: '364px', height: '127px', marginTop: '30px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <div style={{ marginRight: '15px' }}>
                            <i className="pi pi-user" style={{ fontSize: '3rem', color: '#66' }}></i>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Total de Pacientes</span>
                            <p style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'bold' }}>{patientCount}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default DashboardCard;

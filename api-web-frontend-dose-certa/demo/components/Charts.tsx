import { Chart } from "react-google-charts";
import DashboardCard from "./DashboardCard";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from 'axios';

const Charts = () => {
    const [remediosData, setRemediosData] = useState([]);
    const [medicacoesData, setMedicacoesData] = useState([]);
    const [visitasData, setVisitasData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const remediosResponse = await axios.get('http://localhost:5092/api/Remedio');
            setRemediosData(remediosResponse.data);

            const medicacoesResponse = await axios.get('http://localhost:5092/api/Medicacao');
            setMedicacoesData(medicacoesResponse.data);

            const visitasResponse = await axios.get('http://localhost:5092/api/Visita');
            setVisitasData(visitasResponse.data);

            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="col-12 border-bottom-2 p-2">
                <h2>Visão Geral</h2>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <DashboardCard />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                <div style={{ flex: 1 }}>
                    {loading ? (
                        <div style={{ textAlign: 'center' }}>Não há nada por aqui no momento...</div>
                    ) : (
                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height="400px"
                            data={[
                                ["Element", "Quantidade", { role: "style" }],
                                ["Rémedios Registrados", remediosData.length, "#0471DA"],
                                ["Medicações Registradas", medicacoesData.length, "#22B9C3"],
                                ["Visitas Agendadas", visitasData.length, "#76A6D4"],
                            ]}
                        />
                    )}
                </div>
                <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                    <h4 style={{ marginBottom: '30px' }}>Filtre por período</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                        <label htmlFor="startDate" style={{ marginBottom: '8px' }}>Data Inicial</label>
                        <Calendar id="startDate" placeholder="dd/mm/aaaa" style={{ marginRight: '10px' }}></Calendar>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                        <label htmlFor="endDate" style={{ marginBottom: '8px' }}>Data Final</label>
                        <Calendar id="endDate" placeholder="dd/mm/aaaa" style={{ marginRight: '10px' }}></Calendar>
                    </div>
                    <Button icon="pi pi-filter" label="Filtrar" className="p-button-success" style={{ backgroundColor: '#0C84F3', marginTop: '30px' }}></Button>
                </div>
            </div>
        </div>
    );
}

export default Charts;

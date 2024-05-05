import { Chart } from "react-google-charts";
import DashboardCard from "./DashboardCard";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

export const data = [
    ["Element", "Quantidade", { role: "style" }],
    ["Rémedios Registrados", 8, "#0471DA"], // RGB value
    ["Medicações Registradas", 30, "#22B9C3"], // English color name
    ["Visitas Agendadas", 19, "#76A6D4"],
];

const Charts = () => {
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
                    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
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

import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const DashboardCard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
                <Card style={{ width: '364px', height: '127px', marginTop: '20px', marginBottom: '20px' }}>
                    <p className="m-0">
                        <div style={{ justifyContent: "center" }}>
                            <i className="pi pi-user" style={{ fontSize: '3rem', color: '#66' }}></i>
                            <span>Total de Pacientes</span>
                            <p>35</p>
                        </div>
                    </p>
                </Card>
            </div>
            <div>
                <div className="p-inputgroup flex-1" style={{ marginBottom: '20px' }}>
                    <input type="date" id="dateInput" name="date" />
                </div>
                <div className="p-inputgroup flex-1" style={{ marginBottom: '20px' }}>
                    <input type="date" id="dateInput" name="date" />
                </div>
                <div>
                    <Button>Filtrar</Button>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;

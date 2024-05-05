
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const DashboardCard = () => {
    return (
        <div style={{ display: 'flex'}}>
            <div>
            <Card style={{ width: '364px', height: '127px', marginTop: '20px',marginBottom: '20px' }}>
                <p className="m-0">
                    <div style={{justifyItems:"center",}}>
                        <i className="pi pi-user" style={{ fontSize: '3rem', color: '#66' }}></i>
                        <span>Total de Pacientes</span>
                        <p>35</p>
                    </div>
                </p>
                </Card>
            </div>
            <div style={{ display:"grid", marginTop: "20px",  marginLeft:"20px" }}>
                <div className="p-inputgroup flex-1">
                <input type="date"id="dateInput" name="date" />
                </div>

                <div className="p-inputgroup flex-1">


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

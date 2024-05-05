import { Chart } from "react-google-charts"


export const data = [
    ["Element", "Quantidade", { role: "style" }],
    ["Rémedios Registrados", 8.94, "#0471DA"], // RGB value
    ["Medicações Registradas", 30, "#22B9C3"], // English color name
    ["Visitas Agendadas", 19.3, "#76A6D4"],

  ];

const Charts = () => {
    return (
        <>
        <div className="col-12 border-bottom-2 p-2">
                <h2>Visão Geral</h2>
        </div>

        <div>
             <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
        </>

)}


export default Charts

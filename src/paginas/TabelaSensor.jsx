import estilos from './TabelaSensor.module.css'
 
export function TabelaSensor(){
    return(
        <main className={estilos.body}>
            <div className={estilos.container}>
                <h2 className={estilos.h2}>Dados Coletados - Sensor 1</h2>
            <table className={estilos.tabela}>
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Unidade de medida</th>
                    <th>Localização</th>
                    <th>Contado do Responsavel</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Temperatura</td>
                    <td>°C</td>
                    <td>A111-Laboratório de Eletrônica</td>
                    <td>Maria</td>
                    <td>-22,9141396</td>
                    <td>-47,0681575</td>
                </tr>
                <tr>
                    <td>Temperatura</td>
                    <td>°C</td>
                    <td>A111-Laboratório de Eletrônica</td>
                    <td>Maria</td>
                    <td>-22,9141396</td>
                    <td>-47,0681575</td>
                </tr>
                <tr>
                    <td>Temperatura</td>
                    <td>°C</td>
                    <td>A111-Laboratório de Eletrônica</td>
                    <td>Maria</td>
                    <td>-22,9141396</td>
                    <td>-47,0681575</td>
                </tr>
                <tr>
                    <td>Temperatura</td>
                    <td>°C</td>
                    <td>A111-Laboratório de Eletrônica</td>
                    <td>Maria</td>
                    <td>-22,9141396</td>
                    <td>-47,0681575</td>
                </tr>
                </tbody>
            </table>
        </div>
        </main>
        
    )
}
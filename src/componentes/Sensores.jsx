import estilos from './Sensores.module.css'
import { Card } from './Card'
import { Link } from 'react-router-dom' 
import { CellTower } from '@phosphor-icons/react'

export function Sensores({propsSensor}){
    return(
        <Card>
            
            <div className={estilos.container}>
                <h3 className={estilos.identificador}>
                    {propsSensor.id}° Sensor
                    <CellTower size={28} />                    
                </h3>
                
                
                
                <div className={estilos.containerInfo}>
                    <p className={estilos.campo}>Tipo de Sensor: {propsSensor.tipo}</p>
                    <p className={estilos.campo}>Localização: {propsSensor.localizacao}</p>
                    <p className={estilos.campo}>Latitude: {propsSensor.latitude}</p>
                    <p className={estilos.campo}>Longitude: {propsSensor.longitude}</p>
                    <p className={estilos.campo}>Responsável: {propsSensor.responsavel}</p>
                </div>

        
                <Link 
                    className={estilos.botao}
                    to={`alterarSensor/${propsSensor.id}`}>
                        Alterar
                </Link>
                
                
            </div>
            
        </Card>
        
    )
}
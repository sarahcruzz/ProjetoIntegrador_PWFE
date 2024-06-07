import estilos from './Cabecalho.module.css'
import { CellSignalFull, WifiHigh} from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={estilos.container}>
            
            <p className={estilos.container}>Localizador</p>
            <WifiHigh
                eight='duotone'
                size={30}
                color='#fff'
            />
        </header>
    )
}
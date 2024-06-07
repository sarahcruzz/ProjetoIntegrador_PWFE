import estilos from './Lateral.module.css'
import { Link } from 'react-router-dom' 

export function Lateral(){
    return(
        <aside className={estilos.container}>

        <section>

                <Link 
                    className={estilos.botao}
                    to='/inicial'
                >
                    Sensores
                </Link>

                <Link 
                    className={estilos.botao}
                    to='cadastroSensores'
                >
                   Adicionar                   
                </Link>

                <Link
                    className={estilos.botao}
                    to='cadastroUsers'
                >
                    Cadastre 
                </Link>

                <Link
                    className={estilos.botao}
                    to='localizacao'
                >
                    Mapa 
                </Link>

                <Link
                    className={estilos.botao}
                    to='filtro'
                >
                    Filtro 
                </Link>


            </section>

        </aside>
    )
}

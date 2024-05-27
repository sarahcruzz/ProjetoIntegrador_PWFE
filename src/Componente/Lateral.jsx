import estilos from './Lateral.module.css'
import { Link } from 'react-router-dom'

export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
                <img 
                    className={estilos.imagemCabecalho} 
                    src='https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <div className={estilos.perfil}>
                    <img 
                        className={estilos.avatar}
                        src='https://avatars.githubusercontent.com/u/134559720?s=400&u=5c85090b094bd6f62753aa9eb2cf3272021f16de&v=4'
                    />
                    <p>Sarah</p>
                </div>
            </header>
            <section>
                <Link className={estilos.botao} to='/inicial'>
                    Filmes
                </Link>

                <Link className={estilos.botao} to='perfil'>
                    Perfil
                </Link>

                <Link className={estilos.botao} to='sobre'>
                    Sobre
                </Link>

            </section>

        </aside>
    )
}
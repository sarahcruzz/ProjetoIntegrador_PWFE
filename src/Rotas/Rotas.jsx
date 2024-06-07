import {Routes, Route} from 'react-router-dom'
import { Login } from '../paginas/Login'
import { Inicial } from '../paginas/Inicial'
import { ListaSensores } from '../paginas/ListaSensores'
import { CadastroSensores } from '../paginas/CadastroSensores'
import { Cadastro } from '../paginas/Cadastro'
import { TabelaSensor } from '../paginas/TabelaSensor'
import { Localizacao } from '../paginas/Localizacao'
import { Filtro } from '../paginas/Filtro'
import { AlterarSensor } from '../paginas/AlterarSensor'

export function Rotas(){
    return(
        <Routes>

            <Route path='/' element={<Login/>}/>

            <Route path='/inicial' element={<Inicial/>}>
                <Route index element={<ListaSensores/>}/>
                <Route path='cadastroSensores' element={<CadastroSensores/>}/>
                <Route path='cadastroUsers' element={<Cadastro/>}/>
                <Route path='infoSensor' element={<TabelaSensor/>}/>
                <Route path='localizacao' element={<Localizacao/>}/>
                <Route path='filtro' element={<Filtro/>}/>
                <Route path='alterarSensor/:id' element={<AlterarSensor/>}/>

            </Route>
            
            

        </Routes>
    )
}
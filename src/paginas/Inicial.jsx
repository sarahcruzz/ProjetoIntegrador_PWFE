import estilos from './Inicial.module.css'
import {Cabecalho} from '../Componente/Cabecalho' 
import {Lateral} from '../Componente/Lateral'
import { Outlet } from 'react-router-dom'


export function Inicial() {
  return (
    <div className={estilos.gridConteiner}>
      <Cabecalho />
      <Lateral />
      <Outlet />
    </div>
  )
}

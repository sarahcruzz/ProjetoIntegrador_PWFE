import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Paginas/Login";
import { Sensor } from '../Paginas/Sensor';
import { Inicial } from "../Paginas/Inicial";

export function Rotas(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="inicial" element={<Inicial/>}>
                <Route index element={<Sensor/>} />
                
            </Route>
        </Routes>

    )
}

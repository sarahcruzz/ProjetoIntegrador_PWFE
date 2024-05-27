import React from "react";
import axios from axios;
import estilos from './Login.module.css'
import { useform } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers'
import { useNavigate } from 'react-router-dom'

const schemaLogin = z.object({
    usuario:z.string()
        .min(5, "O mínimo é de 5 caracteres")
        .max(20, "O mínimo é de 5 caracteres"),
    
        senha:z.string()
            .min(8, "Informe 8 caracteres")
            .max(20, "Informe no máximo 20 caracteres"),

});

export function Login(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{ errors }} = useform({
        resolver: zodResolver(schemaLogin)
    });

    
    async function obterDadosFormulario(data){
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token', {
                username: data.usuario,
                password: data.senha
            })

            const { access, refresh} = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            
            console.log("Login bem sucedido");
            navigate('/inicial');

        }
        catch (error){
            console.log("Erro na autenticação")
        }
    }

    return(
        <div className={estilos.container}>
            <p className={estilos.titulo}>Login</p>
            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <input  
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="Usuário"
                />
                {errors.usuario && (
                    <p>{errors.usuario.message}</p>
                )}

                <input  
                    {...register('senha')}
                    type="password"
                    className={estilos.campo}
                    placeholder="Senha"
                />
                {errors.senha && (
                    <p>{errors.senha.message}</p>
                )}

                <button className={estilos.botao}>Entrar</button>
            </form>
        </div>
    );
}


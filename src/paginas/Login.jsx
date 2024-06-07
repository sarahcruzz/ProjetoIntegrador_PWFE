import { useState } from 'react'
import estilos from './Login.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const schemaLogin = z.object({

    usuario: z.string()
                .min(5, 'Por favor, insira pelo menos 5 caracteres')
                .max(100, "Por favor, insira até 100 caracteres"),

    senha: z.string()
                .min(6, 'Por favor, insira pelo menos 6 caracteres')
                .max(10, "Por favor, insira até 10 caracteres")
})

export function Login(){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaLogin)
    })

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    async function obterDadosFormulario(data){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: data.usuario,
                password: data.senha
            });
            const {access, refresh} = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log("Login bem Sucedido");
            navigate('inicial')   
        }catch(errors){
            console.log("Erro na autenticação ", errors);
        }
     
    }

    return(
        <div className={estilos.body}>
            <div className={estilos.container}>

                <form 
                    className={estilos.formulario}
                    onSubmit={handleSubmit(obterDadosFormulario)}
                >
                    <h1 className={estilos.titulo}>Login</h1>
                    

                    <label htmlFor="" className={estilos.label}
                    >Username</label>
                    <input
                        {...register('usuario')}
                        className={estilos.input}
                        placeholder=''
                        value={username}
                        onChange={e => setUsername(e.target.value)}                
                    />
                    {errors.username &&(
                        <p className={estilos.messageErro}>{errors.username.message}</p>
                    )}

                    <label htmlFor="" className={estilos.label} 
                    >Password</label>
                    <input
                        {...register('senha')}
                        className={estilos.input}
                        placeholder=''
                        value={password}
                        onChange={e => setPassword(e.target.message)}              
                    />
                    {errors.password &&(
                        <p className={estilos.messageErro}>{errors.password.message}</p>
                    )}

                    <button className={estilos.botao}>
                        Sign in
                    </button>

                </form>

            </div>
        </div>
    )

}
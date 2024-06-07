import { useState } from 'react'
import estilos from './Cadastro.module.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const schemaCadastro = z.object({

    email: z.string()
                .min(5, 'Por favor, insira pelo menos 5 caracteres')
                .max(100, "Por favor, insira até 100 caracteres"),

    username: z.string()
                .min(5, 'Por favor, insira pelo menos 5 caracteres')
                .max(100, "Por favor, insira até 100 caracteres"),

    password: z.string()
                .min(6, 'Por favor, insira pelo menos 6 caracteres')
                .max(10, "Por favor, insira até 100 caracteres")
});

export function Cadastro(){
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaCadastro)
    })

    const[email, setEmail] = useState('')
    const[username, setUsername] = useState('') 
    const[password, setPassword] = useState('')
    

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_user/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Sensor cadastrado com sucesso!');
            navigate('/inicial/cadastroUsers'); // Redireciona para a página inicial após o cadastro
        } catch (error) {
            console.error('Erro no cadastro de sensor', error);
        }
    }


    return(
        <div className={estilos.body}>
            <div className={estilos.container}>
                <form action="" 
                    className={estilos.formulario}
                    onSubmit={handleSubmit(obterDadosFormulario)}
                >
                    <h1 className={estilos.titulo}>Cadastre</h1>

                    <label className={estilos.label}>
                        E-mail
                    </label>
                    <input 
                        {...register('email')}
                        className={estilos.input}
                        placeholder=''
                        value={email}
                        onChange={e=> setEmail(e.target.value)}           
                    />
                    {errors.email && (
                        <p className={estilos.messageErro}>{errors.email.message}</p>
                    )}

                    
                    <label className={estilos.label}>
                        Usuário
                    </label>
                    <input
                        {...register('username')}
                        className={estilos.input}
                        placeholder='' 
                        value={username}
                        onChange={e => setUsername(e.target.value)}               
                    />
                    {errors.username && (
                        <p className={estilos.messageErro}>{errors.username.message}</p>
                    )}

                    
                    <label className={estilos.label}>
                        Senha
                    </label>
                    <input  
                        {...register('password')}
                        className={estilos.input}
                        placeholder=''
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p className={estilos.messageErro}>{errors.password.message}</p>
                    )}

                    <button className={estilos.botao} type="submit">
                        Entrar
                    </button>

                    <a href="/" className={estilos.link}>Voltar ao login</a>

                </form>
            </div> 
        </div>

    )
}

// tem que add um link para voltar por login e no login um para vir para essa tela 
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import estilos from './CadastroSensores.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TIPO_SENSOR_CHOICES = ['Temperatura', 'Contador', 'Luminosidade', 'Umidade'];
const UNIDADE_MEDIDA_CHOICES = ['°C', 'qtd', 'cd', '%'];

const schemaCadastroSensores = z.object({

    tipo: z.enum(TIPO_SENSOR_CHOICES, {
        required_error: 'Tipo é obrigatório',
    }),

    mac_address: z.string()
        .max(20, 'Mac Address deve ter no máximo 20 caracteres')
        .nullable()
        .optional(),

    latitude: z.string()
        .refine(val => !isNaN(parseFloat(val)), 'Latitude inválida'),

    longitude: z.string()
        .refine(val => !isNaN(parseFloat(val)), 'Longitude inválida'),

    localizacao: z.string()
        .max(100, 'Máximo de 100 caracteres')
        .min(3, 'Mínimo de 3 caracteres'),

    responsavel: z.string()
        .max(100, 'Máximo de 100 caracteres')
        .min(3, 'Mínimo de 3 caracteres'),

    unidade_medida: z.enum(UNIDADE_MEDIDA_CHOICES, {
        required_error: 'Unidade de Medida é obrigatória',
    }),

    status_operacional: z.boolean()
        .default(true),

    observacao: z.string()
        .optional(),
});

export function CadastroSensores() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }, // por aqui acessamos as mensagens de erro geradas no Schema
    
    } = useForm({
        resolver: zodResolver(schemaCadastroSensores),
    });

    const [tipo, setTipo] = useState('')
    const [mac_address, setMac_address] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [unidade_medida, setUnidade_medida] = useState('')
    const [status_operacional, setStatus_operacional] = useState('')
    const [observacao, setObservacao] = useState('')
    

    async function obterDadosFormulario(data) {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/sensores/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Sensor cadastrado com sucesso!');
            navigate('/inicial'); // Redireciona para a página inicial após o cadastro
        } catch (error) {
            console.error('Erro no cadastro de sensor', error);
        }
        console.log(data);
    }

    return (
        <div className={estilos.container}>

            <form
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                <p className={estilos.titulo}>Cadastro de Sensores</p>
            
                <div className={estilos.containerLinha}>
                    <div className={estilos.containerCampo}>
                    {errors.tipo && (
                    <p className={estilos.messageErro}>{errors.tipo.message}</p>
                    )}
                    <label>Tipo</label>
                        <select 
                            {...register('tipo')} 
                            className={estilos.campo}
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                        >
                            <option value="" className={estilos.option}>Selecione...</option>
                            {TIPO_SENSOR_CHOICES.map((tipo, i) => (
                                <option key={i} value={tipo} className={estilos.option}>
                                    {tipo}
                                </option>
                            ))}
                        </select>
                    </div>                
             
    
                    <div className={estilos.containerCampo}>
                    {errors.mac_address && (
                        <p className={estilos.messageErro}>{errors.mac_address.message}</p>
                    )}
                    <label>Mac Address</label>
                        <input
                            {...register('mac_address')}
                            className={estilos.campo}
                            placeholder="ex: 00:1B:44:11:3A:B7"
                            value={mac_address}
                            onChange={e => setMac_address(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className={estilos.containerLinha}>
                    <div className={estilos.containerCampo}>
                        {errors.latitude && (
                            <p className={estilos.messageErro}>{errors.latitude.message}</p>
                        )}  
                        <label>Latitude</label>
                            <input
                                {...register('latitude')}
                                className={estilos.campo}
                                placeholder="ex: 45.123456"
                                value={latitude}
                                onChange={e => setLatitude(e.target.value)}
                            />
                    </div>

            
                    <div className={estilos.containerCampo}>
                        {errors.longitude && (
                        <p className={estilos.messageErro}>{errors.longitude.message}</p>
                        )}
                        <label>Longitude</label>
                            <input
                                {...register('longitude')}
                                className={estilos.campo}
                                placeholder="ex: -123.456789"
                                value={longitude}
                                onChange={e=> setLongitude(e.target.value)}
                            />
                    </div>

                </div>
                
                

                <div className={estilos.containerLinha}>
                    <div className={estilos.containerCampo}>
                        {errors.localizacao && (
                            <p className={estilos.messageErro}>{errors.localizacao.message}</p>
                        )}
                        <label>Localização</label>
                            <input
                                {...register('localizacao')}
                                className={estilos.campo}
                                placeholder="ex: Entrada Refeitório"
                                value={localizacao}
                                onChange={e=> setLocalizacao(e.target.value)}
                            />
                    </div>

                    <div className={estilos.containerCampo}>
                        {errors.responsavel && (
                        <p className={estilos.messageErro}>{errors.responsavel.message}</p>
                        )}
                        <label>Responsável</label>
                            <input
                                {...register('responsavel')}
                                className={estilos.campo}
                                placeholder="ex: Ayrton Senna"
                                value={responsavel}
                                onChange={e=> setResponsavel(e.target.value)}
                            />
                    </div>

                </div>


                <div className={estilos.containerLinha}>
                    <div className={estilos.containerCampo}>
                    {errors.unidade_medida && (
                    <p className={estilos.messageErro}>{errors.unidade_medida.message}</p>
                    )}
                    <label>Unidade de Medida</label>
                        <select 
                            {...register('unidade_medida')} 
                            className={estilos.campo}
                            value={unidade_medida}
                            onChange={e=> setUnidade_medida(e.target.value)}
                        >
                            <option value="" className={estilos.option}>Selecione...</option>
                            {UNIDADE_MEDIDA_CHOICES.map((tipo, i) => (
                                <option key={i} value={tipo} className={estilos.option}>
                                    {tipo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={estilos.containerCampo}>
                        {errors.status_operacional && (
                        <p className={estilos.messageErro}>{errors.status_operacional.message}</p>
                        )}
                        <label>Status Operacional</label>
                            <input
                                type="checkbox"
                                {...register('status_operacional')}
                                className={estilos.checkbox}
                                value={status_operacional}
                                onChange={e=> setStatus_operacional(e.target.value)}
                            />
                    </div>
                </div>


                {errors.observacao &&(
                    <p className={estilos.messageErro}>{errors.observacao.message}</p>
                )}
                <label>Observação</label>
                <textarea
                    {...register('observacao')}
                    className={estilos.campo}
                    placeholder="Insira sua observação..."
                    value={observacao}
                    onChange={e=> setObservacao(e.target.value)}
                />
                <div className={estilos.containerButton}>
                    <button className={estilos.botao} type="submit">
                        Enviar
                    </button>
                </div>
                
            </form>
        </div>
    );
}

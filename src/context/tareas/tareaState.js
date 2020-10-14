import React ,{ useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios'

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const inicialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaactual:null
    }

    // crear dispatch y state
    const [state, dispatch] =  useReducer(TareaReducer, inicialState);

    //crear las funciones

    //obtener las tareas de un proyecto

    const  obtenerTareas = async proyecto => {
        
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: { proyecto }});
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            });
        } catch (error) {
            console.log(error.response);
        }
    }

    //agregar una tarea al proyecto seleccionado
    const  agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    //valida y muestra un error en caso que sea necesario
    const  validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar las tarea de un proyecto por su id

    const  eliminarTarea = async (id, proyecto) => {
        
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: { proyecto }});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    //actualizar tarea
    const  actializarTarea = async tarea => {
        
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    //Extrae una tarea para edicion
    const  guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    

    //elimina la tarea selecionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }


    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaactual: state.tareaactual,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actializarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;
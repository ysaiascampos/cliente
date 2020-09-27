import React ,{ useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {v4 as uuid} from 'uuid';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const inicialState = {
        tareas: [
            {id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            {id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
            {id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 3},
            {id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 4},
            {id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            {id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaactual:null
    }

    // crear dispatch y state
    const [state, dispatch] =  useReducer(TareaReducer, inicialState);

    //crear las funciones

    //obtener las tareas de un proyecto

    const  obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //agregar una tarea al proyecto seleccionado
    const  agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra un error en caso que sea necesario
    const  validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar las tarea de un proyecto por su id

    const  eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    //Cambia el estado de una tarea de un proyecto por su id

    const  cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edicion
    const  guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //actualizar tarea
    const  actializarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
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
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaactual: state.tareaactual,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
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
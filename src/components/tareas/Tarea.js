import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tareaContext';
const Tarea = ({tarea}) => {

    //obtener tareas proyecto
    const tareaContext  = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea } = tareaContext;


    const onClickEliminarTarea = tarea => {
        let proyectoId = tarea.proyectoId;
        eliminarTarea(tarea.id);
        obtenerTareas(proyectoId);
    }
    const  onClickCambiarEstadoTarea = tarea => {
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea);
    }
    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                    ? (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => onClickCambiarEstadoTarea(tarea)}
                        >Completo</button>
                    )
                    :(
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => onClickCambiarEstadoTarea(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => onClickEliminarTarea(tarea)}
                >Eliminar</button>
            </div>
        </li>
      );
}
 
export default Tarea;
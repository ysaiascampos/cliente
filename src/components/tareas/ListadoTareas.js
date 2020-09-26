import React, { Fragment, useContext } from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {
    //obtener el state del formulario
    const proyectoContext  = useContext(ProyectoContext);

    const { proyecto, eliminarProyecto } = proyectoContext;

    //obtener tareas proyecto
    const tareaContext  = useContext(TareaContext);
    const { tareasproyecto } = tareaContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para estraer el proyecto actual

    const [proyectoActual] = proyecto;

    //eliminar un proyecto 
    const onClickEliminar= () => {
        eliminarProyecto(proyectoActual.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>  
            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0 ? 
                    (<li className="tarea"><p>No hay Tareas</p></li>)
                    :<TransitionGroup>
                        {tareasproyecto.map(tarea =>(
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea tarea={tarea} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    
                    
                }

            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;
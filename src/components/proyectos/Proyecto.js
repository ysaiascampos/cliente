import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
const Proyecto = ({proyecto}) => {
        //obtener el state del formulario
        const proyectoContext  = useContext(ProyectoContext);
        const { proyectoActual } = proyectoContext;

        const tareaContext  = useContext(TareaContext);
        const { obtenerTareas } = tareaContext;

    //Funcion para agregar el proyecto actual

    const seleccionarProyecto = id => {
        proyectoActual(id);
        obtenerTareas(id);
    }
    
    return (
        <li>
            <button
                type="button"
                className="btn btn-blanck"
                onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;
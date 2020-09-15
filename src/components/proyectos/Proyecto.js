import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
const Proyecto = ({proyecto}) => {
        //obtener el state del formulario
        const proyectoContext  = useContext(ProyectoContext);

        const { proyectoActual } = proyectoContext;

    
    return (
        <li>
            <button
                type="button"
                className="btn btn-blanck"
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;
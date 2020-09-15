import React, { Fragment, useContext } from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import Tarea from './Tarea';
const ListadoTareas = () => {
    //obtener el state del formulario
    const proyectoContext  = useContext(ProyectoContext);

    const { proyecto } = proyectoContext;
    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para estraer el proyecto actual

    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataformas de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true},
    ]
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>  
            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0 ? 
                    (<li className="tarea"><p>No hay Tareas</p></li>)
                    :tareasProyecto.map(tarea =>(
                       <Tarea key={tarea.nombre} tarea={tarea} /> 
                    ))
                }

            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;
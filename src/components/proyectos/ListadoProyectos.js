import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import ProyectoContext from '../../context/proyecto/proyectoContext';
const ListadoProyectos = () => {

    //extraer proyecto de state inicial
    const proyectoContext  = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;
    
    useEffect(() => {
        obtenerProyectos();
    }, []);

    //revisar si existen proyectos
    if(proyectos.length === 0) return null;

    

    return ( 
        <ul className="listado-proyecto">
            {
                proyectos.map(proyecto => (
                    <Proyecto key={proyecto.id} proyecto={proyecto}/>
                ))
            }
            
        </ul>
     );
}
 
export default ListadoProyectos;
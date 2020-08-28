import React from 'react';
import Proyecto from './Proyecto'
const ListadoProyectos = () => {
    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio Web'}
    ]
    return ( 
        <ul className="listado-proyecto">
            {
                proyectos.map(proyecto => (
                    <Proyecto key={proyecto.nombre} proyecto={proyecto}/>
                ))
            }
            
        </ul>
     );
}
 
export default ListadoProyectos;
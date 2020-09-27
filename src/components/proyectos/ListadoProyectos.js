import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ListadoProyectos = () => {

    //extraer proyecto de state inicial
    const proyectoContext  = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;
    
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    //revisar si existen proyectos
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    

    return ( 
        <ul className="listado-proyecto">
            <TransitionGroup>
                {proyectos.map(proyecto =>(
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto key={proyecto.id} proyecto={proyecto}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ListadoProyectos = () => {

    //extraer proyecto de state inicial
    const proyectoContext  = useContext(ProyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectoContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;
    
    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    //revisar si existen proyectos
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    

    return ( 
        <ul className="listado-proyecto">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <TransitionGroup>
                {proyectos.map(proyecto =>(
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto key={proyecto._id} proyecto={proyecto}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
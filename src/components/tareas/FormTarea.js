import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
const FormTarea = () => {
    //obtener el state del formulario
    const proyectoContext  = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    const tareaContext  = useContext(TareaContext);
    const { tareaactual, errortarea, agregarTarea, validarTarea, obtenerTareas, actializarTarea, limpiarTarea } = tareaContext;

    //Effect que detecta si hay un atarea selecionada
    useEffect(() => {
        if(tareaactual !== null){
            setTarea(tareaactual);
        }else{
            setTarea({nombre:''});
        }
    }, [tareaactual])

    const [tarea, setTarea] = useState({nombre:''});

    const { nombre } = tarea;

    //si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para estraer el proyecto actual
    const [proyectoActual] = proyecto;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }
    

    const onSubmit = e => {
        e.preventDefault();
        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //pasar la validacion

        //Editar o agreagar la nueva tarea al state de tareas
        if(tareaactual !== null){
            actializarTarea(tarea);
            limpiarTarea();
        }else{
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }

        //obtener tareas y filtra las tareas
        obtenerTareas(proyectoActual._id);


        //reiniciar el form
        setTarea({nombre:''});

    }
    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea ..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaactual? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
     );
}
 
export default FormTarea;
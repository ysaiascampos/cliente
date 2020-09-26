import React, { useContext, useState } from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
const FormTarea = () => {
    //obtener el state del formulario
    const proyectoContext  = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    const tareaContext  = useContext(TareaContext);
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareaContext;

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

        //agreagar la nueva tarea al state de tareas
        tarea.estado = false;
        tarea.proyectoId = proyectoActual.id;
        agregarTarea(tarea);

        //obtener tareas y filtra las tareas
        obtenerTareas(proyectoActual.id);


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
                        value="Agregar Tarea"
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
     );
}
 
export default FormTarea;
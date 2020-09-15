import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
const FormTarea = () => {
    //obtener el state del formulario
    const proyectoContext  = useContext(ProyectoContext);

    const { proyecto } = proyectoContext;
    //si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para estraer el proyecto actual
    const [proyectoActual] = proyecto;
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea ..."
                        name="nombre"
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
        </div>
     );
}
 
export default FormTarea;
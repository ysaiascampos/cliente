import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyecto/proyectoContext';
const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectoContext  = useContext(ProyectoContext);

    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectoContext;

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitProyecto = e => {
        e.preventDefault();
        //validar
        if(nombre === ''){
            mostrarError(true);
            return;
        }

        //agregar en el state
        agregarProyecto(proyecto);

        //reiniciar el form
        setProyecto({
            nombre:''
        });

    }
    const onClickFormulario = () => {
        mostrarFormulario();
    }
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-primario btn-block" 
                onClick={onClickFormulario}
            >Nuevo Proyecto</button> 
            {
                formulario
                ? (
                    <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={onChangeProyecto}
                    value={nombre}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form> 
                )
                :null
            }
            {errorformulario ? <p className="mensaje error">El nombre del proyecto es Obligatorio</p>:null}
        </Fragment>
        
    );
}
 
export default NuevoProyecto;
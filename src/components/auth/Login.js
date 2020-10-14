import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = props => {

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);

    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);

    const {mensaje, autenticado, iniciarSesion } = authContext;

    //En caso de que el password o usuario no existe
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        //validar
        if( email.trim() === '' || 
            password.trim() === '') {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        // Pasarlo al Action
        iniciarSesion({
            email,
            password
        });

    }
    return ( 
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Inicia Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;
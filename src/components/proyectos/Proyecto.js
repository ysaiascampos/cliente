import React from 'react';
const Proyecto = ({proyecto}) => {
    return (
        <li>
            <button
                type="button"
                className="btn btn-blanck"
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;
import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({cita, eliminarCita}) => ( 
    <div className="col-9 my-2 py-1 px-2 bg-light rounded ">
        <p className="mt-1 mb-0 p-0 text-secondary">Mascota: <strong className="text-dark">{cita.mascota}</strong> </p>
        <p className="mt-1 mb-0 p-0 text-secondary">Dueño: <strong className="text-dark">{cita.propietario}</strong> </p>
        <p className="mt-1 mb-0 p-0 text-secondary">Fecha: <strong className="text-dark">{cita.fecha}</strong> </p>
        <p className="mt-1 mb-0 p-0 text-secondary">Hora: <strong className="text-dark">{cita.hora}</strong> </p>
        <p className="mt-1 mb-0 p-0 text-secondary">Sintomas: <strong className="text-dark">{cita.sintomas}</strong> </p>

        <button
            className="btn btn-warning m-1 p-1"
            onClick={ () => eliminarCita(cita.id)  }
        >Eliminar &times;</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;
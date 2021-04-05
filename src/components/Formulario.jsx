import React, { Fragment, useState } from 'react';
import uuid from '../../node_modules/uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // useState para cita individual
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [ error, actualizarError ] = useState(false)

    // Actualizar cuando se escribe en los input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    // Hacer destructuring del objeto cita
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Evento click para el boton agendar
    const submitCita = e => {
        e.preventDefault();

        // Validar los datos
        if(mascota.trim() === '' || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje anterior
        actualizarError(false);

        // Asignar ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <section className="col-12 col-md-6 p-2 pb-4">

                <form
                    className="row d-flex justify-content-center"
                    onSubmit={submitCita}
                >
                    <h2 className="col-9 my-3 p-0">Agenda tu cita</h2>

                    <label htmlFor="mascota" className="col-9 p-0 text-secondary"><strong>Nombre de la mascota</strong></label>
                    {error && mascota.trim() === ''? 
                    (<p className="col-9 m-0 p-0 text-danger"><small>Debes completar este campo</small></p>)
                    : 
                    null}
                    <input 
                        type="text"
                        name="mascota"
                        className="col-9 m-1 mb-3 p-1 rounded bg-light"
                        placeholder="Nombre de la mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />

                    <label htmlFor="propietario" className="col-9 p-0 text-secondary"><strong>Nombre del propietario</strong></label>
                    {error && propietario.trim() === ''? 
                    (<p className="col-9 m-0 p-0 text-danger"><small>Debes completar este campo</small></p>)
                    : 
                    null}
                    <input 
                        type="text"
                        name="propietario"
                        className="col-9 m-1 mb-3 p-1 rounded bg-light"
                        placeholder="Tu nombre"
                        onChange={actualizarState}
                        value={propietario}
                    />

                    <label htmlFor="fecha" className="col-9 p-0 text-secondary"><strong>Fecha de la cita</strong></label>
                    {error && fecha.trim() === ''? 
                    (<p className="col-9 m-0 p-0 text-danger"><small>Debes completar este campo</small></p>)
                    : 
                    null}
                    <input 
                        type="date"
                        name="fecha"
                        className="col-9 m-1 mb-3 p-1 rounded bg-light"
                        onChange={actualizarState}
                        value={fecha}
                    />

                    <label htmlFor="hora" className="col-9 p-0 text-secondary"><strong>Hora de la cita</strong></label>
                    {error && hora.trim() === ''? 
                    (<p className="col-9 m-0 p-0 text-danger"><small>Debes completar este campo</small></p>)
                    : 
                    null}
                    <input 
                        type="time"
                        name="hora"
                        className="col-9 m-1 mb-3 p-1 rounded bg-light"
                        onChange={actualizarState}
                        value={hora}
                    />

                    <label htmlFor="sintomas" className="col-9 p-0 text-secondary"><strong>Síntomas</strong></label>
                    {error && sintomas.trim() === ''? 
                    (<p className="col-9 m-0 p-0 text-danger"><small>Debes completar este campo</small></p>)
                    : 
                    null}
                    <textarea
                        className="col-9 m-1 mb-3 p-1 rounded bg-light"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>

                    <button
                        type="submit"
                        className="btn btn-primary col-9 m-1 mb-3 p-1"
                    >Agendar</button>
                </form>
            </section>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;
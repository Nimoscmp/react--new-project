import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Guardar citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // useState para array de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para guardar en el local storage
  useEffect( () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas))
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
  }, [citas] );

  // Crear citas y actualizar
  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
  }

  // Eliminar citas
  const eliminarCita = id => {
     const nuevasCitas = citas.filter(cita => cita.id !== id );
     guardarCitas(nuevasCitas);
  }

  // Título condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Ver tus Citas';

  return (
    <Fragment>
      <div className="App">

        <header className="row bg-dark d-flex justify-content-center">
          <h1 className="col-auto m-3 p-3 text-light text-center">Administrador de pacientes</h1>
        </header>

        <main className="row">
          <Formulario 
            crearCita={crearCita}
          />

          <aside className="col-12 col-md-6 p-2 pb-4">
            <div className="row d-flex justify-content-center">
              <h2 className="col-9 my-3 p-0 text-light">{titulo}</h2>
                {citas.map(cita => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))}
            </div>
          </aside>
        </main>
      </div>
    </Fragment>
  );
}

export default App;

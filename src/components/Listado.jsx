import Alerts from "./Alerts";
import Paciente from "./Paciente";

const Listado = ({pacientes, setPacienteTarget, eliminarCita }) => {
  return (
    <div className="mb-10 md:w-1/2 lg:w-3/5">

      { pacientes && pacientes.length ? (
        <>
          <div className="mb-10 text-center">
            <h2 className="font-bold text-3xl mb-3">
              Listado pacientes
            </h2>
            <p className="text-lg">Administra tus <span className="font-bold text-indigo-700">pacientes y citas</span></p>
          </div>

          <div className="md:h-screen md:overflow-y-scroll">
           {pacientes.map( pacienteObj => <Paciente 
              pacienteObj={pacienteObj}
              setPacienteTarget = { setPacienteTarget } 
              key={pacienteObj.id}
              eliminarCita = { eliminarCita }
              />) }
          </div>
        </>
      ) : (
        <>
          <div className="mb-10 text-center">
            <h2 className="font-bold text-3xl mb-3">
              No hay pacientes
            </h2>
            <p className="text-lg">Comienza agregando pacientes <span className="font-bold text-indigo-700">y se mostrarán en este lugar</span></p>
          </div>
        </>
      )}

    </div>
  )
}

export default Listado;
import { useState, useEffect } from 'react';
import Alerts from './Alerts';

const Formulario = ({pacientes, setPacientes, pacienteTarget, setPacienteTarget}) => {

  // Estados de los campos del formulario
  const [ mascota, setMascota ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {

    if ( Object.keys( pacienteTarget).length ) {

      const { mascota, propietario, email, fecha, sintomas} = pacienteTarget;

      setMascota( mascota );
      setPropietario( propietario );
      setEmail( email );
      setFecha( fecha );
      setSintomas( sintomas );

    }    

  }, [ pacienteTarget ]);


  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }


  const handleSubmit = e => {

    e.preventDefault();

    if ( [mascota, propietario, email, fecha, sintomas].includes('') ) {
      setError(true);
      return;
    }

    setError(false);

    const objPaciente = {
      mascota,
      propietario,
      email,
      fecha, 
      sintomas
    }

    if ( pacienteTarget.id ) {

      objPaciente.id = pacienteTarget.id;

      const pacientesActualizados = pacientes.map( paciente => paciente.id === pacienteTarget.id ? objPaciente : paciente);

      setPacientes( pacientesActualizados );

      setPacienteTarget({});

    } else {
      // Cuando se agrega un nuevo
      objPaciente.id = generateId();
      setPacientes([...pacientes, objPaciente]);
    }


    setMascota('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="mb-20 md:w-1/2 lg:w-2/5">

      <div className="mb-10 text-center">
        <h2 className="font-bold text-3xl mb-3">
          Seguimiento pacientes
        </h2>
        <p className="text-lg">Añade pacientes y <span className="font-bold text-indigo-700">administralos</span></p>
      </div>

      <form
        onSubmit={ handleSubmit }
        className="bg-white shadow-md rounded-md px-5 py-10"
      >

        { 
          error && <Alerts mensaje={'Todos los campos son obligatorios'} tipo={'error'} />
        }

        <div className="mb-5">
          <label
            className="block mb-3 uppercase font-bold tracking-wide"
            htmlFor="mascota">Mascota</label>
          <input
            value={mascota}
            onChange={ e => setMascota( e.target.value ) } 
            className="border w-full p-3 rounded-md placeholder:text-gray-500"
            type="text" 
            id="mascota" 
            placeholder="Nombre de la mascota" />
        </div>
        <div className="mb-5">
        <label 
            className="block mb-3 uppercase font-bold tracking-wide"
            htmlFor="propietario">Propietario</label>
          <input 
            value={propietario}
            onChange={ e => setPropietario( e.target.value ) }
            className="border w-full p-3 rounded-md placeholder:text-gray-500"
            type="text" 
            id="propietario" 
            placeholder="Nombre del propietario" />
        </div>
        <div className="mb-5">
        <label 
            className="block mb-3 uppercase font-bold tracking-wide"
            htmlFor="email">Email</label>
          <input 
            value={email}
            onChange={ e => setEmail( e.target.value ) }
            className="border w-full p-3 rounded-md placeholder:text-gray-500"
            type="text" 
            id="email" 
            placeholder="correo@ejemplo.com" />
        </div>
        <div className="mb-5">
        <label 
            className="block mb-3 uppercase font-bold tracking-wide"
            htmlFor="alta">Fecha de alta</label>
          <input
            value={fecha}
            onChange={ e => setFecha( e.target.value ) } 
            className="border w-full p-3 rounded-md placeholder:text-gray-500"
            type="date" 
            id="alta" 
          />
        </div>
        <div className="mb-5">
        <label 
            className="block mb-3 uppercase font-bold tracking-wide"
            htmlFor="sintomas">Sintomas</label>
          <textarea
            value={sintomas}
            onChange={ e => setSintomas( e.target.value ) } 
            id="sintomas"
            className="border w-full p-3 rounded-md placeholder:text-gray-500 h-50"
            placeholder="Describe los síntomas"
          />
        </div>

        <input 
          className="bg-indigo-600 text-white w-full p-3 uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all"
          type="submit" 
          value={ pacienteTarget.id ? 'Editar paciente': 'Agregar paciente'}
          />
      </form>

    </div>
  )
};

export default Formulario
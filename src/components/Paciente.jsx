const Paciente = ({pacienteObj, setPacienteTarget, eliminarCita }) => {

  const {mascota, propietario, email, fecha, sintomas, id} = pacienteObj;

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar esta cita?');
    if ( respuesta ) {
      eliminarCita( id );
    }
  }

  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-10 md:mx-3">
      
      <div className="flex justify-end">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAWhJREFUaEPtmUFSwzAMRb86HCQcghBWUOAg5SS0J4GDtEx2mF6ivkgJE6BQmNpWai9E+FnLiv5/suNRBCN9ZKS68H+FXTXP1Qkmsw5ymUnXb7FdtO7CZ+ZRLU8Su2nWGwCVKls6yK9cfZoOy4+ICrtu1jMBHvJf851BINOlO2tL5jyUKyrstnmZd5D7kkUIusXSnc9L5qSwnQMkNqCv2IoDzOIe4x47ol24x44wbX8JP9CZBn4tZytmOslWzDSQrVjOwEgmXoIH2MxTcYBZvATzEvzhgBfI3Su6SoB+PhKdaP2VPdauXD3dEd6bQQYHQNaFvVMKjdE+x3YH6VkW9oNS6PAK0bMoLEopJPA3PWvCVJQ09EwI692eQHypkXSfrxf/5OrHzO9vcnnyp0Qyg9EACjMKJlgWiZGYEQfYikZAqMsgMbVVRgJJzAgIdRkkprbKSCCJGQGhLoPE1FYZCSQxIyDUZYyW2Bsg1vQ3qiz2ZQAAAABJRU5ErkJggg=="/>
      </div>

      <p className="font-bold text-lg mb-2">Mascota: {''}<span className="font-normal">{mascota}</span></p>

      <p className="font-bold text-lg mb-2">Propietario: {''}<span className="font-normal">{propietario}</span></p>

      <p className="font-bold text-lg mb-2">Email: {''}<span className="font-normal">{email}</span></p>

      <p className="font-bold text-lg mb-2">Fecha de alta: {''}<span className="font-normal">{fecha}</span></p>

      <p className="font-bold text-lg mb-2">Sintomas: {''}<span className="font-normal">{sintomas}</span></p>

      <div className="flex gap-5 mt-10">
        <button 
          onClick={ () => setPacienteTarget( pacienteObj ) }
          className="bg-indigo-600 p-3 text-white font-bold rounded-md text-lg w-32 hover:bg-indigo-700"
          type="button">
          Editar
        </button>
        <button
          onClick={ handleEliminar }
          className="bg-red-600 p-3 text-white font-bold rounded-md text-lg w-32 hover:bg-red-700 transition-all"
          type="button"  
        >
          Eliminar
        </button>
      </div>

    </div>
  )
}

export default Paciente
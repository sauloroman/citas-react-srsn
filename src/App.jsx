import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from './components/Formulario';
import Listado from "./components/Listado";
import Footer from './components/Footer';

const App = () => {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
  const [ pacienteTarget, setPacienteTarget ] = useState({});

  // Para eliminar cita
  const eliminarCita = id => {
    const pacientesRestantes = pacientes.filter( paciente => paciente.id !== id );
    setPacientes( pacientesRestantes );
  }

  // Se pueden tener múltiples use Effect en un mismo componente.
  // Se ejecutan uno después de otro según estén en el código 
  // Para agregar al localStorage
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes]);


  return (
    <div className="pt-20 px-5">
      
      <div className='container mx-auto'>
        <Header />
      </div>

      <div className="container mx-auto px-3 md:flex md:gap-10">
        <Formulario 
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          pacienteTarget = { pacienteTarget }
          setPacienteTarget = { setPacienteTarget }
        />
        <Listado 
          pacientes = { pacientes }
          setPacienteTarget = { setPacienteTarget }
          eliminarCita = { eliminarCita }
        />
      </div>

      <Footer />

    </div>
  );
}

export default App;
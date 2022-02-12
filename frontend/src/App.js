import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import AddCita from './Components/AddCita';
import Cita from './Components/Cita';
import Pacientes from './Components/Pacientes';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Pacientes/>} /> 
        <Route exact path='/nuevo' element={<AddCita/>} /> 
        <Route exact path='/Cita/:id' element={<Cita/>} /> 
      </Routes>
    </Router>
  );
}

export default App;

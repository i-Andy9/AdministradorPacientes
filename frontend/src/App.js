import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom' 
import AddCita from './Components/AddCita';
import Cita from './Components/Cita';
import Pacientes from './Components/Pacientes';
import clientAxios from './Config/Axios';

function App() {
  
  //state
  const [listCitas, setListCitas] = useState([])
  const [op,setOp]=useState(true) 
  
  useEffect(() => { 
    if(op){
      const consultarAPI =()=>{ 
        clientAxios.get('/pacientes') 
          .then(respuesta => {
            setListCitas(respuesta.data)
            setOp(false)
          }) 
          .catch(error=>{
            console.log(error);
          })
      }
      consultarAPI();
    }
  }, [op])
 
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={()=><Pacientes arrCitas={listCitas}/>} /> 
        <Route exact path='/nuevo' component={()=><AddCita setOp={setOp}/>} /> 
        <Route exact path='/Cita/:id' render={(props)=>{
            const cita = listCitas.filter(c=>c._id === props.match.params.id)
            console.log(cita);
            return(
              <Cita cita={cita}/>
            )
        }}
         /> 
      </Switch>
    </Router>
  );
}

export default App;

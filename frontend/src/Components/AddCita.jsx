import React, { Fragment, useState } from 'react'
import { Link,  withRouter  } from 'react-router-dom'  
import clientAxios from '../Config/Axios'

const AddCita = (props) => {
      
  const [cita,setCita]= useState({
    nombre:'',
    propietario:'',    
    Telefono:'',
    fecha:'',
    hora:'',
    sintomas:''
  }) 
  //function to read dates of form
  const upgradeCita=(e)=>{
           
      const {id,value}= e.target
      switch(id){
        case'nombre':
        setCita({...cita, nombre: value})
          break;
        case'propietario':
        setCita({...cita, propietario: value})
          break;
        case'Telefono':
        setCita({...cita, Telefono: value})
          break;
        case'fecha':
        setCita( {...cita, fecha: value})
          break;
        case'hora':
        setCita( {...cita, hora: value})
          break;
        case'sintomas':
        setCita( {...cita, sintomas: value})
          break;

          default: 
          setCita({...cita})
        }
        console.log(cita)
  }

  const validationCita=()=>{
    if(
      cita.nombre.trim() ==='' ||
      cita.nombre.trim() ===undefined ||
      cita.fecha=== undefined|| 
      cita.propietario.trim()=== undefined||
      cita.propietario.trim()=== ''||
      cita.Telefono=== undefined||
      cita.sintomas.trim()===undefined||
      cita.hora===undefined|| 
      cita.hora===''|| 
      cita.sintomas===''
    ){
      return true
    }
    return false 
  }

  const clearInputs=()=>{
    setCita({nombre:'',
    propietario:'',    
    Telefono:'',
    fecha:'',
    hora:'',
    sintomas:''})
  }

  const createNewCita =()=>{
    console.log(cita)
      clientAxios.post('/pacientes', cita)
        .then(resp=>{
          console.log(resp);
          props.setOp(true);
          //redireccionar 
          props.history.push('/')
        })
        .catch(error=>{
          console.log(error)
        })
        clearInputs();

  }


  return (
    <Fragment>
        <h1 className="my-5">Crear nueva cita</h1>

        <div className='container mt-5 py-5'>
          <div className="row">
            <div className="col-12 mb-5 d-flex justify-content-start">
                <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weigth-bolt">Volver</Link>
            </div>

            <div className="col-md-6 mx-auto"> 
              <div className=" bg-white p-5 bordered">
                <div className="form-gruop">
                  <label htmlFor="nombre">Nombre mascota</label>
                  <input 
                  type="text"
                  className='form-control form-control-lg'
                  id='nombre'
                  name='nombre'
                  onChange={upgradeCita}
                  placeholder='Nombre Mascota'
                  value={cita.nombre}
                  />
                </div>
                <div className="form-gruop">
                  <label htmlFor="nombre">Nombre Propietario</label>
                  <input 
                  type="text"
                  className='form-control form-control-lg'
                  id='propietario'
                  name='propietario'
                  placeholder='Nombre Propietario'
                  onChange={upgradeCita}
                  value={cita.propietario}
                  />
                </div>
                <div className="form-gruop">
                  <label htmlFor="Telefono">Telefono</label>
                  <input 
                  type="number"
                  className='form-control form-control-lg'
                  id='Telefono'
                  name='Telefono'
                  placeholder='Telefono'
                  onChange={upgradeCita}
                  value={cita.Telefono}
                  />
                </div>
                <div className="form-gruop">
                  <label htmlFor="nombre">Fecha Alta</label>
                  <input 
                  type="date"
                  className='form-control form-control-lg'
                  id='fecha'
                  name='fecha' 
                  onChange={upgradeCita}
                  value={cita.fecha}
                  />
                </div>
                <div className="form-gruop">
                  <label htmlFor="nombre">Hora Alta</label>
                  <input 
                  type="time"
                  className='form-control form-control-lg'
                  id='hora'
                  name='hora' 
                  onChange={upgradeCita}
                  value={cita.hora}
                  />
                </div>
                <div className="form-gruop">
                  <label htmlFor="nombre">Sintomas</label>
                  <textarea 
                  type="text"
                  className='form-control form-control-lg'
                  id='sintomas'
                  name='sintomas'
                  placeholder='Sintomas'
                  onChange={upgradeCita}
                  value={cita.sintomas}
                  />
                </div>

                <button   onClick={createNewCita} disabled={validationCita()} className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value='Crear Cita'>Añadir Cita</button>
              </div> 
            </div>
          </div>
        </div>

    </Fragment>
  )
}

  export default withRouter(AddCita)
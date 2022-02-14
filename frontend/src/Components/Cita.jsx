import React, { Fragment } from 'react'
import { Link, withRouter  } from 'react-router-dom'

const Cita = (props) => {
 
  const {cita }=props
  console.log(props)
  console.log(cita.nombre) 

  if(!props.cita){
    props.history.push('/')
  }

  return (
    <Fragment>
      <h1 className='my-5'>Nombre Cita: {props.cita.nombre}</h1> 
    
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text uppercase py-2 px-5 font-weight-bold">
              Volver
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                    <h3 className="mb-3">{props.cita.nombre}</h3>
                    <small className="fecha-alta">{props.cita.fecha} a las  {props.cita.hora}</small>
                  </div>
                  <h4 className="mb-0">{props.cita.sintomas}</h4>
                  <div className="contacto py-3">
                    <p>Dueño: {props.cita.propietario}</p>
                    <p>telefono: {props.cita.telefono}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(Cita)
import React, { Fragment } from 'react' 
import { Link,} from 'react-router-dom'

const Pacientes = ({arrCitas}) => {
 
  if(arrCitas.length ===0) return null

  return (
    <Fragment>
      
        <h1 className='my-5'>Pacientes</h1>
        
        <div className='container mt-5 py-5'>
          <div className="row">
            <div className="col-12 mb-5 d-flex justify-content-center">
                <Link to={'/nuevo'} className="btn btn-success text-uppercase py-2 px-5 font-weigth-bolt">Crear Cita</Link>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="list-group">
                {arrCitas.map( c=> (
                    <Link to={`/cita/${c._id}`} key={c._id} className="p-5 list-group-item list-group-item-action felx-column align-items-start">
                      <div className="d-flex w-100 justify-content-between mb-4">
                        <h3 className="mb-3">{c.nombre}</h3>
                        <small className="fecha-alta">{c.fecha} a las  {c.hora}</small>
                      </div>
                      <h4 className="mb-0">{c.sintomas}</h4>
                      <div className="contacto py-3">
                        <p>Dueño: {c.propietario}</p>
                        <p>telefono: {c.telefono}</p>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      
    </Fragment>
  )
}

export default Pacientes
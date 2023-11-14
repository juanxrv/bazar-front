import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ResultGrid = ({ items }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4 mt-3">
              <div className="card">
                <img src={item.miniatura} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-truncate" title={item.nombre}>
                    {item.nombre}
                  </h5>
                  <p className="card-text text-truncate">{item.descripcion}</p>
                  <p className="card-text">
                    <div className="d-flex justify-content-end gap-1">
                      <span className="lead">${item.precio}</span>
                      <span className="fw-bold">MXN</span>
                    </div>
                    <div className="">{'⭐'.repeat(item.puntuacion)}</div>
                  </p>
                  <Link to={`/item/${item.id}`} className="btn btn-primary">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="col mt-3">
              <div className="alert alert-warning">
                No se encontraron coincidencias.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

ResultGrid.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ResultGrid

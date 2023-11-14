import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchBox from '../components/SearchBox'

const DetailPage = () => {
  const { id } = useParams()

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get(`https://bazar-api-production-123b.up.railway.app/api/item/${id}`)
        .then((res) => {
          console.log(res.data)
          setItem(res.data)
        })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [id])

  if (Object.keys(item).length === 0 && !loading)
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="alert alert-warning">
              Verifica que hayas ingresado una URL correcta.
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <SearchBox />
          </div>
          <div className="col-12 mt-3">
            <div className="card">
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 h-100">
                      <div
                        id="carouselExample"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          {item.imagenes?.map((imagen, index) => (
                            <div
                              key={index}
                              className={`carousel-item ${
                                index === 0 ? 'active' : ''
                              }`}
                            >
                              <img
                                src={imagen.url}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          ))}
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExample"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Atrás</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExample"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Siguiente</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <h1 className="card-title fw-bold">{item.nombre}</h1>
                      <p className="card-text lead">{item.descripcion}</p>
                      <p className="card-text">
                        <span className="fw-bold">Existencia: </span>
                        {item.stock} pz.
                      </p>
                      <p className="card-text">
                        <span className="fw-bold">Precio: </span>${item.precio}{' '}
                        <span className="fw-bold">MXN</span>
                      </p>
                      <p className="card-text">
                        <span className="fw-bold">Categoría: </span>{' '}
                        <span style={{ textTransform: 'uppercase' }}>
                          {item.categoria}
                        </span>
                      </p>
                      <p className="card-text">
                        {'⭐'.repeat(item.puntuacion)}
                      </p>
                      <p className="card-text">{item.vendedor}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-end">
                  <div className="btn btn-primary">Comprar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage

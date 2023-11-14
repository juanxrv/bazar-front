import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()

  const searchKeyword = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    navigate(`/items?search=${form.get('keyword')}`)
  }

  return (
    <>
      <form
        onSubmit={searchKeyword}
        className="d-flex gap-3 align-items-center mx-auto"
      >
        <input
          className="form-control text-center"
          type="text"
          name="keyword"
          placeholder="Ingresa el nombre del artículo"
        />
        <button type="submit" className="btn btn-primary">
          Búscar
        </button>
      </form>
    </>
  )
}

export default SearchBox

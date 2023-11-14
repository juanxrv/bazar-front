import SearchBox from '../components/SearchBox'

import logo from '../assets/logo.webp'

const HomePage = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <img src={logo} alt="logo" className="w-50" />
            </div>
            <div className="col-12 col-lg-6 mx-auto">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

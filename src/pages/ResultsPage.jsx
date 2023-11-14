import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import ResultGrid from '../components/ResultGrid'
import SearchBox from '../components/SearchBox'

const ResultsPage = () => {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('search')

  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://bazar-api-production-123b.up.railway.app/api/items?search=${keyword}`
      )
      .then((res) => {
        console.log(res.data)
        setItems(res.data)
      })
  }, [keyword])

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <SearchBox />
          <ResultGrid items={items} />
        </div>
      </div>
    </div>
  )
}

export default ResultsPage

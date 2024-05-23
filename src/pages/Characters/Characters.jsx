import { useEffect, useState } from 'react'
import './Characters.css'
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router-dom'
import CardCharacter from '../../components/CardCharacter/CardCharacter'
import Pagination from '../../components/Pagination/Pagination'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1)

  useEffect(() => {
    setLoading(true)
    setCharacters([])
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.items)
        setLoading(false)
        setLimit(Math.floor(res.meta.totalItems / res.meta.itemsPerPage) + 1)
      })
  }, [page])

  return (
    <main id='characters'>
      {loading && <Loading />}
      {characters.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <CardCharacter character={character} />
        </Link>
      ))}
      <Pagination page={page} setPage={setPage} limit={limit} />
    </main>
  )
}

export default Characters

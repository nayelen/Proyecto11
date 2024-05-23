import { useEffect, useState } from 'react'
import './Character.css'
import { useParams } from 'react-router-dom'

const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState()

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
  }, [])

  return (
    <main className='character'>
      <h1>{character?.name}</h1>
      <div>
        <img src={character?.image} alt={character?.name} />
      </div>
      <h2>{character?.race}</h2>
      <p>{character?.description}</p>
    </main>
  )
}

export default Character

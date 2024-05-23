import React from 'react'
import './Warrior.css'

const Warrior = ({ character }) => {
  return (
    <div className='character warrior'>
      <h2>{character.name}</h2>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <p>{character.ki}</p>
    </div>
  )
}

export default Warrior

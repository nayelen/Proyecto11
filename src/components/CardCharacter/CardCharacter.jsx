import './CardCharacter.css'

const CardCharacter = ({ character }) => {
  return (
    <div className='card-character'>
      <div className='cortina'>
        <h2>{character.name}</h2>
      </div>
      <div className='img-wrp'>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  )
}

export default CardCharacter

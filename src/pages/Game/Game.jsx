import Warrior from '../../components/Warrior/Warrior'
import { getKi } from '../../utils/getKi'
import { getRandom } from '../../utils/getRandomWarrior'
import './Game.css'
import React, { useEffect, useState } from 'react'

const Game = () => {
  const [warrior1, setWarrior1] = useState()
  const [warrior2, setWarrior2] = useState()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.items)
        setWarrior1(getRandom(res.items))
        setWarrior2(getRandom(res.items))
      })
  }, [])

  const fight = () => {
    if (warrior2.ki > warrior1.ki) {
      console.log(warrior2.ki)
      console.log(Number(warrior2.ki))
      console.log(warrior1.ki)
      setWarrior1({
        name: '',
        image:
          'https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif',
        ki: ''
      })
      setTimeout(() => {
        setWarrior1(getRandom(characters))
      }, 2000)
    } else {
      setWarrior2({
        name: '',
        image:
          'https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif',
        ki: ''
      })
      setTimeout(() => {
        setWarrior2(getRandom(characters))
      }, 2000)
    }
  }

  return (
    <main className='game'>
      <h1>¿Quién vencerá con su Ki?</h1>
      <div className='game-container'>
        {warrior1 && <Warrior character={warrior1} />}
        {console.log(warrior1)}
        <button onClick={fight}>VS</button>
        {warrior2 && <Warrior character={warrior2} />}
        {console.log(warrior2)}
      </div>
    </main>
  )
}

export default Game

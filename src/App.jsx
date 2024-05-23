import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Characters from './pages/Characters/Characters'
import Character from './pages/Character/Character'
import Background from './components/Background/Background'
import Game from './pages/Game/Game'

function App() {
  return (
    <>
      <Background />
      <Header />
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  )
}

export default App

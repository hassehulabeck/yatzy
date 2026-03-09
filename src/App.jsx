import { useState } from 'react'
import './App.css'
import { Die } from './Die'

function App() {

  const [dice, setDice] = useState([
    {id: 1, value: 1, isLocked: false },
    {id: 2, value: 1, isLocked: false },
    {id: 3, value: 4, isLocked: false },
    {id: 4, value: 2, isLocked: true },
    {id: 5, value: 6, isLocked: false },
  ])

  function roll(id) {
    const updatedDice = dice.map(die => {
      if (die.id === id) {
        die = Math.floor(Math.random() * 6)
        return die
      }
      return die
    })
    setDice(updatedDice)
  }

  return (
    <>
      <h1>Yatzy</h1>
      <section>
        {
          dice.map(die => (
            <Die key={die.id} value={die.value} isLocked={die.isLocked} clickHandler={roll(die.id)} />
          ))
        }
      </section>  
    </>
  )
}

export default App

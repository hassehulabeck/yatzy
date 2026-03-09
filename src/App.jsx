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

  const [rolls, setRolls] = useState(0)

  // Derived value (sum) with reducer
  const sum = dice.reduce((acc, die) => {
    return acc + die.value
  }, 0)


  function roll() {
    const updatedDice = dice.map(die => {
      if (die.isLocked) return die
      return {...die, value: Math.ceil(Math.random() * 6)}
    })
    setDice(updatedDice)
  }

  function lock(id) {
    const updatedDice = dice.map(die => {
      if (die.id === id) {
        return {...die, isLocked: !die.isLocked }
      }
      return die
    })
    setDice(updatedDice)
  }

  return (
    <>
      <h1>Yatzy</h1>
      <p>Summa: { sum }</p>
      <button onClick={roll}>Roll</button>
      <section>
        {
          dice.map(die => (
            <Die 
              key={die.id} 
              value={die.value} 
              isLocked={die.isLocked} 
              lockHandler={() => lock(die.id)} 
            />
          ))
        }
      </section>  
    </>
  )
}

export default App

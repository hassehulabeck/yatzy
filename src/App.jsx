import { useEffect, useState } from 'react'
import './App.css'
import { Die } from './Die'

function App() {

  const [dice, setDice] = useState([
    {id: 1, value: null, isLocked: false },
    {id: 2, value: null, isLocked: false },
    {id: 3, value: null, isLocked: false },
    {id: 4, value: null, isLocked: false },
    {id: 5, value: null, isLocked: false },
  ])

  // Some change here
  const [rolls, setRolls] = useState(3)

  useEffect(() => {
    roll()
  }, [])

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
    setRolls(rolls - 1)
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
      <button onClick={roll} disabled={rolls <= 0 ? 'disabled' : ''}>Roll ({rolls} left)</button>
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

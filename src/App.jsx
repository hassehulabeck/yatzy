import { useEffect, useState } from 'react'
import './App.css'
import { Die } from './Die'
import { Scoreboard } from './Scoreboard'

function App() {

  const [dice, setDice] = useState([
    {id: 1, value: null, isLocked: false },
    {id: 2, value: null, isLocked: false },
    {id: 3, value: null, isLocked: false },
    {id: 4, value: null, isLocked: false },
    {id: 5, value: null, isLocked: false },
  ])

  const [scoreboardData, setScoreboardData] = useState(
    [
      {'name': 'ettor', 'value': null, 'isUsed': false, 'number': 1 },
      {'name': 'tvåor', 'value': null, 'isUsed': false, 'number': 2  },
      {'name': 'treor', 'value': null, 'isUsed': false, 'number': 3  },
      {'name': 'fyror', 'value': null, 'isUsed': false, 'number': 4  },
      {'name': 'femmor', 'value': null, 'isUsed': false, 'number': 5  },
      {'name': 'sexor', 'value': null, 'isUsed': false, 'number': 6  },
      {'name': 'summa', 'value': null, 'isUsed': false },
      {'name': 'bonus', 'value': null, 'isUsed': false },
      {'name': 'ett par', 'value': null, 'isUsed': false },
      {'name': 'två par', 'value': null, 'isUsed': false },
      {'name': 'tretal', 'value': null, 'isUsed': false },
      {'name': 'fyrtal', 'value': null, 'isUsed': false },
      {'name': 'liten straight', 'value': null, 'isUsed': false },
      {'name': 'stor straight', 'value': null, 'isUsed': false },
      {'name': 'kåk', 'value': null, 'isUsed': false },
      {'name': 'chans', 'value': null, 'isUsed': false },
      {'name': 'yatzy', 'value': null, 'isUsed': false },
      {'name': 'total', 'value': null, 'isUsed': false },
    ]
  )

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
    checkNumber(1, updatedDice)
    setRolls(rolls - 1)
  }

  const checkNumber = (number, currentDice) => {
    const frequency = currentDice.filter(die => die.value === number).length

    const newValue = number * frequency
    const updatedScoreboard = scoreboardData.map((item, index) => index === number - 1 ? { ...item, value: newValue } : item)
    setScoreboardData(updatedScoreboard)
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
    <main>
          <h1>Yatzy</h1>
    
          <div className="diceboard">
            {dice.map(die => (
              <Die
                key={die.id}
                value={die.value}
                isLocked={die.isLocked}
                lockHandler={() => lock(die.id)}
              />
            ))}
          </div>
    
          <div className="controls">
            <button onClick={roll} disabled={rolls <= 0}>Roll ({rolls} left)</button>
          </div>
    
          <div className="scoreboard">
            <Scoreboard data={scoreboardData} />
          </div>
        </main>
  )
}

export default App
// Code review exercise
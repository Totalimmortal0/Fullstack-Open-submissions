import { useState } from 'react'

const Statistic = ({good, neutral, bad, total, average, positive}) => {
  if (good || neutral || bad) {
    return (
      <div className='stats'>
        <h1>Statistic</h1>
        <h3>Good: {good}</h3>
        <h3>Neutral: {neutral}</h3>
        <h3>Bad: {bad}</h3>
        <h2>All: {total}</h2>
        <h2>Average: {!Number.isNaN(average) ?  average : ""} </h2>
        <h2>Positive: {!Number.isNaN(positive) ?  positive : ""}%</h2>
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const Button = ({text, handlerFunc}) => {
  return (
    <button onClick={handlerFunc}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <>
      <div>
        <h1>Give Feedack</h1>
        <Button text="Good" handlerFunc={handleGood}/>
        <Button text="Neutral" handlerFunc={handleNeutral}/>
        <Button text="Bad" handlerFunc={handleBad}/>
      </div>
      <Statistic 
        good={good}
        neutral={neutral}
        bad={bad} 
        total={total}
        average={average}
        positive={positivePercentage} />
    </>
  )
}

export default App
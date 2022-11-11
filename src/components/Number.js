import React, { useState } from "react"

const NumberGen = () => {
  const [num, setNum] = useState(0)

  function randomNumberInRange(min, max) {
    //  get number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 5))
  }

  return (
    <div>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
  )
}

export default NumberGen

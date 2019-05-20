import React, { useState } from 'react'
import './App.css'
import 'normalize.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container" onClick={() => setCount(count + 1)}>
      <h1 className="counter">{count}</h1>
    </div>
  )
}

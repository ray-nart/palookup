import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Simple Count Card</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Add 1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Take 1
        </button>

        <div className='count'>Count is {count}</div>
      </div>
    </>
  )
}

export default App

import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  function handleAdd() {
    setCounter(old => old + 1)
  }

  if (counter === 3) {
    throw new Error('test error boundary')
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleAdd}>Add</button>
      <h2>{counter}</h2>
    </div>
  )
}

export default App
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  function handleAdd() {
    throw new Error(
      'error boundaries not work in events. ' + 
      'Use try catch instead.'
    )
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
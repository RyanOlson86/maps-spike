import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleMap from './SimpleMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleMap />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

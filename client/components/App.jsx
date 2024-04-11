import React from 'react'
import '../styles/main.scss'
import { Link } from 'react-router-dom'

const App = () => {
  // const [count, setCount] = useState(12)

  return (
    <>
      <h1>Hello World</h1>
      <Link to={`battle`}>Pokemon Battle</Link>
    </>
  )
}

export default App

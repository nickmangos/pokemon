import React from 'react'
import '../styles/main.scss'
import { Outlet, Link } from "react-router-dom";

const Battle = () => {
  // const [count, setCount] = useState(12)

  return (
    <>
      <h1>Battle</h1>
      <Link to={`pokedex`}>Choose Pokemon</Link>
      <Outlet />
    </>
    
  )
}

export default Battle

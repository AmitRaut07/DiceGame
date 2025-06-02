import React, { useState } from 'react'
import Startgame from './components/Startgame'
import Gameplay from './components/Gameplay';
const App = () => {
const [isGameStarted, setIsGameStarted] = useState(false);
const toogleGamePlay =()=>{
    setIsGameStarted((prev)=>!prev);
}
  return (
    <>
    {
      isGameStarted ? <Gameplay /> : <Startgame toggle={toogleGamePlay} />
    }
  
   </>
  )
}

export default App
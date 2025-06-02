import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numeberselect from './Numeberselect'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineBtn } from '../styled/Button'
import Rules from './Rules'

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNo, setSelectedNo] =useState();
   const [currentDice, setCurrentDice] =useState(1);
const[error, setError] = useState("");
const [showRules, setShowRules] = useState(false);
const generateRandNo=() => { return Math.floor((Math.random() * 6) + 1);}
     
    const rollDice=()=>{
      if(!selectedNo) {
        setError("You have not selected any number" );
          return;
       
      };
     
    const randno = generateRandNo();
    setCurrentDice((prev)=>randno);

if(selectedNo == randno){
  setScore((prev) => prev+randno);
}
else{
  setScore((prev)=> prev-2);
}
setSelectedNo(undefined);
 };

const resetScore = ()=>{
  setScore(0);
}
  return (
    <MainContainer>
        <div className='top_section'>
                 <Totalscore score={score} />
                 <Numeberselect setError={setError} error={error} selectedNo={selectedNo} setSelectedNo={setSelectedNo} />

        </div>
     <RollDice currentDice={currentDice} rollDice={rollDice} />
    <div className='buttons'>
      <OutlineBtn onClick={resetScore}>Reset</OutlineBtn>
      <Button onClick={()=> setShowRules((prev)=>!prev)}>
        {showRules ? "Hide" : "Show"} Rules</Button>

    </div>
    {showRules && <Rules />}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.main`
height: 100vh;
padding-top: 70px;
max-width: 1120px;
margin: 0 auto;
    .top_section {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .buttons{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      align-items: center;
    }
`
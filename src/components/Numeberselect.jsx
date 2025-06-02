
import styled from 'styled-components'
const Numeberselect = ({setError, error, selectedNo,setSelectedNo}) => {
    const array = [1,2,3,4,5,6];
    const numberSlectorHandler=(value)=>{
        setSelectedNo(value);
        setError("");
    }
  return (
    <NoSelectorContainer>
        <p className='error'>{error}</p>
       <div className='flex'>
        {
            array.map((value,i)=>(
                 <Box
                 isSelected={value == selectedNo}
                  key={i} onClick={()=>numberSlectorHandler(value)}>{value}</Box>))
        } 
   

       </div>
    <p>Select Number</p>
</NoSelectorContainer>
  )
}

export default Numeberselect
const NoSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
        font-size: 16px;
    }
`


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> (props.isSelected ? "black":"white")};
    color: ${(props)=> (props.isSelected ? "white":"black")};
`
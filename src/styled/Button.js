import styled from "styled-components"
export const Button = styled.button`
    display: flex;
min-width: 220px;
height: 44px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: #000;
color: white;
border: none;
font-size: 16px;
cursor: pointer;
transition: 0.3s background ease-in;
border: 1px solid transparent;
&:hover{
    background-color: #ffffff;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`

export const OutlineBtn = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background-color: black;
color: white;
border: none;
}
`
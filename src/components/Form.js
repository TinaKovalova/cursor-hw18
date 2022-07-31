import styled from "styled-components";



export const Form = styled.form`
  width: 20%;
  padding: 70px 10px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #093031;
  color: whitesmoke;
  a{
    text-decoration: none;
    color: lightskyblue;
  }
  span{
    color: lightskyblue;
  }
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 80%;
  background-color: #135e60;
  border-radius: 5px;

`;
export const Button = styled.button`
  width: 85%;
  line-height: 1.8em;
  background-color: lightskyblue;
  border: none;
  border-radius: 5px;
  margin: 1em;

`;

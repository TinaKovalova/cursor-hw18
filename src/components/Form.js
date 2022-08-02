import styled from "styled-components";

export const IconBlock = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: lightskyblue url("${props => props.src}") no-repeat center;
`;
export const Form = styled.form`
  width: 25%;
  padding: 70px 10px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #093031;
  color: whitesmoke;

  a {
    text-decoration: none;
    color: lightskyblue;
  }

  span {
    color: lightskyblue;
  }
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 80%;
  background-color: #093031;
  border-radius: 5px;
  border: 1px solid whitesmoke;


`;

export const InlineBlock = styled.div`
  width: 83%;
  margin: 0 0 1em 0;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  font-size: 0.8em;

  input[type = 'checkbox'] {
    margin-right: 10px;
    cursor: pointer;
  }

  input[type='text'] {
    width: 44%;
    margin-left: 0;
    margin-right: 0;
    display: block;
  }

`;


export const Button = styled.button`
  width: 83%;
  line-height: 1.8em;
  background-color: lightskyblue;
  border: none;
  border-radius: 5px;
  margin: 1em;

`;

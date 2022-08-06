import styled from "styled-components";

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
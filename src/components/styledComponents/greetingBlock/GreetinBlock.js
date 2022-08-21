import styled from "styled-components";

export const GreetingBlock = styled.div`
  margin: 50px auto;
  width: 50vw;
  height: 50vh;
  background: whitesmoke url("${props => props.src}") no-repeat center;
  position: relative;

  h2 {
    text-align: center;
    position: absolute;
    top: 40%;
    left: 30%;
    right: 30%;
  }
`;
import styled from "styled-components";

export const IconBlock = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: palevioletred url("${props => props.src}") no-repeat center;
`;
import styled from "styled-components";

export const StyledLi = styled.li`
  text-transform: uppercase;
  display: inline-block;
  margin-right: 30px;
  min-widthwidth: fit-content;
  padding: 8px 15px;
  line-height: 1.5em;

  &:hover {
    a {
      color: burlywood;
      cursor: pointer;
    }
  }

  a {
    display: block;
    color: #223636;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
  }

`;

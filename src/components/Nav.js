import {Component} from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Navigation = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: aquamarine;

  ul {
    display: table;
    margin: auto;
    list-style-type: none;
  }`;
const NavLi = styled.li`
  text-transform: uppercase;
  display: inline-block;
  margin-right: 50px;
  min-widthwidth: fit-content;
  padding: 8px 15px;
  line-height: 1.5em;
  border: 1px solid blue;
  border-radius: 15px;
  &:hover {
    background-color: blue;
    a {
      color: whitesmoke;
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

export default class Nav extends Component {
    render() {
        return (
            <Navigation>
                <ul>
                    <NavLi><NavLink to='/sign-in' activeClassName="hurray" >Sign in</NavLink></NavLi>
                    <NavLi><NavLink to='/sign-up' >Sign up</NavLink></NavLi>
                </ul>
            </Navigation>
        );
    }
}
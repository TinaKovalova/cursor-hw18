import {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navigation, StyledLi} from "../styledComponents";


export default class Nav extends Component {
    render() {
        return (
            <Navigation>
                <ul>
                    <StyledLi><NavLink to='/sign-in' activeClassName="hurray" >Sign in</NavLink></StyledLi>
                    <StyledLi><NavLink to='/sign-up' >Sign up</NavLink></StyledLi>
                </ul>
            </Navigation>
        );
    }
}
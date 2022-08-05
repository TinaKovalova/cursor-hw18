import {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import unlock from '../assets/unlock.png';
import {Button, Form, IconBlock, InlineBlock, Input} from './Form';
import {checkFormDataValid} from "../service";
import SignIn from "./SignIn";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            promotions: false,
            validation: {email: null, password: null}
        }
    }


    checkValidation = (event) => {
        const target = event.target;
        let isValid = checkFormDataValid(target.value, target.type)
        event.target.style.borderColor = isValid ? 'green' : 'red'
        this.setState({validation: {...this.state.validation, [target.name]: isValid}})
        console.log(localStorage)
    }

    onChecked = (event) => this.setState({[event.target.name]: event.target.checked});

    onChangeText = (event) => this.setState({[event.target.name]: event.target.value});
    onClick = () => {
        localStorage.setItem('email', this.state.email);
        this.props.history.push('/sign-in')
    }

    render() {
        const {firstName, lastName, email, password, remember} = this.state;
        return (
            <Form>
                <IconBlock src={unlock}/>
                <h3>Sign up</h3>
                <InlineBlock justifyContent='space-between'>
                    <Input type='text' placeholder='First Name*' name='firstName' required onBlur={this.checkValidation}
                           value={firstName} onChange={this.onChangeText}/>
                    <Input type='text' placeholder='Last Name*' name='lastName' required onBlur={this.checkValidation}
                           value={lastName} onChange={this.onChangeText}/>
                </InlineBlock>

                <Input type='email' placeholder='Email address*' name='email' required onBlur={this.checkValidation}
                       value={email} onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required onBlur={this.checkValidation}
                       value={password} onChange={this.onChangeText}/>
                <InlineBlock justifyContent='start'>
                    <input type='checkbox' id='remember-checkbox' name='remember' checked={remember}
                           onChange={this.onChecked}/>
                    <label htmlFor='remember-checkbox'>I want to receive inspiration, marketing promotions and updates
                        via email</label>
                </InlineBlock>
                <Button type='submit' onClick={this.onClick}>Sign in</Button>
                <InlineBlock justifyContent='end'>
                    <Link to='/sign-in'>Already have an account? Sign in</Link>
                </InlineBlock>
            </Form>
        )
    }
}
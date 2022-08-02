import {Component} from "react";
import {Link} from "react-router-dom";
import unlock from '../assets/unlock.png';
import {Button, Form, IconBlock, InlineBlock, Input} from './Form';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email: '',
            password: '',
            remember: false
        }
    }

    onForgotPassword=()=>{
        this.setState({password:''});
    }
    onChangeText=(event)=> this.setState({[event.target.name]:event.target.value});
    onChecked =(event)=> this.setState({[event.target.name]:event.target.checked});
    render() {
        const {firstName,lastName, email, password, remember} = this.state;
        return (
            <Form>
                <IconBlock src={unlock}/>
                <h3>Sign up</h3>
                <InlineBlock justifyContent='space-between'>
                    <Input type='text' placeholder='First Name*' name='firstName' required value={firstName}  onChange={this.onChangeText}/>
                    <Input type='text' placeholder='Last Name*' name='lastName' required value={lastName} onChange={this.onChangeText}/>
                </InlineBlock>

                <Input type='text' placeholder='Email address*' name='email' required value={email}  onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required value={password} onChange={this.onChangeText}/>
                <InlineBlock  justifyContent='start'>
                    <input type='checkbox' id='remember-checkbox' name='remember'  checked={remember} onChange={this.onChecked}/>
                    <label htmlFor='remember-checkbox'>I want to receive inspiration, marketing promotions and updates via email</label>
                </InlineBlock>
                <Button type='submit'>Sign in</Button>
                <InlineBlock justifyContent='end'>
                    <Link to='/sign-in'>Already have an account? Sign in</Link>
                </InlineBlock>
            </Form>
        )
    }
}
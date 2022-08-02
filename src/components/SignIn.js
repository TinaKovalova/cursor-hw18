import {Component} from "react";
import {Link} from "react-router-dom";
import unlock from '../assets/unlock.png';
import {Button, Form, IconBlock, InlineBlock, Input} from './Form';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const {email, password, remember} = this.state;
        return (
            <Form>
                <IconBlock src={unlock}/>
                <h3>Sign in</h3>
                <Input type='text' placeholder='Email address*' name='email' required value={email}  onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required value={password} onChange={this.onChangeText}/>
                <InlineBlock justifyContent='start'>
                    <input type='checkbox' id='remember-checkbox' name='remember'  checked={remember} onChange={this.onChecked}/>
                    <label htmlFor='remember-checkbox'>Remember me</label>
                </InlineBlock>
                <Button type='submit'>Sign in</Button>
                <InlineBlock justifyContent='space-between'>
                    <span onClick={this.onForgotPassword}>Forgot password</span>
                    <Link to='/sign-up' >Don't have an account? Sign Up</Link>
                </InlineBlock>

            </Form>
        )
    }
}
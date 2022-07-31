import {Component} from "react";
import {Link} from "react-router-dom";
import lock from '../assets/padlock.png'
import {Button, Form, Input} from './Form';

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
    onChangeText=(event)=>{
        const target=event.target;
        if(target.name==='email'){
            this.setState({email:target.value});
        }else if(target.name==='password'){
           this.setState({password:target.value});
        }else if(target.name==='remember-checkbox'){
            this.setState({remember:target.checked});
        }
    }

    render() {
        const {email, password, remember} = this.state;
        return (
            <Form>
                <img src={lock}/>
                <h3>Sign in</h3>
                <Input type='text' placeholder='Email address*' name='email' required value={email}  onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required value={password} onChange={this.onChangeText}/>
                <div>
                    <Input type='checkbox' id='remember-checkbox' name='remember-checkbox'  checked={remember} onChange={this.onChangeText}/>
                    <label htmlFor='remember-checkbox'>Remember me</label>
                </div>
                <Button type='submit'>Sign in</Button>
                <span onClick={this.onForgotPassword}>Forgot password</span>
                <Link to='/sign-up' >Don't have an account? Sign Up</Link>
            </Form>
        )
    }
}
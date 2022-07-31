import {Component} from "react";
import {Link} from "react-router-dom";
import lock from '../assets/padlock.png'
import {Button, Form, Input} from './Form';

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
        const {firstName,lastName, email, password, remember} = this.state;
        return (
            <Form>
                <img src={lock}/>
                <h3>Sign up</h3>
                <div>
                    <Input type='text' placeholder='First Name*' name='firstName' required value={firstName}  onChange={this.onChangeText}/>
                    <Input type='text' placeholder='Last Name*' name='lastName' required value={lastName} onChange={this.onChangeText}/>
                </div>
                <Input type='text' placeholder='Email address*' name='email' required value={email}  onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required value={password} onChange={this.onChangeText}/>
                <div>
                    <Input type='checkbox' id='remember-checkbox' name='remember-checkbox'  checked={remember} onChange={this.onChangeText}/>
                    <label htmlFor='remember-checkbox'>I want to receive inspiration, marketing promotions and updates via email</label>
                </div>
                <Button type='submit'>Sign in</Button>
                <Link to='/sign-in'>Already have an account? Sign in</Link>
            </Form>
        )
    }
}
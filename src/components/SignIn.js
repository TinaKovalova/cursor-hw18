import {Component} from "react";
import {Link} from "react-router-dom";
import unlock from '../assets/unlock.png';
import {Button, Form, IconBlock, InlineBlock, Input} from './Form';
import {checkFormDataValid} from "../service";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: false,
            validation:{email:null,password: null }
        }
    }
    onForgotPassword=()=>{
        this.setState({password:''});
    }
    onChangeText=(event)=>{this.setState({[event.target.name]:event.target.value});}

    checkValidation = (event)=>{
        const target = event.target;
        let isValid=checkFormDataValid(target.value,target.name)
        event.target.style.borderColor= isValid ? 'green' : 'red'
        this.setState({validation: {...this.state.validation, [target.name] : isValid}})
    }

    onChecked =(event)=> this.setState({[event.target.name]:event.target.checked});

    render() {
        const {email, password, remember} = this.state;
        return (
            <Form>
                <IconBlock src={unlock}/>
                <h3>Sign in</h3>
                <Input type='text' placeholder='Email address*' name='email' required onBlur={this.checkValidation} value={email}  onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required onBlur={this.checkValidation} value={password} onChange={this.onChangeText}/>
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
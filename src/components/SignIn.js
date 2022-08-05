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
            validation: {email: null, password: null},
            formIsValid: false
        }
    }

    componentDidMount() {
        const {email, password} = localStorage
        if (email) this.setState({email, validation:{email : !!email}});
        if (password) this.setState({password, validation:{password : !!password}});

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', this.state)
    }

    onForgotPassword = () => {
        localStorage.clear()
        localStorage.removeItem('password');
        this.setState({password: ''})
    }

    onChangeText = (event) => {
        console.log(this.state)
        this.checkValidation(event)
        this.validateForm();
        this.setState({[event.target.name]: event.target.value});
    }

    checkValidation = (event) => {
        console.log('checkValidation')
        const target = event.target;
        let isValid = checkFormDataValid(target.value, target.type)
        event.target.style.borderColor = isValid ? 'green' : 'red'
        this.setState({validation: {...this.state.validation, [target.name]: isValid}})
    }

    onChecked = (event) => this.setState({[event.target.name]: event.target.checked});
    onClick = () => {
        const {password, remember} = this.state;
        if (remember) localStorage.setItem('password', password);
    }
    validateForm = () => {
        const {email, password} = this.state.validation
        this.setState({formIsValid: !!email && !!password});
    }

    render() {
        const {email, password, remember, formIsValid} = this.state;
        return (
            <Form>
                <IconBlock src={unlock}/>
                <h3>Sign in</h3>
                <Input type='email' placeholder='Email address*' name='email' required
                       value={email} onChange={this.onChangeText}/>
                <Input type='password' placeholder='Password*' name='password' required

                       value={password} onChange={this.onChangeText}/>
                <InlineBlock justifyContent='start'>
                    <input type='checkbox' id='remember-checkbox' name='remember' checked={remember}
                           onChange={this.onChecked}/>
                    <label htmlFor='remember-checkbox'>Remember me</label>
                </InlineBlock>
                <Button type='submit' onClick={this.onClick} disabled={!formIsValid}>Sign in</Button>
                <InlineBlock justifyContent='space-between'>
                    <span onClick={this.onForgotPassword}>Forgot password</span>
                    <Link to='/sign-up'>Don't have an account? Sign Up</Link>
                </InlineBlock>

            </Form>
        )
    }
}
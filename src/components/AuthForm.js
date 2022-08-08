import {StyledForm, StyledInput, IconBlock, InlineBlock, StyledButton} from './styledComponents';
import {Component} from "react";
import {checkFormDataValid} from "../service";
import unlock from "../assets/unlock.png";
import {Link, withRouter} from "react-router-dom";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogInForm: this.props.title.includes('in'),
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isChecked: false,
            validation: {email: null, password: null},
            formIsValid: this.props.title.includes('in')
        }
    }

    componentDidMount() {
        if (this.state.isLogInForm) {
            const authData = this.getDataFromLocalStorage('user');
            if (authData) {
                const {email, password} = authData;
                this.setState({
                    email: email,
                    password: password || '',
                    validation: {email: !!email, password: !!password},
                    formIsValid: true
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.title != prevProps.title) {
            const isLogInForm = this.props.title.includes('in');
            const user = this.getDataFromLocalStorage('user');
            isLogInForm ?
                this.setState({
                    email: user?.email || '',
                    password: user?.password || '',
                    isLogInForm, formIsValid: true
                }) :
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    isLogInForm,
                    validation: {email: null, password: null},
                    formIsValid: false,
                });
        }
    }

    onForgotPassword = () => {
        localStorage.clear();
        this.setState({email: '', password: ''});
    }

    onChangeText = (event) => {
        const target = event.target;
        let isValid;
        if (this.props.title.includes('up')) {
            isValid = checkFormDataValid(target.value, target.type);
            event.target.style.borderColor = isValid ? 'green' : 'red';
        } else {
            isValid = true;
        }
        this.setState({
            [event.target.name]: event.target.value,
            validation: {
                ...this.state.validation,
                [target.name]: isValid
            }
        })
        this.validateForm();
    }
    onChecked = (event) => this.setState({isChecked: event.target.checked});
    onClick = (event) => {
        const {firstName, lastName, email, password, isChecked} = this.state;
        if (event.target.name === 'in') {
            if (isChecked) localStorage.setItem('user', JSON.stringify({email, password}));
            this.props.setUserEmail(email);
            this.props.history.replace('/home');
        } else if (event.target.name === 'up') {
            localStorage.setItem('user', JSON.stringify({
                firstName,
                lastName,
                email
            }));
            this.props.history.replace('/sign-in');
        }
    }

    validateForm = () => {
        this.setState(state => ({formIsValid: !!state.validation.email && !!state.validation.password}));
    }
    getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

    render() {
        const {isLogInForm, firstName, lastName, email, password, isChecked, formIsValid} = this.state;
        const {title, chekBoxLabel, extraAction, linkToText, linkTo} = this.props;
        return (
            <StyledForm>
                <IconBlock src={unlock}/>
                <h3>{title}</h3>
                {
                    !isLogInForm ?
                        <InlineBlock justifyContent='space-between'>
                            <StyledInput type='text' placeholder='First Name*' name='firstName' required
                                         onChange={this.onChangeText}
                                         value={firstName}/>
                            <StyledInput type='text' placeholder='Last Name*' name='lastName' required
                                         onChange={this.onChangeText}
                                         value={lastName}/>
                        </InlineBlock> : null
                }
                <StyledInput type='email' placeholder='Email address*' name='email' required
                             value={email} onChange={this.onChangeText}/>
                <StyledInput type='password' placeholder='Password*' name='password' required
                             value={password} onChange={this.onChangeText}/>
                <InlineBlock justifyContent='start'>
                    <input type='checkbox' id={title + '-remember-checkbox'} name='remember' checked={isChecked}
                           onChange={this.onChecked}/>
                    <label htmlFor={title + '-remember-checkbox'}>{chekBoxLabel}</label>
                </InlineBlock>

                <StyledButton type='button' name={title.split(' ')[1]} onClick={this.onClick}
                              disabled={!formIsValid}>{title}</StyledButton>
                <InlineBlock justifyContent='space-between'>
                    <span onClick={this.onForgotPassword}>{extraAction}</span>
                    <Link to={linkTo}>{linkToText}</Link>
                </InlineBlock>
                <p>Copyright &copy; Your Website 2022.</p>
            </StyledForm>
        )
    }
}

export default withRouter(AuthForm);

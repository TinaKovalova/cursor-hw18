import {StyledForm, StyledInput, IconBlock, InlineBlock, StyledButton, ErrorBlock} from '../styledComponents';
import {Component} from "react";
import {checkFormDataValid} from "../../service";
import unlock from "../../assets/unlock.png";
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
            formIsValid: this.props.title.includes('in'),
            error: ''
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

    logIn = (registeredUser) => {
        const {password, isChecked} = this.state;
        if (password !== registeredUser.password) {
            this.setState({error: 'Login or password issues'});
        } else {
            if (isChecked) localStorage.setItem('user', JSON.stringify({...registeredUser}));
            this.props.setUserName(`${registeredUser.firstName} ${registeredUser.lastName}`);
            this.props.history.replace('/home');
        }
    }
    register = (users, newUser) => {
        users ? localStorage.setItem('users', JSON.stringify({...users, ...newUser})) :
            localStorage.setItem('users', JSON.stringify({...newUser}));
        this.props.history.replace('/sign-in');
    }

    onForgetPassword = () => {
        localStorage.removeItem('user');
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
        const users = JSON.parse(localStorage.getItem('users'));
        if (event.target.name === 'in') {
            const registeredUser = users ? users[email] : null;
            registeredUser ? this.logIn({
                ...registeredUser,
                email
            }) : this.setState({error: 'Account isn\'t registered yet.'});
        } else if (event.target.name === 'up') {
            const newUser = {[email]: {firstName, lastName, password}};
            users && users[email] ? this.setState({error: 'This email is already registered'}) : this.register(users, newUser);
        }
    }
    onFocus = () => {
        if (this.state.error) this.setState({error: ''});
    }


    validateForm = () => {
        this.setState(state => ({formIsValid: !!state.validation.email && !!state.validation.password}));
    }
    getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

    render() {
        const {isLogInForm, firstName, lastName, email, password, isChecked, formIsValid, error} = this.state;
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
                             value={email} onChange={this.onChangeText} onFocus={this.onFocus}/>
                <StyledInput type='password' placeholder='Password*' name='password' required
                             value={password} onChange={this.onChangeText} onFocus={this.onFocus}/>
                <InlineBlock justifyContent='start'>
                    <input type='checkbox' id={title + '-remember-checkbox'} name='remember' checked={isChecked}
                           onChange={this.onChecked}/>
                    <label htmlFor={title + '-remember-checkbox'}>{chekBoxLabel}</label>
                </InlineBlock>
                <StyledButton type='button' name={title.split(' ')[1]} onClick={this.onClick}
                              disabled={!formIsValid}>{title}</StyledButton>
                <ErrorBlock>{error}</ErrorBlock>
                <InlineBlock justifyContent='space-between'>
                    <span onClick={this.onForgetPassword}>{extraAction}</span>
                    <Link to={linkTo}>{linkToText}</Link>
                </InlineBlock>
                <p>Copyright &copy; Your Website 2022.</p>
            </StyledForm>
        )
    }
}

export default withRouter(AuthForm);

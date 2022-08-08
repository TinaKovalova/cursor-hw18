import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import {signIn, signUp} from "../constants";
import AuthForm from "./AuthForm";
import {Component} from "react";
import {HomePage} from "./HomePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {userEmail: ''}
    }

    setUserEmail = (userEmail) => this.setState({userEmail})

    render() {
        return (
            <div className="App">
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path='/home'>
                            <HomePage userEmail={this.state.userEmail}/>
                        </Route>
                        <Route path='/sign-in'>
                            <AuthForm {...signIn} setUserEmail={this.setUserEmail}/>
                        </Route>
                        <Route path='/sign-up'>
                            <AuthForm {...signUp}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

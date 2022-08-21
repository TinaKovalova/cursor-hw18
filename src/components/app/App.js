import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "../nav/Nav";
import {signIn, signUp} from "../../constants";
import AuthForm from "../authForm/AuthForm";
import {Component} from "react";
import {HomePage} from "../homePage/HomePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: ''};
    }

    setUserName = (userName) => this.setState({userName});

    render() {
        return (
            <div className="App">
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path='/home'>
                            <HomePage userName={this.state.userName}/>
                        </Route>
                        <Route path='/sign-in'>
                            <AuthForm {...signIn} setUserName={this.setUserName}/>
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

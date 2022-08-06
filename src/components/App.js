import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import {signIn, signUp} from "../constants";
import AuthForm from "./AuthForm";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path='/sign-in'>
                        <AuthForm {...signIn}/>
                    </Route>
                    <Route path='/sign-up'>
                        <AuthForm {...signUp}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

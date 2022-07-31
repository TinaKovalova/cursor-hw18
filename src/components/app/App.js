import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Nav from "../Nav";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import {Home,Home1, Home2} from "../Form";



function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                    <Route path='/' exact/>
                    <Route path='/sign-in' component={SignIn}/>
                    <Route path='/sign-up' component={SignUp}/>

            </Router>
        </div>
    );
}

export default App;

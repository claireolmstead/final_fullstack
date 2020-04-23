import React from 'react';
import {render} from 'react-dom';
import './index.css';
import firebase from "firebase";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Logout from "./components/logout";
import Landing from "./components/landingpage";
import Main from "./components/main";
import Login from "./components/login";

firebase.auth().onAuthStateChanged(function (user) {
    console.log("state changed");
    //console.log("user: ", user);
    if(user){
        console.log("logged in: ", user.displayName);
        document.getElementById("loginButton").classList.toggle("hide");
        document.getElementById("ifLoggedIn").classList.toggle("hide");
        document.getElementById("nextButton").classList.toggle("hide");
    }else{
        console.log("logged out");
    }
});
render((
    <Router>
        <Switch>
            <Route exact path="/" choices>
                <div id='loginBackground'>
                    <Login />
                    <Landing />
                </div>
            </Route>
            <Route path="/main">
                <div className='background'>
                    <Logout />
                    <Main />
                </div>
            </Route>
        </Switch>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

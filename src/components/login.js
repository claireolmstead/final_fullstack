import React, { Component } from "react";
import {Link} from 'react-router-dom';
import firebase from "./firebase";
import User from './variables';

let google = false;
export default class Login extends Component{
    loginWithGoogle = () =>{
        if (!firebase.auth().currentUser) {
            google = true;
            // [START createprovider]
            let provider = new firebase.auth.GoogleAuthProvider();
            // [END createprovider]
            // [START addscopes]
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //token = result.credential.accessToken;
                // The signed-in user info.
                let user = result.user;
                User.uid = user.uid;
                User.name = user.displayName;
                Object.freeze(User);
            }).catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                //let errorMessage = error.message;
                // The email of the user's account used.
                //let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                //let credential = error.credential;
                // [START_EXCLUDE]
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    alert('You have already signed up with a different auth provider for that email.');
                    // If you are using multiple auth providers on your app you should handle linking
                    // the user's accounts here.
                } else {
                    console.error(error);
                }
                // [END_EXCLUDE]
            });
        }
    };
    next = () => {
        if(google === false){
            console.log("already logged in");
            let curUser = firebase.auth().currentUser;
            User.uid = curUser.uid;
            User.name = curUser.displayName;
        }
    };

    render() {
        return(
            <div id='loginpage'>
                <h2>Login</h2>
                <button onClick={this.loginWithGoogle} className="loginBtnStyle loginBtn bttn" id="loginButton">Login With Google</button><br/>
                <p id="ifLoggedIn" className="hide"> </p>
                <button onClick={this.next} className='bttn hide' id='nextButton'><Link to='/main'>Next</Link></button>
            </div>
        )
    }
}

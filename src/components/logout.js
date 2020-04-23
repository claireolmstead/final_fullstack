import React, { Component } from "react";
import firebase from 'firebase/app';
import {Link} from 'react-router-dom';

export default class Logout extends Component{
    signOut = () => {
        firebase.auth().signOut();
    };
    render() {
        return(
            <div>
                <button onClick={this.signOut} className="signOutButton loginBtn"><Link to='/'>Log Out</Link></button>
            </div>
        )
    }
}
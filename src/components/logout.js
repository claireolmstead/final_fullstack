import React, { Component } from "react";
import firebase from 'firebase/app';
import {Link} from 'react-router-dom';
import User from './variables';

export default class Logout extends Component{
    signOut = () => {
        firebase.auth().signOut();
    };
    render() {
        return(
            <div>
                <h4 id="logoutName">{User.name} </h4>
                <button onClick={this.signOut} className="signOutButton logoutButton bttn"><Link to='/'>Log Out</Link></button>
            </div>
        )
    }
}
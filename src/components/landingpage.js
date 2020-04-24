import React, { Component } from "react";
import Login from "./login";

export default class Landing extends Component{
    render() {
        return(
            <div id='landingpage'>
                <header>
                    <h1>The List</h1>
                </header>
                <main>
                    <h2>A List Making App</h2>
                    <p>Think groceries.</p>
                    <p>Think to do.</p>
                    <p>Think organization.</p>
                    <p>Think productivity.</p>
                </main>
            </div>
        )
    }
}
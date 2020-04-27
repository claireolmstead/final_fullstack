import React, { Component } from "react";

export default class Landing extends Component{
    render() {
        return(
            <div id='landingpage'>
                <header>
                    <h1 data-aos='flip-up'>The List</h1>
                </header>
                <main>
                    <h2>A List Making App</h2>
                    <p data-aos='slide-right' data-aos-delay="100">Think groceries.</p>
                    <p data-aos='slide-right' data-aos-delay="200">Think to do.</p>
                    <p data-aos='slide-right' data-aos-delay="300">Think organization.</p>
                    <p data-aos='slide-right' data-aos-delay="400">Think productivity.</p>
                </main>
            </div>
        )
    }
}
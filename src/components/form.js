import React, {Component} from "react";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import User from './variables';
import CompleteForm from "./completeForm";

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: 'Girls Night',
            location: 'My House',
            date: '',
            duration: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        //const value = target.name === 'isGoing' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        let db = firebase.firestore();
        //Path.title = this.state.title;
        alert('Your favorite flavor is: ' + this.state.title);
        //const itemsRef = db.ref('poll');
        const itemsRef = db.collection("poll").doc(User.uid).collection('event').doc();
        const poll = {
            title: this.state.title,
            date: this.state.date,
            location: this.state.location,
            duration: this.state.duration
        };
        itemsRef.set(poll);
        this.setState({
            title: '',
            location: '',
            date: '',
            duration: 0
        });
    }
    render() {
        return (
            <div>
                <header>
                    <h1>What do you have going on?</h1>
                </header>
                <main>
                    <h2>Add something!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title
                            <input
                                name="title"
                                type="text"
                                id='getTitle'
                                value={this.state.title}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Location
                            <input
                                name="location"
                                type="text"
                                value={this.state.location}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Date:
                            <input
                                name="date"
                                type="date"
                                value={this.state.date}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Time:
                            <input
                                name="time"
                                type="time"
                                value={this.state.time}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Duration:
                            <input
                                name="duration"
                                type="number"
                                value={this.state.duration}
                                onChange={this.handleInputChange} />
                                hrs
                        </label><br/>
                        <input type='submit' value='Submit'/>
                    </form>
                    <CompleteForm />
                </main>
            </div>
        );
    }
}
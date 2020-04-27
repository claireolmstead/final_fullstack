import React, {Component} from "react";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import User from './variables';

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            location: '',
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
        alert('You added: ' + this.state.title);
        //const itemsRef = db.ref('poll');
        const itemsRef = db.collection("poll").doc(User.uid).collection('event').doc();
        const poll = {
            title: this.state.title,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            duration: this.state.duration
        };
        itemsRef.set(poll);
        this.setState({
            title: '',
            location: '',
            date: '',
            time: '',
            duration: 0
        });
        document.getElementById("addButton").classList.toggle("hide");
        document.getElementById("addForm").classList.toggle("hide");
        document.getElementById("cancelButton").classList.toggle("hide");
    }

    showAdd = () => {
        document.getElementById("addForm").classList.toggle("hide");
        document.getElementById("addButton").classList.toggle("hide");
        document.getElementById("cancelButton").classList.toggle("hide");
    };

    render() {
        return (
            <div className='main'>
                <button onClick={this.showAdd} className='bttn' id='addButton'>Add Item</button>
                <main>
                    <form onSubmit={this.handleSubmit} className='hide' id='addForm'>
                        New Item<br/>
                        <label>
                            Title<br/>
                            <input
                                name="title"
                                type="text"
                                id='getTitle'
                                value={this.state.title}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Location<br/>
                            <input
                                name="location"
                                type="text"
                                value={this.state.location}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Date<br/>
                            <input
                                name="date"
                                type="date"
                                value={this.state.date}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Time<br/>
                            <input
                                name="time"
                                type="time"
                                value={this.state.time}
                                onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Duration<br/>
                            <input
                                name="duration"
                                type="number"
                                value={this.state.duration}
                                onChange={this.handleInputChange} />
                                hrs
                        </label><br/>
                        <input type='submit' value='Submit' className='bttn'/>
                    </form>
                    <button onClick={this.showAdd} className='bttn hide' id='cancelButton'>Cancel</button>
                </main>
            </div>
        );
    }
}
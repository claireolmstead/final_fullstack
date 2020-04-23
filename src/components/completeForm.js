import React, {Component} from "react";
import firebase from "./firebase";
import User from './variables';

export default class CompleteForm extends Component{
    getData = () => {
        let db = firebase.firestore();
        let entries = db.collection('poll').doc(User.uid).collection('event');
        entries.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let tableTitle = '<tr></tr><td>' + doc.data().title + '</td>';
                let tableLocation = '<td>' + doc.data().location + '</td>';
                let tableDate = '<td>' + doc.data().date + '</td>';
                let tableDuration = '<td>' + doc.data().duration + '</td>';
                //let deleteButton = '<td><button onclick="'+ db.collection("poll").doc(id).collection("event").doc(doc.data().id).delete() +'">Delete</button></td></tr>';
                let deleteButton = '<td><button id="deleteButton" class="'+doc.data.uid+'">Delete</button></td></tr>';
                let insert = tableTitle + tableLocation + tableDate + tableDuration + deleteButton;
                //console.log(doc.id, ' => ', doc.data());
                document.getElementById('getTable').innerHTML += insert;
                //document.getElementById('getTable').innerHTML += tableTitle;
                //document.getElementById('getTable').innerHTML += tableLocation;
                //document.getElementById('getTable').innerHTML += tableDate;
                //document.getElementById('getTable').innerHTML += tableDuration;
            });
        });
    };
    render(){
        return(
            <div>
                <h1>Stuff going on</h1>
                <button onClick={this.getData}>Get Data</button>
                <table id='getTable'>

                </table>
            </div>
        )
    }
}
/*
document.getElementById("deleteButton").onclick = function(){
    let db = firebase.firestore;
    let getID = document.getElementById("deleteButton").className;
    db.collection("poll").doc(User.uid).collection("event").doc(getID).delete().then(
        function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};*/
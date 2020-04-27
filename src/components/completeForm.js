import React, {Component} from "react";
import firebase from "./firebase";
import User from './variables';

export default class CompleteForm extends Component{
    //getData = () => {
    componentDidMount() {
        let db = firebase.firestore();
        let entries = db.collection('poll').doc(User.uid).collection('event');
        let counter = 0;
        let getId;
        entries.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                counter++;
                if(counter%2 !== 0){
                    getId = 'odd';
                }else{
                    getId = 'even';
                }
                let tableTitle = '<tr class="'+ getId +'"><td>' + doc.data().title + '</td>';
                let tableLocation = '<td>' + doc.data().location + '</td>';
                let tableDate = '<td>' + doc.data().date + '</td>';
                let tableTime = '<td>' + doc.data().time + '</td>';
                let tableDuration = '<td>' + doc.data().duration + '</td>';
                //let deleteButton = '<td><button onclick="'+ db.collection("poll").doc(id).collection("event").doc(doc.data().id).delete() +'">Delete</button></td></tr>';
                let deleteButton = '<td><button id="deleteButton" class="'+doc.data.uid+' bttn">Delete</button></td></tr>';
                let insert = tableTitle + tableLocation + tableDate + tableTime + tableDuration + deleteButton;
                //console.log(doc.id, ' => ', doc.data());
                document.getElementById('getTable').innerHTML += insert;
            });
        });
    };
    render(){
        return(
            <div className='main' id='completeForm'>
                <h1>What do you have going on?</h1>
                <h2>Stuff going on</h2>
                <table id='getTable' className='main'>
                    <th>
                        <td>Location</td>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Duration</td>
                    </th>
                </table>
            </div>
        )
    }
}
/*document.getElementById("deleteButton").onclick = function(){
    let db = firebase.firestore;
    let getID = document.getElementById("deleteButton").className;
    db.collection("poll").doc(User.uid).collection("event").doc(getID).delete().then(
        function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};*/
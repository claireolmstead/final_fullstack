import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDO0nTpdipqzBpsOBpTpYeZFsSYwJrk6C8",
    authDomain: "yesorno-1c7a5.firebaseapp.com",
    databaseURL: "https://yesorno-1c7a5.firebaseio.com",
    projectId: "yesorno-1c7a5",
    storageBucket: "yesorno-1c7a5.appspot.com",
    messagingSenderId: "933049464094",
    appId: "1:933049464094:web:32155c07e3679fab87c50f",
    measurementId: "G-NWEP6JKQE0"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
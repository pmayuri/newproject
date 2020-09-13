import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
        
        apiKey: "AIzaSyBLXoM6XiriMObLLRUUSYxm3JEF79Ht-DM",
        authDomain: "newproject-d2531.firebaseapp.com",
        databaseURL: "https://newproject-d2531.firebaseio.com",
        projectId: "newproject-d2531",
        storageBucket: "newproject-d2531.appspot.com",
        messagingSenderId: "421372536471",
        appId: "1:421372536471:web:0444679593c912279b6bd2",
        measurementId: "G-QDWYZH0FM5"
      });


const auth = firebase.auth();

export { auth };
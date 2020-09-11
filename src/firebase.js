import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyCdAU2oabu9kEHVM9kjX0ui7dFf2tzVbuk",
        authDomain: "clone-ba767.firebaseapp.com",
        databaseURL: "https://clone-ba767.firebaseio.com",
        projectId: "clone-ba767",
        storageBucket: "clone-ba767.appspot.com",
        messagingSenderId: "979108842095",
        appId: "1:979108842095:web:47d090140305a4c1d29b9a"
      
});


const auth = firebase.auth();

export { auth };
$(document).ready(function () {
    console.log("Ready!");




    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBVeR596AsKMWDitOfTEAG7mP3S_zZGMYA",
        authDomain: "watz4dinna.firebaseapp.com",
        databaseURL: "https://watz4dinna.firebaseio.com",
        projectId: "watz4dinna",
        storageBucket: "watz4dinna.appspot.com",
        messagingSenderId: "601066690860"
    };
    firebase.initializeApp(config);
    //Get Elements
    var userEmail = document.getElementById("email-input");
    var userPassword = document.getElementById("user-password");
    var btnLogin = document.getElementById("btn-login");
    var btnSignUp = document.getElementById("btn-sign-up");
    var btnLogout = document.getElementById("btn-logout");
    //Add login event
    btnLogin.addEventListener("click", function (event) {
        //Get email and password
        var email = userEmail.value;
        var pass = userPassword.value;
        var auth = firebase.auth();
        //Sign in
        var promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        console.log(email);
    });
    //Add Logout event
    btnLogout.addEventListener("click", function (event) {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
            document.getElementById("btn-login").style.visibility = "visible";
            document.getElementById("btn-sign-up").style.visibility = "visible";
            document.getElementById("email-input").style.visibility = "visible";
            document.getElementById("user-password").style.visibility = "visible";
            document.getElementById("btn-logout").style.visibility = "hidden";
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    });
    //Add signup event
    btnSignUp.addEventListener("click", function (event) {
        //Get email and password
        //TODO: Check for real email / validate email
        var email = userEmail.value;
        var pass = userPassword.value;
        var auth = firebase.auth();
        //Sign in
        var promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            document.getElementById("btn-sign-up").style.visibility = "hidden";
            document.getElementById("btn-login").style.visibility = "hidden";
            document.getElementById("btn-logout").style.visibility = "visible";
            console.log("SINGNED IN");
        } else {
            // No user is signed in.
            console.log("NOT SIGNED IN / NO USER")
        }
    });

    // End Document.ready
});
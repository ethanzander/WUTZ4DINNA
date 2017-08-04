$( document ).ready(function(){
    console.log("Ready!");




// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkv1kWVZHfNFQYII8sgOLwX6229OemGUQ",
    authDomain: "wutz4dinna.firebaseapp.com",
    databaseURL: "https://wutz4dinna.firebaseio.com",
    projectId: "wutz4dinna",
    storageBucket: "",
    messagingSenderId: "925050261550"
  };
  firebase.initializeApp(config);
  //Get Elements
  const userEmail = document.getElementById('email-input');
  const userPassword = document.getElementById('user-password');
  const btnLogin = document.getElementById('btn-login');
  const btnSignUp = document.getElementById('btn-sign-up');
  const btnLogout = document.getElementById('btn-logout');
  //Add login event
  btnLogin.addEventListener('click', e=> {
      //Get email and password
      const email = userEmail.value;
      const pass = userPassword.value;
      const auth = firebase.auth();
      //Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
  });
  //Add signup event
  btnSignUp.addEventListener('click', e =>{
    //Get email and password
    //TODO: Check for real email / validate email
      const email = userEmail.value;
      const pass = userPassword.value;
      const auth = firebase.auth();
      //Sign in
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
  });
  //Add Realtime listener
  firebase.auth().onAuthStateChange(firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser);
        btnLogout.classList.remove("hide");
    } else {
        console.log("Not logged in.");
        btnLogout.classList.add("hide");
    }
  });

// End Document.ready
});
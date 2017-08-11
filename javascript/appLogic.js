

$('document').ready(function() {
  var shoppingList = [];

  $("#submit").on("click", function() {
    event.preventDefault();
    var ingredient1 = $("#ingredient1").val();
    var ingredient2 = $("#ingredient2").val().trim();
    var ingredient3 = $("#ingredient3").val().trim();

    var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=b21780d2&_app_key=edc2ee3a9551ef7f48b3279d332a2b09&q=" + ingredient1 + "&q=" + ingredient2 + "&q=" + ingredient3;
    //search recepies ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.matches;
      console.log(response);
      for (var i = 0; i < results.length; i++) {

        var recipeDisplay = $('<div class = "recipeDisplay">');
        var image = $('<img class = "image">');
        image.attr("src", response.matches[i].smallImageUrls[0]);
        // image.attr("recipeId", response.matches[i].id);

        var recipeName = $("<p class = 'recipename'>");
        recipeName.text(response.matches[i].recipeName);

        recipeDisplay.append(image);
        recipeDisplay.attr('recipeId',response.matches[i].id);
        recipeDisplay.append(recipeName);
        console.log(response.matches[i].recipeName);
        $("#recipeDiv").append(recipeDisplay);
      }
    });
  });
  //clear recipe search
  $("#clear").on("click", function() {
    $("#recipeDiv").empty();
  })
  //code to run when you click on a recipe img
  $(document).on("click", ".image", function() {
    var recipeId = $(this).attr("recipeId");
    var queryURL2 = "http://api.yummly.com/v1/api/recipe/" + recipeId + "?_app_id=b21780d2&_app_key=edc2ee3a9551ef7f48b3279d332a2b09"

    //ajax call to get selected recipe info
    $.ajax({
      url: queryURL2,
      method: "GET"
    })
    .done(function(response) {
      $("#recipeDiv").empty();
      console.log(response);

    });

  });

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
        $("#email-input").val("");
        $("#user-password").val("");
        $("#login-input").hide();
    });
    //Add Logout event
    btnLogout.addEventListener("click", function (event) {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
            document.getElementById("btn-login").style.visibility = "visible";
            document.getElementById("btn-sign-up").style.visibility = "visible";
            $("#login-input").show();
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
        $("#email-input").val("");
        $("#user-password").val("");
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

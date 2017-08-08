
$('document').ready(function() {

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
        image.attr("recipeId", response.matches[i].id);

        var recipeName = $("<p class = 'recipename'>");
        recipeName.text(response.matches[i].recipeName);


        recipeDisplay.append(image);
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

});

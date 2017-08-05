
$('document').ready(function() {

  $("#submit").on("click", function() {
    event.preventDefault();
    var ingridient1 = $("#ingredient1").val().trim();
    var ingridient2 = $("#ingredient2").val().trim();
    var ingridient3 = $("#ingredient3").val().trim();

    var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=b21780d2&_app_key=edc2ee3a9551ef7f48b3279d332a2b09&q=" + ingridient1 + "&q=" + ingridient2;

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



        recipeDisplay.append(image);
        recipeDisplay.append(response.matches[i].recipeName);
        console.log(response.matches[i].recipeName);
        $("#recipeDiv").append(recipeDisplay);

      }





    });


  });








});

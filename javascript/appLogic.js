
$('document').ready(function() {

  $("#submit").on("click", function() {
    event.preventDefault();
    var ingridient = $("#ingridient1").val().trim();

    var queryURL = "http://food2fork.com/api/search?key=e8a5d977c8d3091746ed1bedca5893b7&q="+ingridient;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;
      console.log(response);



    });


  });





});

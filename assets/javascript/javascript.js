$(document).ready(function () {

  $(".header, .card_face, .scene").animate({ opacity: "1" }, 1);

  $(".card").on("click", function() {
    console.log("you clicked me");
    // change the css to flip the card
    var card = $(".card");
    
    if (card.attr("style") === "transform: rotateX(180deg);") {
      card.css("transform", "rotateX(360deg)");
      card.removeAttr("style");
    } else {
      card.css("transform", "rotateX(180deg)");
    }
    console.log(card.attr("style"));
  })
  // ----------------- functions ------------------------------
  // function to break down the container section resulting from onclick/onswipe 
  

  // function to build the container section again resulting from onclick/onswipe


  // onclick function for the arrow 
});
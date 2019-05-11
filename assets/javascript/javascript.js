$(document).ready(function () {

  // ======================= content flip on swipe / arrow click ===================
  var turn = 0.5; // use this to flip the container

  $(".card").on("click", function () {
    console.log("you clicked me");
    // change the css to flip the card
    var card = $(".card");
    card.css("transform", "rotateX(" + turn + "turn)");
    turn += 0.5;
  });
  // ===============================================================================

  // ======================== carousel flippy code using flickity ==================

  




});
$(document).ready(function () {

  // ======================= content flip on swipe / arrow click ===================
  var turnFloat = 0.0;

  $(".arrow-up").on("click", function () {
    console.log("clicked it");
    turnFloat += 0.5;
    $(".card").css("transform", "rotateX(" + turnFloat + "turn)");
  });

  $(".arrow-down").on("click", function () {
    console.log("clicked it");
    turnFloat -= 0.5;
    $(".card").css("transform", "rotateX(" + turnFloat + "turn)");
  });
  // ===============================================================================

  // ======================== carousel flippy code using flickity ==================
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    wrapAround: true,
    imagesLoaded: true,
    // cellSelector: '.carousel-cell'
  });



});
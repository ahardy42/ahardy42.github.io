$(document).ready(function () {

  $(".header, .card_face, .scene").animate({ opacity: "1" }, 1);

  // set the back of the card to the same height as the front
  var divHeight = $(".profileAndAbout").css("height");
  var divWidth = $(".profileAndAbout").css("width");
  $(".scene-2").css({
    "height": divHeight,
    "width": divWidth
  });


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

  // ======================== carousel flippy code ==================================

  // code to set initial rotate based on how many carousel panels there are
  var carouselPanels = $(".carousel").children();
  var carouselPanelNum = carouselPanels.length;
  var rotateY = 360 / carouselPanelNum;
  var rotateItByThis = 0;

  // code to produce proper outward shift based on width of the panel
  var panelWidth = parseInt($(".carousel-cell").css("width"));
  console.log(panelWidth);
  var zShift = Math.round((panelWidth / 2) / Math.tan(Math.PI / carouselPanelNum));

  for (i = 0; i < carouselPanelNum; i++) {
    carouselPanels[i].style.transform = "rotateY(" + rotateItByThis + "deg) translateZ(" + zShift + "px)";
    rotateItByThis += rotateY;
  };





});
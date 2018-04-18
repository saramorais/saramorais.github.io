// Show/Hide Mobile Menu
var options = $(".options");
$("#pull").click(function() {
  options.css("display") === "none" ? options.css({"display" : "block"}) && $(".name-top a").css({"color": "#333"}) && $("nav").css({"background-color": "#e9e9e9"}) : options.css({"display" : "none"});
});

// Hide Desktop Menu
$(window).resize(function() {
  if ($(window).width() >= 680) {
    options.css("display", "block");
  } else {
    options.css("display", "none");
  }
});

// Change menu bar color
$(window).on("scroll", function(e) {
  if ($(window).scrollTop() > ($(window).height()) - 80) {
    $("nav").addClass("top-bar");
  } else {
    $("nav").removeClass("top-bar");
  }
});

// Typing effect top page
var text = "Web Developer";
var iTime = 200;
var destination = $(".text-animation");

function type() {
  var letters = text.split("");

  var i = 0;
  while (i < letters.length) {
    doSetTimeout(letters[i]);
    i++;
    iTime = iTime + 200;
  }
}

function doSetTimeout(letter) {
  setTimeout(function() {
    $(destination).append(letter);
  }, iTime);
}

type();



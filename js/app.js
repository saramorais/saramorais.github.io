var options = $("#options");
$("#nav-icon").click(function() {
  options.css("display") === "none" ? options.css({"display" : "block"}) : options.css({"display" : "none"});
});
$(window).resize(function() {
  if ($(window).width() >= 680) {
    options.css("display", "block");
  } else {
    options.css("display", "none");
  }
});

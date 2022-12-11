$(document).ready(function () {
  $("js--features-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });
});

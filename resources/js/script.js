/*For the sticky navigation*/
$(document).ready(() => {
  $(".js--features-section").waypoint(
    (direction) => {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    { offset: "40px;" }
  );

  //Navigation scroll
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  $(".js--wp-1").waypoint(
    (direction) => {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%;" }
  );
  $(".js--wp-2").waypoint(
    (direction) => {
      $(".js--wp-2").addClass("animate__animated animate__flip");
    },
    { offset: "50%;" }
  );
  $(".js--wp-3").waypoint(
    (direction) => {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%;" }
  );
  $(".js--wp-4").waypoint(
    (direction) => {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "50%;" }
  );

  // MOBILE NAVIGATION
  $(".js--nav-icon").click(function () {
    var navigation = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    navigation.slideToggle(200);
    if (icon.hasClass("ion-md-menu")) {
      icon.addClass("ion-md-close");
      icon.removeClass("ion-md-menu");
    } else {
      icon.addClass(" ion-md-menu");
      icon.removeClass("ion-md-close");
    }
  });
});

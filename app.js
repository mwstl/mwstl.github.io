function toggleMenu() {
  var x = document.getElementById("menu-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

var isFixed = false;

if ($(window).width() <= 767) {
  $(document).on("scroll", function () {
    if ($("body").is(".index-page")) {
      var menubar = $("#menubar");
      var aboutSectionHeight = $("#about").height();

      if ($(window).scrollTop() >= aboutSectionHeight && !isFixed) {
        isFixed = true;
        menubar.hide().addClass("show-nav").slideDown(300);
      }

      if ($(window).scrollTop() < aboutSectionHeight / 2 && isFixed) {
        isFixed = false;
        menubar.slideUp(300, function () {
          menubar.removeClass("show-nav").hide();
        });
      }
    }
  });
} else {
}

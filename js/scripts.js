$(document).ready(function () {
  // sticky header
  var $header = $("header");
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function () {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", scrollFromTop > 350);
  });

  // smooth scrolling
  $(".menu li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  // sticky header
  var $header = $("header");
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function () {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", scrollFromTop > 350);
  });

  // responsive menu
  var body = $("body");
  // var menuTrigger = $(".js-menu-trigger");

  var menuIcon = $(".js-menu-icon");
  var closeBtn = $(".js-close-btn");

  // var mainOverlay = $(".js-main-overlay");

  menuIcon.on("click", function () {
    body.addClass("menu-is-active");
  });

  // menuTrigger.on("click", function () {
  //   body.addClass("menu-is-active");
  // });

  closeBtn.on("click", function () {
    body.removeClass("menu-is-active");
  });

  // mainOverlay.on("click", function () {
  //   body.removeClass("menu-is-active");
  // });

  $(".menu-content li a").on("click", function () {
    $("body").removeClass("menu-is-active");
  });

  // smooth scrolling
  $(".menu-content li a").on("click", function (event) {
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

  // isotope
  let $btns = $(".directors .button-group button");

  $btns.on("click", function (e) {
    $(".directors .button-group button").removeClass("active");

    e.target.classList.add("active");

    let $selector = $(e.target).attr("data-filter");

    $(".directors .grid").isotope({
      filter: $selector,
    });
    return false;
  });
});

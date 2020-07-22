$(document).ready(function () {
  // TODO: CLEAN UP THIS FILE
  //hacky way to filter tabs displayon load

  // $(".tabs-display .tabs-grid").isotope({
  //   filter: ".music-tabs",
  // });

  // sticky header
  var $header = $("header");
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function () {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", scrollFromTop > 300);
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

  //isotope tabs
  // isotope
  let $tabs = $(".tabs-display .button-group button");

  $tabs.on("click", function (e) {
    $(".tabs-display .button-group button").removeClass("active");

    e.target.classList.add("active");

    let $selector = $(e.target).attr("data-filter");

    // check data filter and switch background
    if ($selector == ".music-tabs") {
      $(".tabs-display").css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(img/music2-kijito.JPG)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      });
    } else if ($selector == ".events-tabs") {
      $(".tabs-display").css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(img/MWG07934-min.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      });
    } else {
      $(".tabs-display").css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(img/advert1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "200px",
        paddingBottom: "200px",
      });
    }

    $(".tabs-display .tabs-grid").isotope({
      filter: $selector,
    });
    return false;
  });

  // isotope directors
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

  $(".owl-carousel").owlCarousel({
    nav: false,
    center: true,
    loop: true,
    autoplay: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });
});

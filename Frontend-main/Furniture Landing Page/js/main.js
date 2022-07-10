$(function () {
  $(".works-carousel").owlCarousel({
    // orientation:h;
    loop: true,
    margin: 30,
    startPosition: 0,
    nav: true,
    dots: false,
    items:1,
    navText: ['<img src="img/Arrow_left1.png">', '<img src="img/Arrow_right.png">'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
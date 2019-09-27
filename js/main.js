$(function() {

    // Toggle open
    $(".sideNav li").on("click", function(e) {
        $(this).find(".drop").slideToggle();
        $(this).siblings().find(".drop").slideUp();
        $(this).find("i").toggleClass("open");
        $(this).siblings().find("i").removeClass("open");
        e.stopPropagation();
    });


    // open Side Nav
    $(".menuTriger").on("click", function() {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
        setTimeout(function() {
        $(".sideNav").addClass("origin");
        },500)
    });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if($(".sideNav").hasClass("open")){
        $(".menuTriger").fadeIn();
        $(".navover").removeClass("open");
        $(".sideNav").toggleClass("open");
        // $(".sideNav").toggleClass("origin");
        $("body").css("overflow", "auto");
        setTimeout(function() {
        $(".sideNav").removeClass("origin");
        },600)
    }
  });

  // Search
  $(".searBtn").on("click", function() {
    $(".search").toggleClass("open");
    $(".overlay").fadeIn();
  });

  if($(window).width() < 992){
    $(".search, .search i").on("click", function() {
      $(".search").removeClass("open");
      $(".overlay").fadeOut();
    });
    $(".search .cont").on("click", function(e) {
      e.stopPropagation();
    });
  }

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    navText: ["<span><i class='fas fa-chevron-right'></i></span>","<span><i class='fas fa-chevron-left'></i></span>"]
  });

  // Products Slider
  $('.categories .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    margin:33,
    stagePadding: 30,
    responsive:{
      0:{
          items:1,
          dots: true,
          stagePadding: 0
      },
      600:{
          items:2,
          dots: true,
          stagePadding: 0
      },
      992:{
          items:3,
          nav:true
      },
      1200:{
          items:4,
          nav:true
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  // Products
  // clients Slider
  $('.disc .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    dots: true,
    nav: true,
    loop:true,
    margin:16,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      992:{
          items:4,
          stagePadding: 10
      },
      1200:{
          items:5,
          stagePadding: 0
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove()
    });
  });

})
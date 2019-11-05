// NOT USED, SAVED FOR REFERENCE

$(document).ready(function () {

  AOS.init({ useClassNames: true });

  if (!$('body').hasClass('variation-rhs-nav')) {

    $('.hamburger').click(function (e) {

      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#menu').addClass('small-active');
      } else {
        $(this).removeClass('active');
        $('#menu').removeClass('small-active');
      }

      e.preventDefault();
    });

    $('#menu ul li a').click(function () {
      if ($('#menu').hasClass('small-active')) {
        $('#menu').removeClass('small-active');
        $('.hamburger').removeClass('active');
      }
    });

  } else {

    /* if right side nav variation - close it on link click */
    $('.variation-rhs-nav #side-nav nav ul li a').click(function () {
      $('#side-nav h3 span').click();
    });

  }



  if (!$('body').is('[class^="variation"]') || $('body').is('[class="variation-cta"]')) {
    // $(window).resize(function(){		
    // 	fixMenuItems();
    // });

    // fixMenuItems();

    // More.. menu item
    $('#menu-more-button').click(function (e) {
      $('#menu-more').toggle();
      e.preventDefault();
    });
  } else {
    $('#menu-more-button').hide();
  }

  // for CTA template scroll to contact section on hero click
  $('#hero .button').click(function (e) {
    var dest = $(this).attr("href");
    $(this).foundation('scrollToLoc', $(dest));
    e.preventDefault();
  });

  //
  if (!$('#hero').hasClass('not-found')) {
    $('#hero .container').css('background-image', 'url(\'' + $('#hero .container img').attr('src') + '\')').addClass('loaded');
  }

  $('#video .container').css('background-image', 'url(\'' + $('#video .container img').attr('src') + '\')').addClass('loaded');

  $('#video .blue-stripe').height($('#video .section-title').outerHeight());


  // window scroll
  if ($('header').hasClass('multiple-sites')) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 90) {
        $('header').addClass('hide-switch').removeClass('show-switch');
      } else {
        $('header').addClass('show-switch').removeClass('hide-switch');
      }
    });

    $('#linked-sites-mobile .handle a').click(function () {
      var popup = $(this).parent().parent();
      if (popup.hasClass("open")) {
        popup.removeClass("open");
      } else {
        popup.addClass("open");
      }
    });
  }


  // /* Customization Nightmare LONGFELLOW CLIENT */
  // if(Foundation.MediaQuery.atLeast('medium')) {
  //       $('#gallery .flexslider').flexslider({
  //           controlNav: false,
  //           animation: 'slide',
  //           animationLoop: false,
  //           slideshow: false
  //       });
  // }

});





/* @codekit-prepend "../../../../../webroot/themes/onepage/main.js" */
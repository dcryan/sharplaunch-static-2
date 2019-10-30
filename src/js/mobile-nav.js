
$(function() {
  $('.header__menu-button').click(function(e) {
    e.preventDefault();

    $('.hamburger').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('menu-active');
  });
});
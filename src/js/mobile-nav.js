
function toggleMenu() {
  $('.hamburger').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
  $('body').toggleClass('menu-active');
}

$(function () {
  $('.header__menu-button').click(function (e) {
    e.preventDefault();
    toggleMenu();
  });


  $('.mobile-menu a, .mobile-menu button').click(function (e) {
    // We don't want to preventDefault in this case.
    // The user is probably going to the Client Portal, etc.
    // But we still want to toggle the menu just in case.
    // e.preventDefault();
    toggleMenu();
  });

});
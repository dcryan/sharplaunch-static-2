import '../scss/main.scss';
import './mobile-nav';

import AOS from 'aos';
AOS.init();

$(function () {

  window.onresize = setHeader;
  var headerContainer = document.getElementsByClassName("header__container")[0];
  var headerLogo = headerContainer.getElementsByClassName("header__logo")[0];
  var navLinks = headerContainer.getElementsByClassName("header__nav-link");
  var moreButton = headerContainer.getElementsByClassName("header__nav-more")[0];
  var navLinkButton = headerContainer.getElementsByClassName("header__nav-button")[0];
  var moreNavLinks = moreButton.getElementsByClassName("more__nav-link");

  var navLinkWidths = getHeaderWidths(navLinks);


  function setHeader() {
    hideAll();

    var localWidth = headerLogo.clientWidth + navLinkButton.clientWidth;
    var navLinksContainerWidth = headerContainer.clientWidth - localWidth;

    for (let i = 0; i < navLinkWidths.length; i++) {
      var width = navLinkWidths[i];
      localWidth += width;

      if (localWidth > navLinksContainerWidth) {
        // Needs "more"
        setMore(i);
        break;
      }

      navLinks[i].style.display = 'inherit';
    }
  }

  function setMore(indexForRemaining) {
    moreButton.style.display = "inherit";

    for (let i = indexForRemaining; i < moreNavLinks.length; i++) {
      moreNavLinks[i].style.display = 'inherit';
    }
  }

  function hideAll() {
    moreButton.style.display = "none";

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.display = "none";
    }

    for (let i = 0; i < moreNavLinks.length; i++) {
      moreNavLinks[i].style.display = "none";
    }
  }

  function getHeaderWidths(navLinks) {
    var widths = [];
    for (let i = 0; i < navLinks.length; i++) {
      widths.push(navLinks[i].clientWidth);
    }

    return widths;
  }

  setHeader();


  $(".header__nav-more button").click(function(e) {
    e.preventDefault();
    $(".header__nav-more-dropdown").toggleClass("active");
  });
});
import $ from 'jquery';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';


$(document).ready(function () {


  $(window).resize(recalcPaddingForGallery);
  recalcPaddingForGallery();
});

function recalcPaddingForGallery() {
  if (MediaQuery.is('small only')) {
    console.log('medium')
    recalcPaddingForGalleryMedium();
  }
  else {
    console.log('large')
    recalcPaddingForGalleryLarge();
  }
}

function recalcPaddingForGalleryMedium() {
  const percentWidth = 32 / 1296;
  const percentHeight = 16 / 508;
  const galleryGridWidth = $('.gallery-grid').width();
  const galleryGridHeight = $('.gallery-grid').height();
  const paddingWidth = (galleryGridWidth * percentWidth) / 4;
  const paddingHeight = (galleryGridHeight * percentHeight) / 2;

  $('.photo1').css('padding-top', 0);
  $('.photo1').css('padding-right', 0);
  $('.photo1').css('padding-bottom', paddingHeight);
  $('.photo1').css('padding-left', 0);

  $('.photo2').css('padding-top', paddingHeight);
  $('.photo2').css('padding-right', 0);
  $('.photo2').css('padding-bottom', paddingHeight);
  $('.photo2').css('padding-left', 0);

  $('.photo3').css('padding-top', paddingHeight);
  $('.photo3').css('padding-right', 0);
  $('.photo3').css('padding-bottom', paddingHeight);
  $('.photo3').css('padding-left', 0);

  $('.photo4').css('padding-top', paddingHeight);
  $('.photo4').css('padding-right', paddingWidth);
  $('.photo4').css('padding-bottom', 0);
  $('.photo4').css('padding-left', 0);

  $('.photo5').css('padding-top', paddingHeight);
  $('.photo5').css('padding-right', 0);
  $('.photo5').css('padding-bottom', 0);
  $('.photo5').css('padding-left', paddingWidth);
}

function recalcPaddingForGalleryLarge() {
  const percentWidth = 32 / 1296;
  const percentHeight = 16 / 508;
  const galleryGridWidth = $('.gallery-grid').width();
  const galleryGridHeight = $('.gallery-grid').height();
  const paddingWidth = (galleryGridWidth * percentWidth) / 4;
  const paddingHeight = (galleryGridHeight * percentHeight) / 2;

  $('.photo1').css('padding-top', 0);
  $('.photo1').css('padding-right', paddingWidth);
  $('.photo1').css('padding-bottom', paddingHeight);
  $('.photo1').css('padding-left', 0);

  $('.photo2').css('padding-top', paddingHeight);
  $('.photo2').css('padding-right', paddingWidth);
  $('.photo2').css('padding-bottom', 0);
  $('.photo2').css('padding-left', 0);

  $('.photo3').css('padding-top', 0);
  $('.photo3').css('padding-right', paddingWidth);
  $('.photo3').css('padding-bottom', 0);
  $('.photo3').css('padding-left', paddingWidth);

  $('.photo4').css('padding-top', 0);
  $('.photo4').css('padding-right', 0);
  $('.photo4').css('padding-bottom', paddingHeight);
  $('.photo4').css('padding-left', paddingWidth);

  $('.photo5').css('padding-top', paddingHeight);
  $('.photo5').css('padding-right', 0);
  $('.photo5').css('padding-bottom', 0);
  $('.photo5').css('padding-left', paddingWidth);
}
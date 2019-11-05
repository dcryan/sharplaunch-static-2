// This adjusts the 'flex-basis' of the section-title__text
// We need to do this so that the separators "hug" the section-title text
$(function () {
  $(window).resize(adjustSectionHeaders);
  var $sectionTitles = $('.section-title__text');

  function adjustSectionHeaders() {
    reset();

    $sectionTitles.each(function () {
      var height = $(this).height();
      var lineHeight = parseInt($(this).css('line-height'), 10)

      if (height > lineHeight) {
        $(this).css('flex-basis', 0);
      }
    })
  }

  function reset() {
    $sectionTitles.each(function () {
      $(this).css('flex-basis', 'auto');
    });

  }

  adjustSectionHeaders();
});
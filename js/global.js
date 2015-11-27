var $logoBlock = $( ".logo-caps" );
var $searchGreen = $( '.search-container' );
$currentScreen = $(window);

$currentScreen.scroll(function () {
  'use strict';
  var scroll = $currentScreen.scrollTop();

  if (scroll >= 100) {
    $logoBlock.addClass( "light-up" ),
    $searchGreen.addClass( " make-blue" );
  } else {
    $logoBlock.removeClass( "light-up" ),
    $searchGreen.removeClass( " make-blue" );
  }
});
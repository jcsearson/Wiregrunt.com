var $logoBlock = $( ".logo-caps" ),
$currentScreen = $(window);

$currentScreen.scroll(function () {
	var scroll = $currentScreen.scrollTop();

	if (scroll >= 100) {
		$logoBlock.addClass( "make-blue" );
	} else {
		$logoBlock.removeClass( "make-blue" );
	}
});
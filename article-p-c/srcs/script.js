$(document).ready(function(){
	$('.share-button').on('click', () => {
		$('.share-panel').toggle();
	}),
	$('.share-button').click(function(){
		$('.share-button').toggleClass("poop");
	});
})

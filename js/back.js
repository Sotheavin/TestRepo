$(document).ready(function(){

	$('a#back').click(function(){
		parent.history.back();
		return false;
	});

	$('.handle').on('click',function(){
		$('nav ul').toggleClass('showing',1500);
	});
	
});
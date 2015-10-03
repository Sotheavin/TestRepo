$(document).ready(function(){
	$('#content').load('../Navigation_Style/Home.html');

	$('.handle').on('click',function(){
		$('nav ul').toggleClass('showing',1500);
	});

	$('ul li a').on('click',function(){
		var page = $(this).attr('href');
		$('#content').load('../Navigation_Style/' + page + '.html' );
		return false;
	});
});	
//-----------Clock and Date

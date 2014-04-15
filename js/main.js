$(function () {
	var $fotoramaDiv = $('.slider').fotorama();
	var fotorama = $fotoramaDiv.data('fotorama');
	$('.slider-prev').on('click', function(){
		fotorama.show('<');
	});
	$('.slider-next').on('click', function(){
		fotorama.show('>');
	});
});

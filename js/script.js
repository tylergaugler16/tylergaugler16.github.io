$(document).ready(function(){
	$('.main_circle').on('mouseenter',(function(){
	addText();
	addFilter();
		
	}));

	$('.main_circle').on('mouseleave',(function(){
	removeText();
	removeFilter();
		
	}));


});

function addText(){
	$('.image_text').css('font-size','2.5em');
	
};

function addFilter(){
	$('img').css({
			'-webkit-filter' : 'opacity(75%)',
			'filter'		 : 'opacity(75%'
		});
};

function removeText(){
	$('.image_text').css('font-size','0');
	
};

function removeFilter(){
	$('img').css({
			'-webkit-filter' : 'opacity(100%)',
			'filter'		 : 'opacity(100%'
		});
};


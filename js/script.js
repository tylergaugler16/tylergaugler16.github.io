// var $options= {
// 	host: 		    'https://bibles.org',
// 	autorization:   'lMA8qeVr2vfJOqTr47J08pokB082519CiMa7vf5m',
// 	path: 			'/v2/verses/eng-GNTD:Acts.8.34.js'
// };




$(document).ready(function(){
var fixmeTop = $('div.button-navbar').offset().top;  
	

	$('.main_circle').on('mouseenter',(function(){
		addText();
		addFilter();
			
	}));

	$('.main_circle').on('mouseleave',(function(){
		removeText();
		removeFilter();
		
	}));

	$('.main_circle').on('click',(function(){
		console.log('in function');
		if($('.popout').css('display')=='none'){
			
		moveLeft();
	}
		else{
		moveRight();
	}

	}));

	$(window).on('scroll',(function() {    
	           
	
    var currentScroll = $(window).scrollTop(); 

    if (currentScroll >= fixmeTop) {           
        $('.button-navbar').addClass('stick');
        $('.button-navbar').css({
        	'background-color':'rgb(225,225,221',
        	'padding-top': '12px',
        	'border-radius': '10%'
        });
        moveLeft();

    }else {                                     
        $('.button-navbar').removeClass('stick');
        $('.button-navbar').css({
        	'background-color':''
        	// 'padding-left' : '32%'
        });
        // moveRight();
        
    }

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

function moveLeft(){
	$('.main_circle').css('margin-left', 0);
	$('.popout').css('display','inline');
};

function moveRight(){
	$('.popout').css('display','none');
	$('.main_circle').css('margin-left', '36%');
};




// $('.main_circle').click(function() {
//   $.ajax({
//   //The URL to process the request
//     'url' : 'http://bibles.org/v2/verses/eng-GNTD:Acts.8.34.js',
//     'authentication' : 'lMA8qeVr2vfJOqTr47J08pokB082519CiMa7vf5m',
//     'type' : 'GET',
//     'dataType' : 'jsonp',
//   //The response from the server
//     'success' : function(data) {
//       if (data == "success") {
//         alert('request sent!');
//       }
//     }

//   });
// });


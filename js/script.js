// var $options= {
// 	host: 		    'https://bibles.org',
// 	autorization:   'lMA8qeVr2vfJOqTr47J08pokB082519CiMa7vf5m',
// 	path: 			'/v2/verses/eng-GNTD:Acts.8.34.js'
// };

var experienceTop;
var skillsTop;
var projectTop;


$(document).ready(function(){

var fixmeTop  = $('div.button-navbar').offset().top; 



	$('.main_circle').on('mouseenter',(function(){
		if($(window).width() > 768){
			addText();
		}
		
		addFilter();
			
	}));

	$('.main_circle').on('mouseleave',(function(){
		removeText();
		removeFilter();
		
	}));

	$('.main_circle').on('click',(function(){
		if($('.popout').css('display')=='none'){
			
		moveLeft();
	}

	}));

	// to go scroll to experience section on button click

	$('button.experience').on('click',function(){
		moveLeft();
		$('html, body').animate({
        scrollTop: (experienceTop-50)
    	}, 1000);
	});

	$('button.skills').on('click',function(){
		moveLeft();
	
		$('html, body').animate({
        scrollTop: (skillsTop-50)
    	}, 1000);
		
	});

	$('button.projects').on('click',function(){
		moveLeft();
		$('html, body').animate({
        scrollTop: (projectTop-50)
    	}, 1000);
	});





	$(window).on('scroll',(function() {    
	           
	
    var currentScroll = $(window).scrollTop(); 

    if (currentScroll >= fixmeTop) { 
           
        $('.button-navbar').addClass('stick');
        $('.button-navbar').css({
        	'background-color':'#666666 ',
        	'padding-top': '12px',
        	'border-radius': '10%'
        });
        moveLeft();

    }else {                                     
        $('.button-navbar').removeClass('stick');
        $('.button-navbar').css({
        	'background-color':'#666666'
        	// 'padding-left' : '32%'
        });
        // moveRight();
        
    }
    
    if(currentScroll >= (experienceTop-55) && currentScroll <= (skillsTop-55)){
    	
    	$('button.experience').css('background-color', 'rgb(157,157,154)');
   
    }else{
 		$('button.experience').css('background-color','white');

    }

    if(currentScroll >= (skillsTop-55) && currentScroll <= (projectTop-55)){
    	// console.log("skills: "+skillsTop);
    	$('button.skills').css('background-color','rgb(157,157,154)');
    }else{
    	$('button.skills').css('background-color','white');
    }

    if(currentScroll >= (projectTop-55)){
    	$('button.projects').css('background-color','rgb(157,157,154)');
    }else{
    	$('button.projects').css('background-color','white');
    }

	}));



	 $( window ).resize(function() {
		fixmeTop      = $('div.button-navbar').offset().top; 
		experienceTop = $('span.experience').offset().top;
		skillsTop     = $('span.skills').offset().top;
		projectTop    = $('span.projects').offset().top;
	 	console.log("Resize: "+ experienceTop);
	});


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
	$('.popout').css('display','inline-block');
	experienceTop = $('span.experience').offset().top;
	skillsTop     = $('span.skills').offset().top;
	projectTop    = $('span.projects').offset().top;

	


	
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


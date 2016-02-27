// var $options= {
// 	host: 		    'https://bibles.org',
// 	autorization:   'lMA8qeVr2vfJOqTr47J08pokB082519CiMa7vf5m',
// 	path: 			'/v2/verses/eng-GNTD:Acts.8.34.js'
// };

$(document).ready(function(){
	$('.main_circle').on('mouseenter',(function(){
	addText();
	addFilter();
		
	}));

	$('.main_circle').on('mouseleave',(function(){
	removeText();
	removeFilter();
		
	}));

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


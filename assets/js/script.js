$(document).ready(function(){

   if(typeof AOS != 'undefined'){
     AOS.init({
      duration: 500,
    });
   }
   var aboutMeSection = $('div#about-me').offset().top;
   var skillsSection = $('div#skills').offset().top;
   $(document).on('scroll', function(){

     var currentScroll = $(window).scrollTop();
     console.log(currentScroll);
       if(currentScroll < aboutMeSection){
         $('div.navigation-tabs').removeClass('teal-theme');
         $('div.navigation-tab').removeClass('is-active');
         $('div.navigation-tab#home-tab').addClass('is-active');
         $('div.now-has-white-background').removeClass('now-has-white-background');
       }
       else if (currentScroll > aboutMeSection && currentScroll < skillsSection) {
         console.log('yer');
         $('div.navigation-tabs').addClass('teal-theme');
         $('div.navigation-tab').removeClass('is-active');
         $('div.navigation-tab#about-tab').addClass('is-active');
         $('div.now-has-white-background').removeClass('now-has-white-background');
         $('div.about-me-section').addClass('now-has-white-background');
       }
       else if (currentScroll >= skillsSection) {

         $('div.navigation-tabs').removeClass('teal-theme');
         $('div.navigation-tab').removeClass('is-active');
         $('div.navigation-tab#skills-tab').addClass('is-active');
         $('div.now-has-white-background').removeClass('now-has-white-background');
         $('div.skills-section').addClass('now-has-white-background');
       }
       else{
         console.log('here');
       }
    });
}
);

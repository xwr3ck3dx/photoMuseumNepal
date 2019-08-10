$(document).ready(function(){

    $('.banner-main').css('margin-top','-'+$('.menu').height());
    $('.banner-content').height($('.banner-main').height()+8);

    $('.collapse ul').css('line-height',$('.navbar').outerHeight);
    
})
$(window).scroll(function() {
    if(window.innerWidth()>500){
        if ($(this).scrollTop() >200) { // this refers to window
            $('.navbar').addClass('scroll-nav');
           
         }
         else{
             $('.navbar').removeClass('scroll-nav');
         }
    }
    
});
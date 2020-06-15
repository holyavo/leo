var slideNow = 1;
var slideCount = $('.footer-slider__container').children().length;
var translateWidth = 0;
var slideInterval = 4000;

function nextSlideFooter() {
    if(slideNow == slideCount){
        slideNow = 0;   
    }
    translateWidth = -$('.footer-slider__viewport').width() * (slideNow);
    $('.footer-slider__container').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
}

$(document).ready(function () {
    var switchInterval = setInterval(nextSlideFooter, slideInterval);
    
    $('.testimonials').hover(function(){
            clearInterval(switchInterval);
    },function() {
            switchInterval = setInterval(nextSlideFooter, slideInterval);
    });
});

function prevSlideFooter() {
    
    if (slideNow == 1) {
        slideNow = slideCount +  1; 
    }
    translateWidth = -$('.footer-slider__viewport').width() * (slideNow - 2);
    $('.footer-slider__container').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow--;
}

$('.next-slide').click(function() {
        nextSlideFooter();
    });

    $('.previouse-slide').click(function() {
        prevSlideFooter();
});
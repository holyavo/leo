var slideNowH = 1;
var slideCount = $('.header-slider__container').children().length;
var translateWidth = 0;

function nextSlide() {
    if(slideNowH == slideCount){
        slideNowH = 0;   
    }
    translateWidth = -$('.header-slider__viewport').width() * (slideNowH);
    $('.header-slider__container').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNowH++;
}

$(document).ready(function () {
});

function prevSlide() {
    
    if (slideNowH == 1) {
        slideNowH = slideCount +  1; 
    }
    translateWidth = -$('.header-slider__viewport').width() * (slideNowH - 2);
    $('.header-slider__container').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNowH--;
}

$('.next').click(function() {
        nextSlide();
    });

    $('.previouse').click(function() {
        prevSlide();
});
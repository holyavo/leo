$(document).ready(function () {

    $(window).load(function(){
        if($(window).width() <= '980'){
            $('#responsive').insertAfter('.tab:nth-child(1)');
            $('#commerce').insertAfter('.tab:nth-child(3)');
            $('#daily-blog').insertAfter('.tab:nth-child(5)');
            $('#search-based').insertAfter('.tab:nth-child(7)');
        }else{
            $('.tabs-info').append($('#responsive'));
            $('.tabs-info').append($('#commerce'));
            $('.tabs-info').append($('#daily-blog'));
            $('.tabs-info').append($('#search-based'));
        }
    });
    
    $(window).resize(function(){
        if($(window).width() <= '980'){
            $('#responsive').insertAfter('.tab:nth-child(1)');
            $('#commerce').insertAfter('.tab:nth-child(3)');
            $('#daily-blog').insertAfter('.tab:nth-child(5)');
            $('#search-based').insertAfter('.tab:nth-child(7)');
        }else{
            $('.tabs-info').append($('#responsive'));
            $('.tabs-info').append($('#commerce'));
            $('.tabs-info').append($('#daily-blog'));
            $('.tabs-info').append($('#search-based'));
        }
    });
    
    $('.tab__link').click(function(e) {
        e.preventDefault();

        var $this = $(this);
        
        console.log($this.next('.tabs-info__block').attr('id'));

        if ($this.next().hasClass('tabs-info__block--active')) {
            $this.next().removeClass('tabs-info__block--active');
            $this.next().slideUp(350);
        } else {
            $this.next().toggleClass('tabs-info__block--active');
            $this.next().slideToggle(350);
        }
    });
    
    
});
$(document).ready(function () {
    
    //$('#responsive').addClass('tabs-info__block--active');
    //$('a[href="#responsive"]').addClass('tab__link--active');
   
    $('.tab__link').click(function (event) {
       var link = $(this).attr('href');
       //console.log(linkValue);
        //Убирает класс-active при двойном нажатии
        if($(link).hasClass('tabs-info__block--active')){
            $(link).removeClass('tabs-info__block--active');
            $(this).removeClass('tab__link--active');

        }
        else{
            $(link).addClass('tabs-info__block--active');
            $('a[href="' + link + '"]').addClass('tab__link--active');

            $('.tabs-info__block').each(function(index , value){
            if( $(this).hasClass('tabs-info__block--active') && '#' + $(this).attr('id') != link ){
                $(this).removeClass('tabs-info__block--active');
                $('a[href="' + '#' + $(this).attr('id')+ '"]').removeClass('tab__link--active');
                //console.log('div' + index + ':' + $(this).attr('id') + linkValue);
            }
            });
        }
   });
});
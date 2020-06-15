
 $(document).ready(function(){
    $('.tab').on("click","a", function (event) {
        event.preventDefault();
       /* var id  = $(this).attr('href'),
            top = $(id).offset().top;*/
        var top =$(this).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

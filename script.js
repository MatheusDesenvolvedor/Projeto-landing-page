$(function(){
    $('nav.mobile i').click(function(){
        var el = $(this).parent().find('ul');
        if(el.is(':visible') == false){
            el.fadeIn();
            setTimeout(function(){
                $('.conteudo-header').css('margin-top','17%');
            },100)
        }else{
            el.fadeOut();
            setTimeout(function(){
                $('.conteudo-header').css('margin-top','8%');
            },400)
        }
    })
})
function recebe_id(parametro){
    let id_retorno = '#'+ parametro

    if(id_retorno == '#expprof'){
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.timeline').toggle(1000);
    }else if (id_retorno == '#foracad'){
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
       // $('.formaca').toggleClass('geral',1000); 
       $('.formaca').toggle(1000);
    }else if (id_retorno == '#forcomp'){
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.formcom').toggle(1000);
    }else if (id_retorno == '#certf'){
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.certifi').toggle(1000);
    }else{
        console.log('Sem Registro')
    }

}


$(document).ready(function () {
    $('h2 i').click(function(){
    let id_h2 = $(this).parent().attr('id')
        recebe_id(id_h2)
    })

});
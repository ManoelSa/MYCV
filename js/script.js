$(document).ready(function () {
    $('#expprof').click(function () {
        $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.timeline').toggle(1000);

    });
});


$(document).ready(function () {
    $('#foracad').click(function () {
        $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.formaca').toggleClass('geral',1000);    
    });
});

$(document).ready(function () {
    $('#forcomp').click(function () {
        $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.formcom').toggleClass("geral");
     });
});


$(document).ready(function () {
    $('#certf').click(function () {
        $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.certifi').toggleClass("geral");

    });
});

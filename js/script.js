$(document).ready(function(){
    $("#exp_add").click(function(){
        $(".timeline").toggle(1000);
        $('#exp_prof').children('h2').remove(); 
        $("#exp_prof").append("<h2><i id='exp_rem' class='material-icons' style='cursor: pointer;'>remove_circle</i> Experiência Profissional</h2>");
    });
});

$(document).ready(function(){
    $(".perfprof").click(function(){
        $(".timeline").hide(1000);
        $('#exp_prof').children('h2').remove(); 
        $("#exp_prof").append("<h2><i id='exp_add' class='material-icons' style='cursor: pointer;'>add_circle</i> Experiência Profissional</h2>");
    });
});
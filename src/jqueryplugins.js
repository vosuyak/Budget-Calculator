$(function(){
    console.log('PLUGIN WORKING ');
    $(".button-collapse").sideNav();
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');
    $('.modal').modal();
    $('button').on('click',function(){
        $('form').find('input').val('');
    });
});
console.log(';log');
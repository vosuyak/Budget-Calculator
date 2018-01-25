$(function(){
    var incomeOwner = $('#incomeOwner');
    var incomeAmount = $('#incomeAmount');
    var incomePercent = $('#incomePercent');
    var incomeBtn = $('#addIncomeBtn');  

    var budgetTitle = $('#budgetTitle');
    var budgetAmount = $('#budgetAmount');
    var monthlyBtn = $('#addMonthlyBtn'); 
    console.log('PLUGIN WORKING '); 
    $(".button-collapse").sideNav();
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');
    $('.modal').modal();
    $('button').on('click',function(){
        $('form').find('input').val('');
    });
    incomeBtn.attr('disabled',true).css('opacity','.4');    
    $('input').keyup(function(){
        if(incomeOwner.val().length !=0 && incomeAmount.val().length !=0 && incomePercent.val().length !=0){
            incomeBtn.attr('disabled',false).css('opacity','1');
        }else{
            incomeBtn.attr('disabled',true);
        }
    }); 

    monthlyBtn.attr('disabled',true).css('opacity','.4');    
    $('input').keyup(function(){
        if(budgetTitle.val().length !=0 && budgetAmount.val().length !=0){
            monthlyBtn.attr('disabled',false);
        }else{
            monthlyBtn.attr('disabled',true).css('opacity','1');
        }
    }); 

});
console.log(';log');
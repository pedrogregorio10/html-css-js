/*Ver mais do primeiro painel de produtos*/
$(function(){
   $('.artigo1 .ver-mais').click(function () {          
        $('.artigo1').toggleClass('show');  
      
        if($('.show').is('.show')){
            $('.artigo1 .ver-mais').text('Ver menos');
        }else{
            $('.artigo1 .ver-mais').text('Ver mais...')
        }
    
   });
/*Ver mais do segundo painel de produtos*/
   $('.artigo2 .ver-mais').click(function () {          
    $('.artigo2').toggleClass('show'); 
    if($('.show').is('.show')){
        $('.artigo2 .ver-mais').text('Ver menos');
    }else{
        $('.artigo2 .ver-mais').text('Ver mais...')
    }
    $('#numero').mask('999 999 999 -999')
});
}
)
//$(this).parent().toggleClass('show')


//Start GO
$(document).ready(function(){
  /* $('div').hide(1000);單位:毫秒=一秒*/
  /*$('red')hide(2000);*/
   $('div').click(function(){
      $(this).hide(1000);
   });
   $('div').mouseenter(function(){
      $(this).animate({height:"+=50px"})
   });
   $('div').mouseleave(function(){
      $(this).animate({height:"-=50px"})
   });
});

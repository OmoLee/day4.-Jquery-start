//你的程式碼寫在這邊
$(document).ready(function(){
  $('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggle(500);//toggle:點後可出現可消失
  });

  $('.arrow-next').click(function(){
    var nowSlide = $('.active-slide');
    var nextSlide =nowSlide.next();

    if(nextSlide.length === 0){
        nextSlide = $('.slide').first().addClass('active-slide');
    }

    nowSlide.fadeOut(600);
    nextSlide.fadeIn(600);
    nowSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');
// --------------------------------------------
    $('.dot active-dot').click(function(){
      var nowDot = $('.dot active-dot');
      var nextDOT =nowDot.next();

      if(nextDot.length === 0){
          nextDot = $('.dot').first().addClass('dot active-dot');
      }

      nowDot.fadeOut(600);
      nextDot.fadeIn(600);
      nowDot.removeClass('dot active-dot');
      nextDot.addClass('dot active-dot');
    });
// 上一張.prev().last()
  });
});

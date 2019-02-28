$('#animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("LeftToRight");
  }
 });
});


$('#animation1').css('visibility','hidden');
$(window).scroll(function(){
   
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation1').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});


$('#animation2').css('visibility','hidden');
$(window).scroll(function(){
   
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation2').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});


$('#animation3').css('visibility','hidden');
$(window).scroll(function(){
   
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation3').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});





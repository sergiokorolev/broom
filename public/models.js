$(function(){
  $('.about').hide();

  $('.moto').click(function(){
    $(this).next().slideToggle({duration: 300});
  });
});

// HEADER
$(document).ready(function() {
  $('.menu__icon').click(function(event) {
    $('.menu__icon,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
// HEADER


// ibg 
function ibg(){

  $.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
  });
  }
  
  ibg();
// ibg 


// slider 
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight:true,
    autoplay:true,
  });
});
// slider 


// add class on scroll 
let scrollpos = window.scrollY

const header = document.getElementById("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("header-shadow")
const remove_class_on_scroll = () => header.classList.remove("header-shadow")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})
// add class on scroll 
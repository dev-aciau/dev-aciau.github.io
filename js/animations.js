$('.hamburger').on('click', function() {
  $('.menus.nav-group').toggleClass('show');
})

$('.menu-item').on('click', function() {
  $('.menus.nav-group').toggleClass('show');
})

window.addEventListener('scroll', () =>{
  if (window.scrollY >= 56) {
    $('nav').css({'background-color': `#212121`});
  }else if(window.scrollY < 56){
    $('nav').css({'background-color': `rgba(64, 56, 55, 0)`});
  }
})

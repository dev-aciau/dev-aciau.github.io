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

let mybutton = document.getElementById("button-top-page");
// let btnWhatsapp = document.getElementById("btnWhatsapp");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      // btnWhatsapp.style.display ="block";
    } else {
      mybutton.style.display = "none";
      // btnWhatsapp.style.display ="none";
    }
  }
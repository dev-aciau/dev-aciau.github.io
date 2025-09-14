$('.owl-1').owlCarousel({
    autoWidth:false,
    autoplay:false,
    dotsEach:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop: true,
    margin: 10,
    nav: false,
    stagePadding: 7,
    navText: ["<span class='arrow-left regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> < </span>","<span class='arrow-right regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> > </span>"],
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-2').owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    stagePadding: 7,
    nav: false,
    navText: ["<span class='arrow-left-2 regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> < </span>","<span class='arrow-right-2 regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> > </span>"],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-3').owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    nav:true,
    stagePadding: 7,
    navText: ["<span class='arrow-left-2 regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> < </span>","<span class='arrow-right-2 regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> > </span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-4').owlCarousel({
    autoplay:true,
    dotsEach:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop: true,
    margin: 10,
    nav: true,
    stagePadding: 7,
    navText: ["<span class='arrow-left regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> < </span>","<span class='arrow-right regular-font d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'> > </span>"],
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
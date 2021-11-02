let myNav = $(".home .navbar");

console.log(myNav);

$(window).scroll(function() {

    let scrollTop = $(window).scrollTop();

    let aboutSec = $("#about").offset().top;

    if (scrollTop >= aboutSec) {
        $(".home .navbar").addClass("Ahmad");
    }

})
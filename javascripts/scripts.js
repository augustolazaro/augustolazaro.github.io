$(document).ready(function() {
    $(".menu-toggler").on("click", function(){
        $(".navigation").toggleClass("show-menu");
    });

    var slider = document.querySelector(".Wallop");
    var wallop = new Wallop(slider);
});

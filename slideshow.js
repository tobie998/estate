$(document).ready(function(){
    var slidesIndex = 1;
    showSlides(slidesIndex);

    function plusSlide(n) {
        showSlides(slidesIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = $(".my-slide");
        var dots = $(".thumbnail-item");

        if(n > slides.length) {
            slidesIndex = 1;
        }

        if (n < 1) {
            slidesIndex = slides.length;
        }

        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for(i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" thumbnail-item-active", "");
        }

        slides[slidesIndex - 1].style.display = "block";
        dots[slidesIndex - 1].className += " thumbnail-item-active";
    }

    $(".btn-thumbnail-next").click(function(){
        plusSlide(1);
    });

    $(".btn-thumbnail-prev").click(function(){
        plusSlide(-1);
    });
});

//
const uploadSwiper = new Swiper('.uploadSwiper', {
    slidesPerView: 1,
    speed: 500, 
    spaceBetween: 200,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    },
});
$(document).ready(function() {
    //filter dropdown
    $(".item-label-1").click(function(){
        $(".dropdown-1").toggle(500, function(){
            $(".dropdown-2, .dropdown-3, .dropdown-4, .dropdown-5").hide(50);
        });
    });

    $(".item-label-2").click(function(){
        $(".dropdown-2").toggle(500, function(){
            $(".dropdown-1, .dropdown-3, .dropdown-4, .dropdown-5").hide(50);
        });
    });

    $(".item-label-3").click(function(){
        $(".dropdown-3").toggle(500, function(){
            $(".dropdown-1, .dropdown-2, .dropdown-4, .dropdown-5").hide(50);
        });
    });

    $(".item-label-4").click(function(){
        $(".dropdown-4").toggle(500, function(){
            $(".dropdown-2, .dropdown-3, .dropdown-1, .dropdown-5").hide(50);
        });
    });

    $(".item-label-5").click(function(){
        $(".dropdown-5").toggle(500, function(){
            $(".dropdown-2, .dropdown-3, .dropdown-4, .dropdown-1").hide(50);
        });
    });

    //sort-btn dropdown
    $(".btn-sort").click(function(){
        $(".btn-sort-dropdown").toggle(500);
    })

    //full-heart hanoi-office's page
    $(".address-icon").each(function(){
        $(this).click(function(){
            $(this).toggleClass("address-icon-active");
        })
    })

    //clickable icon in upload page
    $(".details-save").click(function(){
        $(this).toggleClass("details-save-active");
    })
})


//Button on Mobile
const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const menu = document.querySelector(".mobile-nav");

const overlay = document.querySelector(".overlay");
const overlayActive = document.querySelector(".overlay-active");


openBtn.addEventListener("click", function() {
    menu.classList.add("mobile-active");
    overlay.classList.add("overlay-active");
});

closeBtn.addEventListener("click", function() {
    menu.classList.remove("mobile-active");
    overlay.classList.remove("overlay-active");
});


//Tab on search office section.
const searchTab = document.querySelector(".search-office-tab");
const btns = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".form-holder");

/*
console.log(searchTab);
console.log(btns);
console.log(forms);
*/

searchTab.addEventListener("click", function(e) {

    let id = e.target.dataset.id;
    console.log(id);

    if(id) {
        //add tab-btn-active to btn when clicked
        btns.forEach(function(btn) {
            btn.classList.remove("tab-btn-active");
            e.target.classList.add("tab-btn-active");
        })

        //remove form-holder-active from all form-holder
        forms.forEach(function(form) {
            form.classList.remove("form-holder-active");
        } )

        //add form-holder-active to form when clicking btn
        let element = document.getElementById(id);
        element.classList.add("form-holder-active");
    }
});


//Swiper office by street
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        //when window width >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 50
        },
    },

    pagination: {
        el: ".swiper-pagination",
    },
});


//Swiper staffs
const staffSwiper = new Swiper('.staffSwiper', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {

        768: {
            slidesPerView: 4,
            spaceBetween: 50
        },
    },
});



//Swiper partner
const partnerSwiper = new Swiper('.partnerSwiper', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {

        768: {
            slidesPerView: 5, 
            spaceBetween: 50
        },
    },
});


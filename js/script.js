const btnSocia = document.querySelector('.close-links');
const navSocia = document.querySelector('.social-links');
if (btnSocia) {
    btnSocia.addEventListener('click', (e) => {
        e.preventDefault();
        navSocia.classList.toggle('hidden');
    });
}

$(document).ready(function() {
    var $disabledResults = $(".js-example-disabled-results");
    $disabledResults.select2();
});


if (document.querySelector('.reviewsSwiper')) {
    var swiper = new Swiper(".reviewsSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 2,
        spaceBetween: -140,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false
        },
        keyboard: {
            enabled: true
        },
        mousewheel: {
            thresholdDelta: 70
        },
        initialSlide: 4,
        on: {
            click(event) {
                swiper.slideTo(this.clickedIndex);
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            870: {
                spaceBetween: -200,
                slidesPerView: 4,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 4,
                  slideShadows: false
              },
            }
        }
    });

    swiper.slideTo(2, 0, false);
}

var toggled = 0;

$('.artclose').click(function(e) {
    e.stopPropagation(); // Остановка всплытия события
    if (toggled == 0) {
        $('.burgx3').stop().transition({ rotate: "45", "margin-top": "16px" });
        $('.burgx2').stop().transition({ opacity: "0" }, "fast");
        $('.burgx').stop().transition({ rotate: "-45", "margin-top": "16px" });
        toggled++;
    } else {
        $('.burgx3').stop().transition({ rotate: "+=135", "margin-top": "3px" });
        $('.burgx2').transition({ opacity: "1" }, "fast");
        $('.burgx').stop().transition({ rotate: "-=135", "margin-top": "26px" });
        toggled--;
    }
});

const navBar = document.querySelector('.header-nav-bur nav')
document.querySelector('.artclose').addEventListener('click', () => {
    navBar.classList.toggle('show');
    document.body.classList.toggle('hidden');
});

if (window.innerWidth < 1300) {
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navBar.classList.remove('show');
            document.body.classList.remove('hidden'); //
            $('.burgx3').stop().transition({ rotate: "+=135", "margin-top": "3px" });
            $('.burgx2').transition({ opacity: "1" }, "fast");
            $('.burgx').stop().transition({ rotate: "-=135", "margin-top": "26px" });
            toggled--;
            // if (window.innerWidth < 830) {
            //     document.body.classList.remove('hidden');
            // }
        });
    });
}

document.addEventListener('click', (event) => {
    const nav = document.querySelector('.header-nav-bur nav');
    if (!nav.contains(event.target) && !event.target.closest('.artclose')) {
        nav.classList.remove('show');
       
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

const btnPopUp = document.querySelector('.btn-form');
const formBox = document.querySelector('.form-pop-up');
const closePopUp = document.querySelector('.close-pop-up');
const form = document.querySelector('.form-pop-up>div');

if (btnPopUp && formBox && form) {
    btnPopUp.addEventListener('click', (e) => {
        e.preventDefault();
        formBox.classList.add('show');
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!form.contains(e.target)) {
            formBox.classList.remove('show');
        }
    });
} else {}

if (closePopUp) {
    closePopUp.addEventListener('click', (e) => {
        formBox.classList.remove('show');
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleScroll() {
    let scrollUpButton = document.querySelector('.scroll-up');
    if (window.scrollY >= window.innerHeight) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }

    // Добавим следующие строки для коррекции угла вращения бургера
    if (toggled === 1) {
        $('.burgx').css('transform', 'rotate(-540deg)');
        $('.burgx3').css('transform', 'rotate(540deg)');
    }
}

window.addEventListener('scroll', handleScroll);

// Активна кнопка меню
document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.remove('hidden')

            navLinks.forEach(link => {
                link.classList.remove('active-link');
                document.body.classList.remove('hidden');
            });

            this.classList.add('active-link');
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const homeLink = document.querySelector('.nav-links li a[href="/"]');
    if (homeLink) {
        homeLink.classList.add('active-link');
    }
});
if (window.innerWidth < 768){
  const selectDiv = document.querySelectorAll('.our-services-select>div');

selectDiv.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('hover');
})
});
}
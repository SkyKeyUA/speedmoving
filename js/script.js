const btnSocia = document.querySelector('.close-links')
const navSocia = document.querySelector('.social-links')
if (btnSocia) {
    btnSocia.addEventListener('click', (e) => {
        e.preventDefault()
        navSocia.classList.toggle('hidden')
    })
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
      slidesPerView: 3,
      spaceBetween: 10, 
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
        }
    });
    
    swiper.slideTo(2, 0, false);
  }
  
  var toggled = 0;

$('.artclose').click(function(){
  if(toggled == 0){
  $('.burgx3').stop().transition({rotate: "45", "margin-top": "16px"});
  $('.burgx2').stop().transition({opacity: "0"}, "fast");
  $('.burgx').stop().transition({rotate: "-45", "margin-top": "16px"});
    toggled++;
  }
  else{
  $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px"});
  $('.burgx2').transition({opacity: "1"}, "fast");
  $('.burgx').stop().transition({rotate: "-=135", "margin-top": "26px"});
  toggled--;
  }
});
document.querySelector('.artclose').addEventListener('click', () => {
  document.querySelector('.header-nav-bur nav').classList.toggle('show');
});

document.addEventListener('click', (event) => {
  const nav = document.querySelector('.header-nav-bur nav');
  if (!nav.contains(event.target)) {
    nav.classList.remove('show');
    $('.burgx3').stop().transition({rotate: "+=135", "margin-top": "3px"});
    $('.burgx2').transition({opacity: "1"}, "fast");
    $('.burgx').stop().transition({rotate: "-=135", "margin-top": "26px"});
    toggled--;
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
const form = document.querySelector('.form-pop-up>div');

if (btnPopUp && formBox && form) {
  btnPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    formBox.classList.add('show');
    e.stopPropagation(); 
  });

  document.addEventListener('click', (e) => {
    if (!form.contains(e.target) || e.target.classList.contains('close-pop-up')) {
      formBox.classList.remove('show');
    }
  });
} else {

}



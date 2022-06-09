const swiper = new Swiper('.comment__swiper', {
  loop: true,
  speed: 2000,
  spaceBetween: 15,
  slidesPerView: 4,
  slidesPerGroup: 4,
  autoplay: false,


  // If we need pagination
  pagination: {
    el: '.comment__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.comment__next',
    prevEl: '.comment__prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      autoplay: true,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      autoplay: true,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 1,
      autoplay: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
      autoplay: false,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 4,
      slidesPerGroup: 4,
      autoplay: false,
    }
  }

});




// Настройка верстки контента

function afterItem(x) {
  const contentBtn = document.querySelector('.header__buy'),
   contentImg = document.querySelector('.content__images'),
   contentContainer = document.querySelector('.header__container');
  if (x.matches) { 
    contentImg.after(contentBtn);
  } else {
   contentContainer.append(contentBtn);
  }
}

var b = window.matchMedia("(max-width: 991.98px)")
afterItem(b) // 
b.addListener(afterItem) 



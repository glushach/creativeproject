window.addEventListener('DOMContentLoaded', () => {
  //БУРГЕР МЕНЮ
  const menuItem = document.querySelector('.nav'),
  hamburger = document.querySelector('.burger-menu'),
  lineActive = document.querySelector('.burger-menu__line');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger-menu_active');
    lineActive.classList.toggle('burger-menu__line_active');
    menuItem.classList.toggle('nav_active');
  })

  //HERO SLIDER
  const singleTrigger = document.querySelectorAll('.dots__item'),
        dotsSingle = document.querySelectorAll('#single')[0],
        slide = document.querySelectorAll('.slide'),
        leftBtn = document.querySelector('.button-block__left'),
        rightBtn = document.querySelector('.button-block__right');
  let slideIndex = 1;

  showSlides(slideIndex);

    function showSlides(n) {
      if(n < 1) {
        slideIndex = slide.length;
      } else if (n > slide.length) {
        slideIndex = 1;
      }

      for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
      }


      for(let i = 0; i < singleTrigger.length; i++) {
        singleTrigger[i].classList.remove('dots__item_active');
      }

      slide[slideIndex - 1].style.display = 'block';
      singleTrigger[slideIndex - 1].classList.add('dots__item_active');
    }//end fn showSlides

/*С этого момента слайды должны по нажатию на треггеры менятся*/
    function plusSlides(n) {
      showSlides(slideIndex += n);
    } //end fn plusSlides

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    leftBtn.addEventListener('click', () => {
      plusSlides(-1);
      leftBtn.classList.add('button-block_active');
      rightBtn.classList.remove('button-block_active');
    });
    rightBtn.addEventListener('click', () => {
      plusSlides(1);
      leftBtn.classList.remove('button-block_active');
      rightBtn.classList.add('button-block_active');
    });

    dotsSingle.addEventListener('click', (e) => {
      for(let i = 0; i < singleTrigger.length + 1; i++) {
        if(e.target.classList.contains('dots__item') && e.target == singleTrigger[i - 1]){
          currentSlide(i);
        }
      }
    });//end event


//РЕАЛИЗАЦИЯ ТАБОВ
  const tabs = document.querySelectorAll('.tabs__click'),
        contents = document.querySelectorAll('.contents'),
        tabsParent = document.querySelector('.tabs');

  function hideTabContent() {
    contents.forEach(item => {
      item.classList.add('contents_hide');
      item.classList.remove('contents_show');
    });

    tabs.forEach(item => {
      item.classList.remove('tabs__click_active');
    });
  }

  function showTabContent(i = 0) {
    contents[i].classList.add('contents_show');
    contents[i].classList.remove('contents_hide');
    tabs[i].classList.add('tabs__click_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    // console.log(target);
    // console.log(target.classList.contains('tabs__click'));

    if(target && target.classList.contains('tabs__click')) {
      tabs.forEach((item, index) => {
        if(target == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });



  //SLIDER TWO
  new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // Отступы между слайдами
    spaceBetween: 19,
    // Бесконечный слайдер
    loop: false,
    //Ширина экрана. Количество слайдов для показа
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 2,
      },
      1640: {
        slidesPerView: 3,
      }
    },
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const menuItem = document.querySelectorAll('.nav'),
  hamburger = document.querySelectorAll('.burger-menu'),
  lineActive = document.querySelectorAll('.burger-menu__line');

  hamburger.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('burger-menu_active');

      lineActive.forEach(item => {
        item.classList.toggle('burger-menu__line_active');
      });
      menuItem.forEach(item => {
        item.classList.toggle('nav_active');
      });
    });
  });


  //HERO SLIDER
  const singleTrigger = document.querySelectorAll('.dots__single'),
        dotsSingular = document.querySelectorAll('.dots__singular'),
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


      // for(let i = 0; i < singleTrigger.length; i++) {
      //   singleTrigger[i].classList.remove('dots__single_active');
      // }
      for(let i = 0; i < dotsSingular.length; i++) {
        dotsSingular[i].classList.remove('dots__singular_active');
      }

      slide[slideIndex - 1].style.display = 'block';
      singleTrigger[slideIndex - 1].classList.add('dots__single_active');
      dotsSingular[slideIndex - 1].classList.add('dots__singular_active');
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
        if(e.target.classList.contains('dots__single') && e.target == singleTrigger[i - 1]){
          currentSlide(i);
        }
      }
      for(let i = 0; i < dotsSingular.length + 1; i++) {
        if(e.target.classList.contains('dots__singular') && e.target == dotsSingular[i - 1]){
          currentSlide(i);
        }
      }
    });//end event
   

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
  // const truck = document.querySelector('.slides'),
  //       slideItem = document.querySelectorAll('.slides__inner'),
  //       sliderWidth = document.querySelector('.slider').offsetWidth,

  //       dotsMultiple = document.querySelectorAll('#multiple')[0],
  //       dotsExternal = document.querySelectorAll('.dots__multiple'),
  //       dotsInner = document.querySelectorAll('.dots__plural');

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
  // let IndexOfSlideItem = 1,
  //     widthArray = [0],
  //     truckWidth = 95,
  //     offset = 0,
  //     step = 0,
  //     ostatok = 0;

  // for(let i = 0; i < slideItem.length; i++) {
  //   widthArray.push(slideItem[i].offsetWidth);
  //   truckWidth += slideItem[i].offsetWidth;
  // }
  // truck.style.width = truckWidth + 'px';
  // console.log(widthArray);



    // function showSlideItem (n) {
    //   if(n < 1) {
    //     IndexOfSlideItem = slideItem.length;
    //   } else if (n > slideItem.length) {
    //     IndexOfSlideItem = 1;
    //   }

    //   for(let i = 0; i < slideItem.length; i++) {
    //     slideItem[i].classList.remove('slides__inner_active');
    //   }


    //   for(let i = 0; i < dotsExternal.length; i++) {
    //     dotsExternal[i].classList.remove('dots__multiple_active');
    //   }
    //   for(let i = 0; i < dotsInner.length; i++) {
    //     dotsInner[i].classList.remove('dots__plural_active');
    //   }

    //     //ЭТА ЧАСТЬ КОДУ УСТАНАВЛИВАЕТ БЛОЧНОСТЬ СЛАЙДОВ
    //   // slides.style.transform = 'translateX('+ (-34) + '%)';
    //   slideItem[IndexOfSlideItem - 1].classList.add('slides__inner_active');
    //   dotsExternal[IndexOfSlideItem - 1].classList.add('dots__multiple_active');
    //   dotsInner[IndexOfSlideItem - 1].classList.add('dots__plural_active');
    // }//end fn showSlides

    // showSlideItem(slideIndex);


    // function currentSlideItem(n) {
    //   showSlideItem(IndexOfSlideItem = n);
    // }

    // dotsMultiple.addEventListener('click', (e) => {
    //   console.log('Click');
    //   for(let i = 0; i < dotsExternal.length + 1; i++) {
    //     if(e.target.classList.contains('dots__multiple') && e.target == dotsExternal[i - 1]){
    //       currentSlideItem(i);
    //       ostatok = truckWidth - sliderWidth - (offset + widthArray[step]);
    //       if(ostatok >= 0) {
    //         offset = offset + widthArray[step];
    //         truck.style.left = -offset + 'px';
    //       } else {
    //         truck.style.left = -(truckWidth - sliderWidth) + 'px';
    //         offset = 0;
    //         step = 1; //мне категорически здесь нельзя ставить -1
    //       }
    //       if(step + 1 == slideItem.length) {
    //         step = 0;
    //         offset = 0;
    //       } else {
    //         step++;
    //       }
    //     }
    //   }


    //   for(let i = 0; i < dotsInner.length + 1; i++) {
    //     if(e.target.classList.contains('dots__plural') && e.target == dotsInner[i - 1]){
    //       currentSlideItem(i);
    //     }
    //   }
    // });//end event


});
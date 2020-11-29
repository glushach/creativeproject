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


      for(let i = 0; i < singleTrigger.length; i++) {
        singleTrigger[i].classList.remove('dots__single_active');
      }
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
        if(e.target.classList.contains('dots__item') && e.target == singleTrigger[i - 1]){
          currentSlide(i);
        }
      }
      for(let i = 0; i < dotsSingular.length + 1; i++) {
        if(e.target.classList.contains('dots__inner') && e.target == dotsSingular[i - 1]){
          currentSlide(i);
        }
      }
    });//end event
});
      var swiper = new Swiper('.mySwiper', {
        slidesPerView: 5,
        // centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },

                navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


                  $('.bxslider-business').bxSlider({
                mode: 'horizontal',
                minSlides: 4,
                maxSlides: 4,
                moveSlides: 6,
                slideWidth: 450,
                slideMargin: 20,
                pager: false,
                controls: false,
                infiniteLoop: true
            });

            $('.bxslider-logo').bxSlider({

                minSlides: window.innerWidth < 576 ? 1 :
                        window.innerWidth < 768 ? 2 :
                        window.innerWidth < 992 ? 3 : 5,

                maxSlides: window.innerWidth < 576 ? 1 :
                        window.innerWidth < 768 ? 2 :
                        window.innerWidth < 992 ? 3 : 5,

                minSlides: 4,
                maxSlides: 4,            
                slideWidth:170,
                slideMargin:10,
                ticker:true,
                speed:30000

            });

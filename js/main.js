$(function () {

if ($('.popular-destinations__items')) {
  $('.popular-destinations__items').slick({
    slidesToShow: 3.4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '.prev-js-popular-destinations',
    nextArrow: '.next-js-popular-destinations',
    responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        }
      },
    ]
  });
}

if ($('.tours__items-mob')) {
  $('.tours__items-mob').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '.prev-js',
    nextArrow: '.next-js',
    responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        }
      },

      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        }
      },
    ]
  });
}


if ($('.reviews__inner')) {
  $('.reviews__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '.prev-js-reviews',
    nextArrow: '.next-js-reviews',
    responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
}

if ($('.stocks__items')) {
  $('.stocks__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '.prev-js-stocks',
    nextArrow: '.next-js-stocks',
    responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.1,
          centerMode: true,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
}

if ($('.video-tours--mobile__items')) {
  $(".video-tours--mobile__items").slick({
    prevArrow: '<button type="button" class="slider-prev reviews-slider__slider-prev">Previous</button>',
    nextArrow: '<button type="button" class="slider-next reviews-slider__slider-next">Next</button>',
    infinite: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: false,
      }
    }, ]
  });
}

if ($('.header__text-items')) {
  $('.header__text-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}

if ($('.tour-transport__inner-slider')) {
  $('.tour-transport__inner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: false
  });
}

if ($('.gallery-for')) {
  $('.gallery-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.gallery-nav',
    nextArrow: '<button type="button" class="slider-prev--gallery gallery-slider__slider-prev">Previous</button>',
    prevArrow: '<button type="button" class="slider-next--gallery gallery-slider__slider-next">Next</button>',
    infinite: false
  });
}

if ($('.gallery-nav')) {
  $('.gallery-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    arrows: false
  });
}
  // $(".video-tours--mobile__items").slick({
  //   prevArrow: '<button type="button" class="video-prev video__slider-prev">Previous</button>',
  //   nextArrow: '<button type="button" class="video-next video__slider-next">Next</button>',
  //   responsive: [{
  //     breakpoint: 740,
  //     settings: {
  //       arrows: false,
  //     }
  //   }, ]
  // });
  //Валидатор форм и маска для форм
  const offerFormModal = $('.offer-form-modal')
  offerFormModal.submit(function (e) {
    e.preventDefault()
  })

  offerFormModal.validate({
    errorElement: "",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      tel: {
        maskRu: true
      }
    },
    messages: {
      name: "",
      tel: ""
    },
    submitHandler: function (form) {
      const formInstance = $(form)

      console.log('submit')
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: formInstance.serialize()
      }).done(function () {
        console.log('DONE')
        formInput.val("");
        formInput.siblings().removeClass('active')
        $('.modal-wrapper-offer .success-message').addClass('show')
      });
      return false;
    }
  });

  const callbackForm = $('.callback-form')
  callbackForm.submit(function (e) {
    e.preventDefault()
  })

  callbackForm.validate({
    errorElement: "span",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      tel: {
        maskRu: true
      }
    },
    messages: {
      tel: "",
    },
    submitHandler: function (form) {

    }
  });

  const callbackFormTravel = $('.callback-form--travel')
  callbackFormTravel.submit(function (e) {
    e.preventDefault()
  })

  callbackFormTravel.validate({
    errorElement: "span",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      tel: {
        maskRu: true
      }
    },
    messages: {
      tel: "",
    },
    submitHandler: function (form) {

    }
  });

  jQuery.validator.addMethod('maskRu', function (value, element) {
    console.log(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value));
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });

  $('[name="tel"]').mask("+7(999)999-9999", {
    autoclear: false
  });

  $(".desktop-header__tour--modal__hidden").hide()
  $(".desktop-header__tour--modal__list").click(function () {
    $(this).toggleClass("closeModalText");
    $(this).next().slideToggle("slow");
  });

  // $(".desktop-header__tour--modal__hidden").hide()
  // $(".desktop-header__top-item--modal__list").click(function () {
  //   $(this).toggleClass("closeModalText");
  //   $(this).next().slideToggle("slow");
  // });

  $(".faq__cut").hide()
  $(".faq__spoiler").click(function () {
    $(this).children().toggleClass("faq__title--active");
    $(this).toggleClass("closeText");
    $(this).next().slideToggle("slow");
  });

  $(".mobile-footer__inner").hide()
  $(".mobile-footer__preview").click(function () {
    $(this).toggleClass("closePreview");
    $(this).next().slideToggle("slow");
  });

  $(".catalog__preview-direction").hide()
  $(".catalog__preview-inner").click(function () {
    $(this).toggleClass("closePreview");
    $(this).next().slideToggle("slow");
  });

  $(".popular-destinations__items--destinations").hide()
  $(".desktop-header__tour--destinations").click(function () {
    $(".popular-destinations__items--readytours").hide();
    $(".desktop-header__wrapper").toggleClass("backgroundActive");
    $(".header-text").toggleClass("header-text--none");
    $(".popular-destinations__items--destinations").slideToggle();
  });

  $(".popular-destinations__items--readytours").hide()
  $(".desktop-header__tour--readytours").click(function () {
    $(".popular-destinations__items--destinations").hide();
    $(".desktop-header__wrapper").toggleClass("backgroundActive");
    $(".header-text").toggleClass("header-text--none");
    $(".popular-destinations__items--readytours").slideToggle();
  });

  //Валидатор форм и маска для форм
  // const offerFormModal = $('.offer-form-modal')
  // offerFormModal.submit(function (e) {
  //   e.preventDefault()
  // })

  // offerFormModal.validate({
  //   errorElement: "",
  //   errorPlacement: (error, element) =>
  //     error.appendTo(element.parent().parent()),
  //   rules: {
  //     tel: {
  //       maskRu: true
  //     }
  //   },
  //   messages: {
  //     name: "",
  //     tel: ""
  //   },
  //   submitHandler: function (form) {
  //     const formInstance = $(form)

  //     console.log('submit')
  //     $.ajax({
  //       type: "POST",
  //       url: "mail.php",
  //       data: formInstance.serialize()
  //     }).done(function () {
  //       console.log('DONE')
  //       formInput.val("");
  //       formInput.siblings().removeClass('active')
  //       $('.modal-wrapper-offer .success-message').addClass('show')
  //     });
  //     return false;
  //   }
  // });
  jQuery.validator.addMethod('maskRu', function (value, element) {
    console.log(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value));
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });

  $('[name="tel"]').mask("+7(999)999-9999", {
    autoclear: false
  });

  $(document).on('click', '#close_vid', function () {
    jQuery("iframe").each(function () {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  });
  $(document).on('click', '#close_vid-bg', function () {
    jQuery("iframe").each(function () {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
  });

});

//Модальные окна на Pure Js

(function () {

  //   //Вызов окна колбека
  //   openCallback = document.querySelector('.openCallback');
  //   callbackModal = document.querySelector('.modal-wrapper__callback');

  //   openCallback.addEventListener('click', function () {
  //     openBaseModal();
  //     callbackModal.classList.remove('hidden');
  //     setTimeout(function () {
  //       callbackModal.classList.remove('animation');
  //     }, 20);
  //   })

  //   function closecallbackPopup() {
  //     if (!callbackModal.classList.contains('hidden')) {
  //       callbackModal.classList.add('animation');    
  //       callbackModal.addEventListener('transitionend', function(e) {
  //         callbackModal.classList.add('hidden');
  //       }, {
  //         capture: false,
  //         once: true,
  //         passive: false
  //       });
  //     }
  //   };

  //   //Вызов окна колбека
  openLeftMenu = document.querySelector('.openMenu');
  leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

  openLeftMenu.addEventListener('click', function () {
    openBaseModal();
    leftMenuModal.classList.remove('hidden');
    setTimeout(function () {
      leftMenuModal.classList.remove('animation');
    }, 20);
  })

  function closeleftMenuModal() {
    if (!leftMenuModal.classList.contains('hidden')) {
      leftMenuModal.classList.add('animation');
      leftMenuModal.addEventListener('transitionend', function (e) {
        leftMenuModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  };

  openVideo = document.querySelector('.openVideo');
  videoModal = document.querySelector('.modal-wrapper__video');

  openVideo.addEventListener('click', function () {
    openBaseModal();
    videoModal.classList.remove('hidden');
    setTimeout(function () {
      videoModal.classList.remove('animation');
    }, 20);
  })

  if (document.querySelector('.openVideoMobile')) {
    openVideoMobile = document.querySelector('.openVideoMobile');

    openVideoMobile.addEventListener('click', function () {
      openBaseModal();
      videoModal.classList.remove('hidden');
      setTimeout(function () {
        videoModal.classList.remove('animation');
      }, 20);
    })
  }


  function closeVideoModal() {
    if (!videoModal.classList.contains('hidden')) {
      videoModal.classList.add('animation');
      videoModal.addEventListener('transitionend', function (e) {
        videoModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  };

  if (document.querySelector('.openGallery')) {
    openGallery = document.querySelector('.openGallery');
    galleryModal = document.querySelector('.modal-wrapper__gallery');

    openGallery.addEventListener('click', function () {
      openBaseModal();
      galleryModal.classList.remove('hidden');
      setTimeout(function () {
        galleryModal.classList.remove('animation');
      }, 20);
    })
  }

  function closeGalleryModal() {
    if (!galleryModal.classList.contains('hidden')) {
      galleryModal.classList.add('animation');
      galleryModal.addEventListener('transitionend', function (e) {
        galleryModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  };

  function closeAllModal() {
    // closecallbackPopup();
    closeleftMenuModal();
    closeVideoModal();
    if (document.querySelector('.openGallery')) {
      closeGalleryModal();
    }
    closeBaseModal();
  };

  //База модальных окон
  body = document.querySelector('body');
  modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapperBg = document.querySelector('.modal-wrapper__bg');
  modalWrapperClose = document.querySelectorAll('.modal-wrapper__close');

  function openBaseModal() {
    body.classList.add('noflow');
    modalWrapper.classList.remove('hidden');
    setTimeout(function () {
      modalWrapper.classList.remove('animation');
    }, 20);
  };

  function closeBaseModal() {
    body.classList.remove('noflow');
    modalWrapper.classList.add('animation');
    modalWrapper.addEventListener('transitionend', function (e) {
      modalWrapper.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  };

  for (let i = 0; i < modalWrapperClose.length; i++) {
    modalWrapperClose[i].addEventListener('click', () => {
      closeAllModal();
    });
  }

  modalWrapperBg.addEventListener('click', function () {
    closeAllModal();
  })

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {
      closeAllModal();
    }
  };



})();
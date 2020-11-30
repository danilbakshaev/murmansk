$(function () {

  if ($('.popular-destinations__items')) {
    $('.popular-destinations__items').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      draggable: false,
      prevArrow: '.prev-js-popular-destinations',
      nextArrow: '.next-js-popular-destinations',
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.popular-destinations__items4')) {
    $('.popular-destinations__items4').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      draggable: false,
      prevArrow: '.prev-js-popular-destinations',
      nextArrow: '.next-js-popular-destinations',
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.popular-destinations__items--header')) {
    $('.popular-destinations__items--header').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: false,
      draggable: false,
      prevArrow: '.prev-js-popular-destinations--head-head',
      nextArrow: '.next-js-popular-destinations--head-head',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.popular-destinations__items--package')) {
    $('.popular-destinations__items--package').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: false,
      draggable: false,
      prevArrow: '.prev-js-popular-destinations--package',
      nextArrow: '.next-js-popular-destinations--package',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.popular-destinations__items--destinations-slider')) {
    $('.popular-destinations__items--destinations-slider').slick({
      slidesToShow: 3.4,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.prev-js-popular-destinations-header',
      nextArrow: '.next-js-popular-destinations-header',
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

  if ($('.popular-destinations__items--readytours-slider')) {
    $('.popular-destinations__items--readytours-slider').slick({
      slidesToShow: 3.4,
      slidesToScroll: 3.4,
      infinite: false,
      draggable: false,
      prevArrow: '.prev-js-popular-readytours-header',
      nextArrow: '.next-js-popular-readytours-header',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 2.1,
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1.1,
          }
        },
      ]
    });
  }

  if ($('.team-inner')) {
    $('.team-inner').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      draggable: false,
      prevArrow: '.prev-js-popular-destinations--team',
      nextArrow: '.next-js-popular-destinations--team',
      responsive: [{
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    });
  }

  if ($('.answers-questions__items')) {
    $('.answers-questions__items').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      draggable: false,
      centerMode: false,
      prevArrow: '.prev-js-popular-destinations',
      nextArrow: '.next-js-popular-destinations',
      responsive: [{
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    });
  }

  // f ($('.popular-destinations__items--head')) {
  //   $('.popular-destinations__items--head').slick({
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     infinite: false,
  //     draggable: false,
  //     centerMode: false,
  //     prevArrow: '.prev-js-popular-destinations',
  //     nextArrow: '.next-js-popular-destinations',
  //     responsive: [{
  //       breakpoint: 860,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }]
  //   });
  // }

  if ($('.our-photographers__items')) {
    $('.our-photographers__items').slick({
      slidesToShow: 1.8,
      slidesToScroll: 1,
      infinite: false,
      draggable: false,
      // centerMode: true,
      prevArrow: '.prev-js-guides',
      nextArrow: '.next-js-guides',
      responsive: [{
          breakpoint: 1241,
          settings: {
            slidesToShow: 1.4,
            centerMode: false,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 1.1,
          }
        }
      ]
    });
  }

  if ($('.our-transport__items')) {
    $('.our-transport__items').slick({
      slidesToShow: 1.4,
      slidesToScroll: 1,
      infinite: false,
      draggable: false,
      // centerMode: true,
      prevArrow: '.prev-js-transport',
      nextArrow: '.next-js-transport',
      responsive: [{
        breakpoint: 860,
        settings: {
          slidesToShow: 1.1,
          centerMode: false,
          slidesToScroll: 1,
        }
      }]
    });
  }

  if ($('.choice-tours__items')) {
    $('.choice-tours__items').slick({
      slidesToShow: 4.5,
      slidesToScroll: 2,
      infinite: false,
      arrows: true,
      prevArrow: '.prev-js-agency',
      nextArrow: '.next-js-agency',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.photos__items')) {
    $('.photos__items').slick({
      slidesToShow: 3.5,
      slidesToScroll: 2,
      infinite: false,
      arrows: true,
      prevArrow: '.prev-js-agency-photo',
      nextArrow: '.next-js-agency-photo',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.vehicle-fleet__right-inner')) {
    $('.vehicle-fleet__right-inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '.vehicle-fleet__btn-left',
      nextArrow: '.vehicle-fleet__btn-right',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }


  $(window).on('resize', function (e) {

    if (window.innerWidth < 1240) {
      if ($('.tours__items')) {
        $('.tours__items').slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          draggable: false,
          infinite: false,
          prevArrow: '.prev-js',
          nextArrow: '.next-js',
          responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },

            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        });
      }
    };

    if (window.innerWidth < 860) {
      if ($('.northern-videos__inner--mobile')) {
        $('.northern-videos__inner--mobile').slick({
          slidesToShow: 1.2,
          slidesToScroll: 1,
          draggable: true,
          infinite: false,
          arrows: true,
          prevArrow: '.prev-js-videos',
          nextArrow: '.next-js-videos',
        });
      };

      if ($('.discounts__items')) {
        $('.discounts__items').slick({
          slidesToShow: 1.2,
          slidesToScroll: 1,
          draggable: true,
          infinite: false,
          arrows: false,
        });
      }
    };
  }).trigger('resize');

  if ($('.reviews__inner')) {
    $('.reviews__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.prev-js-reviews',
      nextArrow: '.next-js-reviews',
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
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
      draggable: false,
      prevArrow: '.prev-js-stocks',
      nextArrow: '.next-js-stocks',
      responsive: [
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    });
  }

  if ($('.video-tours--mobile__items')) {
    $(".video-tours--mobile__items").slick({
      prevArrow: '.prev-js-video',
      nextArrow: '.next-js-video',
      infinite: false,
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      autoplay: false,
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


  const requestForm = $('.request__form')
  requestForm.submit(function (e) {
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
    $(this).parent().toggleClass("faq__item--active");
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

  $(".filter__mobile-cut").hide()
  $(".filter__mobile-spoiler-title").click(function () {
    $(this).parent(".filter__mobile-spoiler").toggleClass("filter__item--active");
    $(this).next(".filter__mobile-cut").slideToggle("fast");
  });

  $(".tour-ticket__prices-hide").hide()
  $(".tour-ticket__prices").click(function () {
    $(this).toggleClass("tour-ticket__prices--active");
    $(".tour-ticket__prices-hide").slideToggle("slow");
  });

  $(".answers__cut").hide()
  $(".answers__spoiler").click(function () {
    $(this).parent().toggleClass("answers__item--active");
    $(this).next().slideToggle("slow");
  });

  if ($('#map')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map', {
        center: [68.964693, 33.0755158],
        zoom: 16,
        // controls: []
      });

      placemark = new ymaps.Placemark([68.964858, 33.0752382], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/placemap.svg',
        // Размеры метки.
        iconImageSize: [44, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      myMapContact.geoObjects
        .add(placemark);

      // myMap.behaviors.get('drag').disable();
      myMapContact.behaviors.get('scrollZoom').disable();
      myMapContact.behaviors.get('rightMouseButtonMagnifier').disable();
      myMapContact.behaviors.get('dblClickZoom').disable();
    });
  }

  if ($(".header-notfixed")) {
    var headWhite = $('.header-notfixed');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 736) {
        headWhite.addClass("header-fixed");
      } else {
        headWhite.removeClass("header-fixed");
      }
    });
  }


  // Шапка 

  if ($(".desktop-header__tour--tours_day") && $(".desktop-header__tour--tours_package")) {
    const toursDay = $(".desktop-header__tour--tours_day")
    const toursPackage = $(".desktop-header__tour--tours_package")

    toursDay.click(function () {
      if ($(".tours_package").hasClass("active")) {
        $(".tours_package").removeClass("active")
        $(".tours_day").addClass("active")
        toursPackage.removeClass("active")
        toursDay.addClass("active")
        // header-text.addClass("hidden")
      } else if (!$(".tours_day").hasClass("active")) {
        $(".desktop-header__wrapper").addClass("backgroundActive")
        $(".tours_day").addClass("active")
      } else {
        $(".desktop-header__wrapper").removeClass("backgroundActive")
        $(".tours_day").removeClass("active")
        toursDay.removeClass("active")
      }

    })
    toursPackage.click(function () {
      if ($(".tours_day").hasClass("active")) {
        $(".tours_day").removeClass("active")
        $(".tours_package").addClass("active")
        toursDay.removeClass("active")
        toursPackage.addClass("active")
      } else if (!$(".tours_package").hasClass("active")) {
        $(".desktop-header__wrapper").addClass("backgroundActive")
        $(".tours_package").addClass("active")
        toursPackage.addClass("active")
      } else {
        $(".desktop-header__wrapper").removeClass("backgroundActive")
        $(".tours_package").removeClass("active")
        toursPackage.removeClass("active")
      }
    })
  }
  // $(".desktop-header__tour--destinations").click(function () {
  //   if ($(".header-text").hasClass("active")) {
  //     $(".header-text").removeClass("active");
  //     $(".desktop-header__wrapper").addClass("backgroundActive");
  //     $(".popular-destinations__items--destinations").addClass("active");
  //   } else if ($(".popular-destinations__items--readytours").hasClass("active")) {
  //     $(".popular-destinations__items--readytours").removeClass("active");
  //     $(".popular-destinations__items--destinations").addClass("active");
  //   } else {
  //     $(".popular-destinations__items--destinations").removeClass("active");
  //     $(".header-text").addClass("active");
  //     $(".desktop-header__wrapper").removeClass("backgroundActive");
  //   }
  // });

  // $(".desktop-header__tour--readytours").click(function () {
  //   if ($(".header-text").hasClass("active")) {
  //     $(".header-text").removeClass("active");
  //     $(".desktop-header__wrapper").addClass("backgroundActive");
  //     $(".popular-destinations__items--readytours").addClass("active");
  //   } else if ($(".popular-destinations__items--destinations").hasClass("active")) {
  //     $(".popular-destinations__items--destinations").removeClass("active");
  //     $(".popular-destinations__items--readytours").addClass("active");
  //   } else {
  //     $(".popular-destinations__items--readytours").removeClass("active");
  //     $(".header-text").addClass("active");
  //     $(".desktop-header__wrapper").removeClass("backgroundActive");
  //   }
  // });

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

  if ($('.desktop-header__top-item--select')) {
    $('.desktop-header__top-item--select').each(function () {
      const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        // selectedOption = selectOption.filter(':selected'),
        duration = 0; // длительность анимации 

      _this.hide();
      _this.wrap('<div class="select desktop-header__top-item"></div>');
      $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
      }).insertAfter(_this);

      const selectHead = _this.next('.new-select');
      $('<div>', {
        class: 'new-select__list'
      }).insertAfter(selectHead);

      const selectList = selectHead.next('.new-select__list');
      for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
              text: selectOption.eq(i).text()
            })
          })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
      }

      const selectItem = selectList.find('.new-select__item');
      selectList.slideUp(0);
      selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function () {
            let chooseItem = $(this).data('value');

            $('select').val(chooseItem).attr('selected', 'selected');
            selectHead.text($(this).find('span').text());

            selectList.slideUp(duration);
            selectHead.removeClass('on');
          });

        } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
        }
      });
    });
  }

  if ($('.select-lang__text')) {
    $('.select-lang__text').each(function () {
      const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        // selectedOption = selectOption.filter(':selected'),
        duration = 0; // длительность анимации 

      _this.hide();
      _this.wrap('<div class="select desktop-header__top-item"></div>');
      $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
      }).insertAfter(_this);

      const selectHead = _this.next('.new-select');
      $('<div>', {
        class: 'new-select__list new-select__list--lang'
      }).insertAfter(selectHead);

      const selectList = selectHead.next('.new-select__list');
      for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item new-select__item--lang',
            html: $('<span>', {
              text: selectOption.eq(i).text()
            })
          })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
      }

      const selectItem = selectList.find('.new-select__item');
      selectList.slideUp(0);
      selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function () {
            let chooseItem = $(this).data('value');

            $('select').val(chooseItem).attr('selected', 'selected');
            selectItem.removeClass('selected');
            $(this).addClass('selected');
            selectHead.text($(this).find('span').text());

            selectList.slideUp(duration);
            selectHead.removeClass('on');
          });

        } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
        }
      });
    });
  }

  // if ($('.select-direction')) {
  //   $('.select-direction').each(function () {
  //     const _this = $(this),
  //       selectOption = _this.find('option'),
  //       selectOptionLength = selectOption.length,
  //       // selectedOption = selectOption.filter(':selected'),
  //       duration = 0; // длительность анимации 

  //     _this.hide();
  //     _this.wrap('<div class="select"></div>');
  //     $('<div>', {
  //       class: 'new-select filter__item filter__item--direction',
  //       text: _this.children('option:disabled').text()
  //     }).insertAfter(_this);

  //     const selectHead = _this.next('.new-select');
  //     $('<div>', {
  //       class: 'new-select__list new-select__list--direction'
  //     }).insertAfter(selectHead);

  //     const selectList = selectHead.next('.new-select__list');
  //     for (let i = 1; i < selectOptionLength; i++) {
  //       $('<div>', {
  //           class: 'new-select__item new-select__item--direction',
  //           html: $('<span>', {
  //             text: selectOption.eq(i).text(),
  //           })
  //         })
  //         .attr('data-value', selectOption.eq(i).val())
  //         .appendTo(selectList);
  //     }

  //     const selectItem = selectList.find('.new-select__item');
  //     selectList.slideUp(0);
  //     selectHead.on('click', function () {
  //       if (!$(this).hasClass('on')) {
  //         $(this).addClass('on');
  //         selectList.slideDown(duration);

  //         selectItem.on('click', function () {
  //           let chooseItem = $(this).data('value');

  //           $('select').val(chooseItem).attr('selected', 'selected');
  //           selectItem.removeClass('selected');
  //           $(this).addClass('selected');
  //           selectHead.text($(this).find('span').text());

  //           selectList.slideUp(duration);
  //           selectHead.removeClass('on');
  //         });

  //       } else {
  //         $(this).removeClass('on');
  //         selectList.slideUp(duration);
  //       }
  //     });
  //   });
  // }


  // if ($('.select-category')) {
  //   $('.select-category').each(function () {
  //     const _this = $(this),
  //       selectOption = _this.find('option'),
  //       selectOptionLength = selectOption.length,
  //       // selectedOption = selectOption.filter(':selected'),
  //       duration = 0; // длительность анимации 

  //     _this.hide();
  //     _this.wrap('<div class="select"></div>');
  //     $('<div>', {
  //       class: 'new-select filter__item filter__item--category',
  //       text: _this.children('option:disabled').text()
  //     }).insertAfter(_this);

  //     const selectHead = _this.next('.new-select');
  //     $('<div>', {
  //       class: 'new-select__list new-select__list--category'
  //     }).insertAfter(selectHead);

  //     const selectList = selectHead.next('.new-select__list');
  //     for (let i = 1; i < selectOptionLength; i++) {
  //       $('<div>', {
  //           class: 'new-select__item new-select__item--direction',
  //           html: $('<span>', {
  //             text: selectOption.eq(i).text(),
  //           })
  //         })
  //         .attr('data-value', selectOption.eq(i).val())
  //         .appendTo(selectList);
  //     }

  //     const selectItem = selectList.find('.new-select__item');
  //     selectList.slideUp(0);
  //     selectHead.on('click', function () {
  //       if (!$(this).hasClass('on')) {
  //         $(this).addClass('on');
  //         selectList.slideDown(duration);

  //         selectItem.on('click', function () {
  //           let chooseItem = $(this).data('value');

  //           $('select').val(chooseItem).attr('selected', 'selected');
  //           selectItem.removeClass('selected');
  //           $(this).addClass('selected');
  //           selectHead.text($(this).find('span').text());

  //           selectList.slideUp(duration);
  //           selectHead.removeClass('on');
  //         });

  //       } else {
  //         $(this).removeClass('on');
  //         selectList.slideUp(duration);
  //       }
  //     });
  //   });
  // }

  // if ($('.select-season')) {
  //   $('.select-season').each(function () {
  //     const _this = $(this),
  //       selectOption = _this.find('option'),
  //       selectOptionLength = selectOption.length,
  //       // selectedOption = selectOption.filter(':selected'),
  //       duration = 0; // длительность анимации 

  //     _this.hide();
  //     _this.wrap('<div class="select"></div>');
  //     $('<div>', {
  //       class: 'new-select filter__item filter__item--season',
  //       text: _this.children('option:disabled').text()
  //     }).insertAfter(_this);

  //     const selectHead = _this.next('.new-select');
  //     $('<div>', {
  //       class: 'new-select__list new-select__list--season'
  //     }).insertAfter(selectHead);

  //     const selectList = selectHead.next('.new-select__list');
  //     for (let i = 1; i < selectOptionLength; i++) {
  //       $('<div>', {
  //           class: 'new-select__item new-select__item--season',
  //           html: $('<span>', {
  //             text: selectOption.eq(i).text(),
  //           })
  //         })
  //         .attr('data-value', selectOption.eq(i).val())
  //         .appendTo(selectList);
  //     }

  //     const selectItem = selectList.find('.new-select__item');
  //     selectList.slideUp(0);
  //     selectHead.on('click', function () {
  //       if (!$(this).hasClass('on')) {
  //         $(this).addClass('on');
  //         selectList.slideDown(duration);

  //         selectItem.on('click', function () {
  //           let chooseItem = $(this).data('value');

  //           $('select').val(chooseItem).attr('selected', 'selected');
  //           selectItem.removeClass('selected');
  //           $(this).addClass('selected');
  //           selectHead.text($(this).find('span').text());

  //           selectList.slideUp(duration);
  //           selectHead.removeClass('on');
  //         });

  //       } else {
  //         $(this).removeClass('on');
  //         selectList.slideUp(duration);
  //       }
  //     });
  //   });
  // }

  if ($(".new-select:contains('Русский')")) {
    $(".new-select:contains('Русский')").addClass('new-select__img--rus');
  } else {
    $(".new-select:contains('Русский')").removeClass('new-select__img--rus');
  }

  if ($(".new-select:contains('English')")) {
    $(".new-select:contains('English')").addClass('new-select__img--eng');
  } else {
    $(".new-select:contains('English')").removeClass('new-select__img--eng');
  }

  if ($(".new-select:contains('ภาษาไทย')")) {
    $(".new-select:contains('ภาษาไทย')").addClass('new-select__img--unk');
  } else {
    $(".new-select:contains('ภาษาไทย')").removeClass('new-select__img--unk');
  }

  $(document).mouseup(function (e) {
    var block = $(".new-select");
    if (!block.is(e.target) &&
      block.has(e.target).length === 0) {
      block.removeClass('on');
      $('.new-select__list').slideUp(0);
    }
  });

  if ($(".desktop-header__tour--tour")) {
    $('.desktop-header__tour--tour[href^="#"]').bind('click.smoothscroll', function (e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 215
      }, 900, 'swing', function () {
        // window.location.hash = target;
      });
    });
  }

  $(".included-price__inner").not(":first").hide();
  $(".included-price__btn").click(function () {
    $(".included-price__btn").removeClass("included-price__btn--active").eq($(this).index()).addClass("included-price__btn--active");
    $(".included-price__inner").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("included-price__btn--active");

  $(".advice-item__btn").click(function () {
    $(".advice-inner").toggleClass("advice-inner--active");
  });

});

(function($) {
	function setChecked(target) {
		var checked = $(target).find("input[type='checkbox']:checked").length;
		if (checked) {
			$(target).find('select option:first').html('Выбрано: ' + checked);
		} else {
			$(target).find('select option:first').html('Выберите из списка');
		}
  }
  var checkLabel = $(".check-label")
 
	$.fn.checkselect = function() {
		this.wrapInner('<div class="checkselect-popup"></div>');
		this.prepend(
			'<div class="checkselect-control">' +
				'<select class="form-control"><option></option></select>' +
				'<div class="checkselect-over"></div>' +
			'</div>'
		);	
 
		this.each(function(){
			setChecked(this);
		});		
		this.find('input[type="checkbox"]').click(function(){
      setChecked($(this).parents('.checkselect'));
      $(this).parent(checkLabel).toggleClass("checked")
		});
 
		this.parent().find('.checkselect-control').on('click', function(){
			$popup = $(this).next();
			$('.checkselect-popup').not($popup).css('display', 'none');
			if ($popup.is(':hidden')) {
				$popup.css('display', 'block');
				$(this).find('select').focus();
			} else {
				$popup.css('display', 'none');
			}
		});
 
		$('html, body').on('click', function(e){
			if ($(e.target).closest('.checkselect').length == 0){
				$('.checkselect-popup').css('display', 'none');
			}
		});
	};
})(jQuery);	
 
$('.checkselect').checkselect();

//Модальные окна на Pure Js

if ($(".tours-map__btn")) {
  $(".tours-map__btn").click(function () {
    $(".tours-map__btn").removeClass("tours-map__btn--active");
    $('[data-visible]').removeClass("tours-map__right-item--active");
    $(this).addClass("tours-map__btn--active");
    $('[data-visible="' + $(this)[0].attributes[1].value + '"]').addClass("tours-map__right-item--active");
  });
}

(function () {

  if (document.querySelector('.openCallback')) {
    openCallback = document.querySelector('.openCallback');
    callbackModal = document.querySelector('.modal-wrapper__callback');

    openCallback.addEventListener('click', function () {
      openBaseModal();
      callbackModal.classList.remove('hidden');
      setTimeout(function () {
        callbackModal.classList.remove('animation');
      }, 20);
    })

    function closeCallbackPopup() {
      if (!callbackModal.classList.contains('hidden')) {
        callbackModal.classList.add('animation');
        callbackModal.addEventListener('transitionend', function (e) {
          callbackModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openCateg')) {
    openCateg = document.querySelector('.openCateg');
    categModal = document.querySelector('.modal-wrapper__category');

    openCateg.addEventListener('click', function () {
      openBaseModal();
      categModal.classList.remove('hidden');
      setTimeout(function () {
        categModal.classList.remove('animation');
      }, 20);
    })

    function closeCategPopup() {
      if (!categModal.classList.contains('hidden')) {
        categModal.classList.add('animation');
        categModal.addEventListener('transitionend', function (e) {
          categModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }


  //   //Вызов окна колбека
  openLeftMenu = document.querySelectorAll('.openMenu');
  leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

  if (document.querySelector('.openMenu')) {
    for (let i = 0; i < openLeftMenu.length; i++) {
      openLeftMenu[i].addEventListener('click', () => {
        openBaseModal();
        leftMenuModal.classList.remove('hidden');
        setTimeout(function () {
          leftMenuModal.classList.remove('animation');
        }, 20);
      });
    }
  }

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

  openVideo = document.querySelectorAll('.openVideo');
  videoModal = document.querySelector('.modal-wrapper__video');

  if (document.querySelector('.openVideo')) {
    for (let i = 0; i < openVideo.length; i++) {
      openVideo[i].addEventListener('click', () => {
        openBaseModal();
        videoModal.classList.remove('hidden');
        setTimeout(function () {
          videoModal.classList.remove('animation');
        }, 20);
      });
    }
  }

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

  // if (document.querySelector('.openGallery')) {
  //   openGallery = document.querySelector('.openGallery');
  //   galleryModal = document.querySelector('.modal-wrapper__gallery');

  //   openGallery.addEventListener('click', function () {
  //     openBaseModal();
  //     galleryModal.classList.remove('hidden');
  //     setTimeout(function () {
  //       galleryModal.classList.remove('animation');
  //     }, 20);
  //   })
  // }

  // function closeGalleryModal() {
  //   if (!galleryModal.classList.contains('hidden')) {
  //     galleryModal.classList.add('animation');
  //     galleryModal.addEventListener('transitionend', function (e) {
  //       galleryModal.classList.add('hidden');
  //     }, {
  //       capture: false,
  //       once: true,
  //       passive: false
  //     });
  //   }
  // };

  if (document.querySelector('.openFullText')) {
    openFullText = document.querySelector('.openFullText');
    fullTextModal = document.querySelector('.modal-wrapper__fulltext');

    openFullText.addEventListener('click', function () {
      openBaseModal();
      fullTextModal.classList.remove('hidden');
      setTimeout(function () {
        fullTextModal.classList.remove('animation');
      }, 20);
    })
  }

  function closeFullTextModal() {
    if (!fullTextModal.classList.contains('hidden')) {
      fullTextModal.classList.add('animation');
      fullTextModal.addEventListener('transitionend', function (e) {
        fullTextModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };


  openBooking = document.querySelectorAll('.openBooking');
  bookingModal = document.querySelector('.modal-wrapper__booking');

  if (document.querySelectorAll('.openBooking')) {
    for (let i = 0; i < openBooking.length; i++) {
      openBooking[i].addEventListener('click', () => {
        openBaseModal();
        bookingModal.classList.remove('hidden');
        setTimeout(function () {
          bookingModal.classList.remove('animation');
        }, 20);
      });
    }
  }

  function closeBookingPopup() {
    if (!bookingModal.classList.contains('hidden')) {
      bookingModal.classList.add('animation');
      bookingModal.addEventListener('transitionend', function (e) {
        bookingModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  function closeAllModal() {
    if (document.querySelector('.openCallback')) {
      closeCallbackPopup();
    };
    if (document.querySelector('.openCateg')) {
      closeCategPopup();
    };
    closeleftMenuModal();
    closeVideoModal();
    // if (document.querySelector('.openGallery')) {
    //   closeGalleryModal();
    // };
    if (document.querySelector('.openFullText')) {
      closeFullTextModal();
    };
    if (document.querySelector('.openBooking')) {
      closeBookingPopup();
    };
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

// Барабан удачи
// Сначала отправляем форму, если отправилась, то запускаем колесо
$(function () {
  if (document.querySelector(".fortune-wrap")) {

    const fortuneForm = $('.fortune__form')
    fortuneForm.submit(function (e) {
      e.preventDefault()
    })

    fortuneForm.validate({
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
        let prizeToSend
        var prize = (Math.floor(Math.random() * 8)) + 1;
        var segmentAngle = ((prize - 1) * -45);
        var segmentAngle = segmentAngle + 1103;
        var wheel = document.getElementById("backdrop");

        // The animation class is only needed for the reset button, it makes the transition smooth instead of instant
        $('.backdrop').addClass("animate");

        // Add a transition directly to the wheel
        wheel.style.webkitTransform = 'rotate(' + segmentAngle + 'deg)';
        wheel.style.mozTransform = 'rotate(' + segmentAngle + 'deg)';
        wheel.style.msTransform = 'rotate(' + segmentAngle + 'deg)';
        wheel.style.oTransform = 'rotate(' + segmentAngle + 'deg)';
        wheel.style.transform = 'rotate(' + segmentAngle + 'deg)';

        // В зависимости от части 1 из 8, получаем текст приза
        switch (prize) {
          case 1:
            prizeToSend = "Скидка 500 рублей на тур в Териберку"
            break;
          case 2:
            prizeToSend = "Скидка 500 рублей на тур в саамскую деревню"
            break;
          case 3:
            prizeToSend = "Бесплатный трансфер В аэропорт"
            break;
          case 4:
            prizeToSend = "Бесплатный трансфер ИЗ аэропорта"
            break;
          case 5:
            prizeToSend = "Купон на 500 рублей в ресторан в Мурманске"
            break;
          case 6:
            prizeToSend = "Купон на 500 рублей в парк активного отдыха 'Северное сияние'"
            break;
          case 7:
            prizeToSend = "Скидка 500 рублей на тур в хаски-парк"
            break;
          case 8:
            prizeToSend = "Скидка 500 рублей на тур на северное сияние"
            break;
          default:
            break;
        }

        // Кладем выигрыш в скрытое поле
        $('#prize').val(prizeToSend)

        $('.backdrop').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (event) {
          //После того как колесо прокрутится - что-то показать пользователю
        });

        // Отправляем форму куда нужно и чистим поля (добавить при бэкенде)
        
      }
    });
  }
});
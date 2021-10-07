/* eslint-disable no-undef */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    new WOW().init()

    // resize
    $(window).on('resize', function () {
      $('body').removeClass('hamOpen')
    })

    // header
    $('#CtHeader__ham').on('click', function () {
      $('body').toggleClass('hamOpen')
    })

    // popup 關閉
    $('#Modal__close').on('click', function () {
      closePopup()
    })

    $('#Modal__back').on('click', function () {
      closePopup()
    })

    // scroll top
    $(document).on('click', '#btn__quickTop', function (e) {
      e.preventDefault()
      $([document.documentElement, document.body]).animate({
        scrollTop: 0
      }, 500)
    })

    // 如果有棕色背景，增加視差滾動效果
    $(window).scroll(function () {
      if ($('.footer__deco-brown')[0]) {
        var ifFooterDwcoShow = $('.footer__deco-brown')[0].getBoundingClientRect().top <= window.innerHeight
        if (ifFooterDwcoShow) {
          $('.fixBg').addClass('brown')
        } else {
          $('.fixBg').removeClass('brown')
        }
      }
    })

    // index
    runIndexContent()

    if (window.location.href.indexOf('shop/list') !== -1) {
      runShopListContent()
    }

    if (window.location.href.indexOf('menu/content') !== -1) {
      runMenuContent()
    }

    if (window.location.href.indexOf('event') !== -1) {
      runEventContent()
    }
  })

  function openPopup () {
    $('body').addClass('popOpen')
  }

  function closePopup () {
    $('body').removeClass('popOpen')
  }

  // carousel 使用
  function updateCustomArrows ($carousel) {
    var data = $carousel.children('.nk-carousel-inner').data('flickity')
    var currIndex = data.selectedIndex
    var nextIndex = 0
    var prevIndex = 0

    // get next and prev cells
    if (currIndex === 0) {
      nextIndex = 1
      prevIndex = data.cells.length - 1
    } else if (currIndex === data.cells.length - 1) {
      nextIndex = 0
      prevIndex = data.cells.length - 2
    } else {
      nextIndex = currIndex + 1
      prevIndex = currIndex - 1
    }
    var $nextCell = $(data.cells[nextIndex].element)
    var $prevCell = $(data.cells[prevIndex].element)
    var $currCell = $(data.cells[currIndex].element)

    // get name and sources
    var nextName = $nextCell.find('.nk-carousel-item-name').text()
    var prevName = $prevCell.find('.nk-carousel-item-name').text()
    var currName = $currCell.find('.nk-carousel-item-name').html()
    var currLinks = $currCell.find('.nk-carousel-item-links').html()

    // add info to buttons
    $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName)
    $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName)
    $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName)
    $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks)
  }
  // carousel 使用 - prevent click event fire when drag carousel
  function noClickEventOnDrag ($carousel) {
    $carousel.on('dragStart', function () {
      $(this).find('.flickity-viewport').addClass('is-dragging')
    })
    $carousel.on('dragEnd', function () {
      $(this).find('.flickity-viewport').removeClass('is-dragging')
    })
  }

  function runIndexContent () {
    // index - popup - 首頁需要再使用
    var $IndexPopUp = $('#Index__popUp')
    if ($IndexPopUp.length) {
      // 依照需求可調整 modal 跳出時間
      setTimeout(() => {
        openPopup()
      }, 2000)
    }

    // 跑馬燈
    var $IndexPrompter = $('#IndexPrompter')
    if ($IndexPrompter.length) {
      var textDom = $('#IndexPrompter__text')
      var textPosX = $IndexPrompter.innerWidth()

      setInterval(function () {
        if (textPosX + textDom.innerWidth() < -10) {
          textPosX = $IndexPrompter.innerWidth()
        }
        textPosX -= 1
        textDom[0].style.left = textPosX + 'px'
      }, 20)
    }

    var $indexBannerCarousel = $('#IndexBannerCarousel')
    if ($indexBannerCarousel.length) {
      $indexBannerCarousel.children('.nk-carousel-inner').each(function () {
        $(this).flickity({
          pageDots: $(this).parent().attr('data-dots') === 'true' || false,
          autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
          prevNextButtons: false,
          wrapAround: true,
          cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        })
        if ($(this).parent().attr('data-arrows') === 'true') {
          addDefaultArrows($(this))
        }
        updateCustomArrows($(this).parent())
      }).on('cellSelect', function () {
        updateCustomArrows($(this).parent())
      })
      $indexBannerCarousel.on('click', '.nk-carousel-next', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('next')
      })
      $indexBannerCarousel.on('click', '.nk-carousel-prev', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('previous')
      })
      noClickEventOnDrag($indexBannerCarousel.children('.nk-carousel-inner'))
    }

    var $IndexNewsCarousel = $('#IndexNewsCarousel')
    if ($IndexNewsCarousel.length) {
      $IndexNewsCarousel.children('.nk-carousel-inner').each(function () {
        $(this).flickity({
          pageDots: $(this).parent().attr('data-dots') === 'true' || false,
          autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
          prevNextButtons: false,
          wrapAround: true,
          cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        })
        if ($(this).parent().attr('data-arrows') === 'true') {
          addDefaultArrows($(this))
        }
        updateCustomArrows($(this).parent())
      }).on('cellSelect', function () {
        updateCustomArrows($(this).parent())
      })
      $IndexNewsCarousel.on('click', '.nk-carousel-next', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('next')
      })
      $IndexNewsCarousel.on('click', '.nk-carousel-prev', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('previous')
      })
      noClickEventOnDrag($IndexNewsCarousel.children('.nk-carousel-inner'))
    }

    var $IndexMenuCarousel = $('#IndexMenuCarousel')
    if ($IndexMenuCarousel.length) {
      $('.IndexMenuCarousel > .nk-carousel-inner').each(function () {
        $(this).flickity({
          pageDots: $(this).parent().attr('data-dots') === 'true' || false,
          autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
          prevNextButtons: false,
          wrapAround: true,
          imagesLoaded: true,
          cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        })
        $IndexMenuCarousel.on('click', '.nk-carousel-next', function () {
          $(this).parent().children('.nk-carousel-inner').flickity('next')
        })
        $IndexMenuCarousel.on('click', '.nk-carousel-prev', function () {
          $(this).parent().children('.nk-carousel-inner').flickity('previous')
        })
        noClickEventOnDrag($(this))
      })
    }
  }

  function runShopListContent () {
    $('.ShopList__shopsAreaBtn').on('click', function () {
      $('.ShopList__shopsAreaBtn').removeClass('active')
      $(this).addClass('active')

      // 跑假資料提供驗收
      const classify = $(this).text()
      let domString = ''
      for (var i = 0; i < 4; i++) {
        domString += `<div
            data-wow-duration="1s"
            class="ShopList__shop col-6 col-md-12 wow fadeInUp"
          >
            <div class="ShopList__shopInner">
              <div class="ShopList__shopName">
                <a href="../shop/content.html" class="">
                  ${classify + i}
                </a>
              </div>
              <div class="ShopList__shopPhone futuraBTMedium ">
                <span class="prefix">TEL / </span
                ><a href="tel:073646210">07-3646210</a>
              </div>
              <div class="ShopList__shopAdd">
                <span class="futuraBTMedium prefix">ADD / </span
                ><a
                  target="_blank"
                  href="https://www.google.com.tw/maps?q=%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E5%BE%8C%E6%98%8C%E6%96%B0%E8%B7%AF152%E8%99%9F"
                  >高雄市楠梓區後昌新路152號</a
                >
              </div>
              <div class="ShopList__shopNote">8月23日起新店民權店進行裝修，暫停營業。<br />裝修期間持續提供外帶服務，歡迎來電訂購。<br />新美東時尚新裝將於10月嶄新登場，屆時歡迎蒞臨體驗。西堤牛排感謝您的支持與鼓勵。</div>
              <div class="ShopList__shopBtns">
                <a href="https://cct.wowprime.com/cct/cctapp/cctwebreservation.do?&prog=cctweb_reservation&brnd_fid=SUEBQ&stor" target="_blank" class="Button"
                  >
                  線上訂位 </a
                ><a href="https://inline.app/order/-MaCuOJnnM6rhJg4YTPy:inline-live-2?language=zh-tw" target="_blank" class="Button"
                  >
                  外帶自取
                </a>
              </div>
            </div>
          </div>
        `
      }
      $('#ShopList__shopsContent').html(domString)
    })
  }

  function runEventContent () {
    // 數字動態
    function countUp () {
      var $this = $(this)
      var countTo = $this.attr('data-count')
      if (parseInt($this.text()) > 0) return
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum).toLocaleString('en'))
        },
        complete: function () {
          $this.text(this.countNum.toLocaleString('en'))
        }
      })
    }

    function checkPosAndTriggerAnimate () {
      if (!this.getBoundingClientRect) return
      const pos = this.getBoundingClientRect()
      if (pos.top < window.innerHeight * 3 / 4) {
        countUp.bind(this)()
      }
    }

    $(window).scroll(function () {
      if (window.location.href.indexOf('event') !== -1) {
        checkPosAndTriggerAnimate.bind($('#blood-accumulation')[0])()
      }
    })

    // event
    var $EventCarousel = $('#EventCarousel')
    var isCarouselDrag = false
    $EventCarousel.children('.nk-carousel-inner').each(function () {
      $(this).flickity({
        pageDots: $(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: $(this).parent().attr('data-cell-align') || 'center'
      })
      updateCustomArrows($(this).parent())
      if ($(this).parent().attr('data-arrows') === 'true') {
        addDefaultArrows($(this))
      }
    }).on('cellSelect', function () {
      updateCustomArrows($(this).parent())
    })
    $EventCarousel.on('click', '.nk-carousel-next', function () {
      $(this).parents('#EventCarousel:eq(0)').children('.nk-carousel-inner').flickity('next')
    })
    $EventCarousel.on('click', '.nk-carousel-prev', function () {
      $(this).parents('#EventCarousel:eq(0)').children('.nk-carousel-inner').flickity('previous')
    })

    noClickEventOnDrag($EventCarousel.children('.nk-carousel-inner'))
    $EventCarousel.children('.nk-carousel-inner').on('dragStart', function () {
      isCarouselDrag = true
    })
    $EventCarousel.children('.nk-carousel-inner').on('dragEnd', function () {
      setTimeout(() => {
        isCarouselDrag = false
      }, 300)
    })
    $EventCarousel.on('click', '.carousel__item', function (dom) {
      if (isCarouselDrag) {
        return
      }
      var url = dom.target.src
      var domString = '<div><div class="Modal__popTitle"><div>標題一</div><div>標題二</div></div></div><img class="Modal__popPic" src="' + url + '"></img>'
      $('#Modal__content').html(domString)
      openPopup()
    })
  }

  function runMenuContent () {
    var $MenuContentCarousel = $('#MenuContentCarousel')
    $('.MenuContentCarousel > .nk-carousel-inner').each(function () {
      // var isCarouselDrag = false
      $(this).flickity({
        pageDots: $(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: $(this).parent().attr('data-cell-align') || 'center'
      })
      $MenuContentCarousel.on('click', '.nk-carousel-next', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('next')
      })
      $MenuContentCarousel.on('click', '.nk-carousel-prev', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('previous')
      })
      noClickEventOnDrag($(this))

      // $MenuContentCarousel.children('.nk-carousel-inner').on('dragStart', function () {
      //   isCarouselDrag = true
      // })
      // $MenuContentCarousel.children('.nk-carousel-inner').on('dragEnd', function () {
      //   setTimeout(() => {
      //     isCarouselDrag = false
      //   }, 300)
      // })
      // $MenuContentCarousel.on('click', '.carousel__item', function (dom) {
      //   if (isCarouselDrag) {
      //     return
      //   }
      //   var url = dom.target.src
      //   var domString = '<img class="Modal__popPic" src="' + url + '">'
      //   $('#Modal__content').html(domString)
      //   openPopup()
      // })
    })

    _initPluginPhotoswipe()
  }

  /* PhotoSwipe */
  function _initPluginPhotoswipe () {
    var $gallery = $('.nk-popup-gallery')
    if ($gallery.length !== 1) {
      return
    }

    // prepare photoswipe markup
    var markup = '<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n          <div class="pswp__bg"></div>\n          <div class="pswp__scroll-wrap">\n            <div class="pswp__container">\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n            </div>\n            <div class="pswp__ui pswp__ui--hidden">\n              <div class="pswp__top-bar">\n                <div class="pswp__counter"></div>\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n                <div class="pswp__preloader">\n                  <div class="pswp__preloader__icn">\n                    <div class="pswp__preloader__cut">\n                      <div class="pswp__preloader__donut"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div>\n              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\n              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\n              <div class="pswp__caption">\n                <div class="pswp__caption__center">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>'
    $('body').append(markup)

    // init code
    var parseThumbnailElements = function parseThumbnailElements (el) {
      var thumbElements = $(el).find('a.nk-gallery-item')
      var items = []
      var childElements = void 0
      var size = void 0
      var item = void 0

      thumbElements.each(function () {
        childElements = $(this).find('img')
        size = (this.getAttribute('data-size') || '1920x1080').split('x')

        // create slide object
        item = {
          src: this.getAttribute('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
          author: this.getAttribute('data-author')
        }

        // save link to element for getThumbBoundsFn
        item.el = this

        if (childElements.length > 0) {
          // thumbnail url
          item.msrc = childElements[0].getAttribute('src')
          if (childElements.length > 1) {
            item.title = $(childElements).filter('.photoswipe-description').html()
          }
        }

        var mediumSrc = this.getAttribute('data-med') || item.src
        if (mediumSrc) {
          size = (this.getAttribute('data-med-size') || this.getAttribute('data-size') || '1920x1080').split('x')
          // "medium-sized" image
          item.m = {
            src: mediumSrc,
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          }
        }
        // original image
        item.o = {
          src: item.src,
          w: item.w,
          h: item.h
        }
        items.push(item)
      })

      return items
    }

    var openPhotoSwipe = function openPhotoSwipe (index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = $('.pswp')[0]
      var gallery = void 0
      var options = void 0
      var items = void 0

      items = parseThumbnailElements(galleryElement)

      // define options (if needed)
      options = {
        captionAndToolbarShowEmptyCaptions: false,
        mainClass: 'pswp--minimal--dark',
        barsSize: { top: 0, bottom: 0 },
        captionEl: true,
        fullscreenEl: false,
        shareEl: false,
        bgOpacity: 0.85,
        tapToClose: true,
        tapToToggleControls: false,

        // Function builds caption markup
        addCaptionHTMLFn: function addCaptionHTMLFn (item, captionEl) {
          // item      - slide object
          // captionEl - caption DOM element
          // isFake    - true when content is added to fake caption container
          //             (used to get size of next or previous caption)

          if (!item.title && !item.author) {
            captionEl.children[0].innerHTML = ''
            return false
          }
          var caption = ''
          if (item.title) {
            caption += item.title
          }
          if (item.author) {
            if (item.title) {
              caption += '<br>'
            }
            caption += '<small>' + item.author + '</small>'
          }
          captionEl.children[0].innerHTML = caption
          return true
        },

        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        getThumbBoundsFn: function getThumbBoundsFn (idx) {
          // See Options->getThumbBoundsFn section of docs for more info
          var thumbnail = items[idx].el.children[0]
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          var rect = thumbnail.getBoundingClientRect()

          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
        }
      }

      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid === index) {
              options.index = j
              break
            }
          }
        } else {
          options.index = parseInt(index, 10) - 1
        }
      } else {
        options.index = parseInt(index, 10)
      }

      // exit if index not found
      if (isNaN(options.index)) {
        return
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0
      }

      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)

      // see: http://photoswipe.com/documentation/responsive-images.html
      var realViewportWidth = void 0
      var useLargeImages = false
      var firstResize = true
      var imageSrcWillChange = void 0

      gallery.listen('beforeResize', function () {
        var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1
        dpiRatio = Math.min(dpiRatio, 2.5)
        realViewportWidth = gallery.viewportSize.x * dpiRatio

        if (realViewportWidth >= 1200 || !gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
          if (!useLargeImages) {
            useLargeImages = true
            imageSrcWillChange = true
          }
        } else {
          if (useLargeImages) {
            useLargeImages = false
            imageSrcWillChange = true
          }
        }

        if (imageSrcWillChange && !firstResize) {
          gallery.invalidateCurrItems()
        }

        if (firstResize) {
          firstResize = false
        }

        imageSrcWillChange = false
      })

      gallery.listen('gettingData', function (idx, item) {
        if (useLargeImages) {
          item.src = item.o.src
          item.w = item.o.w
          item.h = item.o.h
        } else {
          item.src = item.m.src
          item.w = item.m.w
          item.h = item.m.h
        }
      })

      gallery.init()
    }

    var photoswipeParseHash = function photoswipeParseHash () {
      var hash = window.location.hash.substring(1)
      var params = {}

      if (hash.length < 5) {
        // pid=1
        return params
      }

      var vars = hash.split('&')
      for (var _i7 = 0; _i7 < vars.length; _i7++) {
        if (!vars[_i7]) {
          continue
        }
        var pair = vars[_i7].split('=')
        if (pair.length < 2) {
          continue
        }
        params[pair[0]] = pair[1]
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10)
      }

      return params
    }

    // select all gallery elements
    var i = 0
    $gallery.each(function () {
      var $thisGallery = $(this)
      $thisGallery.attr('data-pswp-uid', i + 1)

      $thisGallery.on('click', 'a.nk-gallery-item', function (e) {
        e.preventDefault()
        var index = 0
        var clicked = this
        $thisGallery.find('a.nk-gallery-item').each(function (idx) {
          if (this === clicked) {
            index = idx
            return false
          }
          return true
        })
        openPhotoSwipe(index, $thisGallery[0])
      })
      i++
    })

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash()
    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, $gallery.get(hashData.gid - 1), true, true)
    }
  }
})()

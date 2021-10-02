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
    if ($('.footer__deco-brown')[0]) {
      var ifFooterDwcoShow = $('.footer__deco-brown')[0].getBoundingClientRect().top <= window.innerHeight
      if (ifFooterDwcoShow) {
        $('.fixBg').addClass('brown')
      } else {
        $('.fixBg').removeClass('brown')
      }
    }

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
      openPopup()
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

      if ($('.footer__deco-brown')[0]) {
        var ifFooterDwcoShow = $('.footer__deco-brown')[0].getBoundingClientRect().top <= window.innerHeight
        if (ifFooterDwcoShow) {
          $('.fixBg').addClass('brown')
        } else {
          $('.fixBg').removeClass('brown')
        }
      }
    })

    // event
    var $EventCarousel = $('#EventCarousel')
    $('.EventCarousel > .nk-carousel-inner').each(function () {
      $(this).flickity({
        pageDots: $(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: $(this).parent().attr('data-cell-align') || 'center',
        draggable: false
      })
      $EventCarousel.on('click', '.nk-carousel-next', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('next')
      })
      $EventCarousel.on('click', '.nk-carousel-prev', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('previous')
      })
      noClickEventOnDrag($(this))

      $EventCarousel.on('click', '.carousel__item', function (dom) {
        var url = dom.target.src
        var domString = '<div><div class="Modal__popTitle"><div>標題一</div><div>標題二</div></div></div><img class="Modal__popPic" src="' + url + '"></img>'
        $('#Modal__content').html(domString)
        openPopup()
      })
    })
  }

  function runMenuContent () {
    var $MenuContentCarousel = $('#MenuContentCarousel')
    $('.MenuContentCarousel > .nk-carousel-inner').each(function () {
      $(this).flickity({
        pageDots: $(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: $(this).parent().attr('data-cell-align') || 'center',
        draggable: false
      })
      $MenuContentCarousel.on('click', '.nk-carousel-next', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('next')
      })
      $MenuContentCarousel.on('click', '.nk-carousel-prev', function () {
        $(this).parent().children('.nk-carousel-inner').flickity('previous')
      })
      noClickEventOnDrag($(this))

      $MenuContentCarousel.on('click', '.carousel__item', function (dom) {
        var url = dom.target.src
        var domString = '<img class="Modal__popPic" src="' + url + '">'
        $('#Modal__content').html(domString)
        openPopup()
      })
    })
  }
})()

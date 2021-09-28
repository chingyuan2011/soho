/* eslint-disable no-undef */

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

  // scroll top
  $(document).on('click', '#btn__quickTop', function (e) {
    e.preventDefault()
    // 秒數可計算
    $([document.documentElement, document.body]).animate({
      scrollTop: 0
    }, 500)
  })

  // popup
  $('#Modal__close').on('click', function () {
    closePopup()
  })

  $('#Modal__back').on('click', function () {
    closePopup()
  })

  function openPopup () {
    $('body').addClass('popOpen')
  }
  function closePopup () {
    $('body').removeClass('popOpen')
  }

  // index
  // popup - 首頁需要再打開
  if (window.location.href.indexOf('index') !== -1) {
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

  // banner carousel
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

  // 以下 carousel 使用 - start
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
  // prevent click event fire when drag carousel
  function noClickEventOnDrag ($carousel) {
    $carousel.on('dragStart', function () {
      $(this).find('.flickity-viewport').addClass('is-dragging')
    })
    $carousel.on('dragEnd', function () {
      $(this).find('.flickity-viewport').removeClass('is-dragging')
    })
  }
  // 以下 carousel 使用 - end

  // menu/content
  var $MenuContentCarousel = $('#MenuContentCarousel')
  $('.MenuContentCarousel > .nk-carousel-inner').each(function () {
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

    $MenuContentCarousel.on('click', '.carousel__item', function (dom) {
      var url = dom.target.src
      var domString = '<img class="Modal__popPic" src="' + url + '">'
      $('#Modal__content').html(domString)
      openPopup()
    })
  })

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
    const pos = this.getBoundingClientRect()
    if (pos.top < window.innerHeight * 3 / 4) {
      countUp.bind(this)()
    }
  }

  $(window).scroll(function () {
    checkPosAndTriggerAnimate.bind($('#blood-accumulation')[0])()
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
      cellAlign: $(this).parent().attr('data-cell-align') || 'center'
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
})

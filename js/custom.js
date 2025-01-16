/* eslint-disable no-undef */
;(function () {
  document.addEventListener('DOMContentLoaded', function () {
    new WOW().init()
    navbarHandler()

    // 判斷頁面
    const currentMap = window.location.pathname
    const pageHandlerMap = {
      index: indexHandler,
      productContent: productContentHandler,
      cartProcess2: cartProcess2Handler,
      news: newsHandler,
      detection: detectionHandler
    }
    const pageRegex = /\/(\w+)\.html/
    const pageName = currentMap.match(pageRegex)[1]
    pageHandlerMap[pageName] && pageHandlerMap[pageName]()

    // scroll top
    $(document).on('click', '#btn__quickTop', function (e) {
      e.preventDefault()
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: 0
        },
        500
      )
    })

    // Page - ProductContent
    $('.slider_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,

      infinite: false,
      arrows: false,
      asNavFor: '.slider_sub'
      // dots: true,
    })
    $('.slider_sub').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      arrows: false,
      asNavFor: '.slider_main',
      focusOnSelect: true,
      centerMode: false
    })
  })
})()

const navbarHandler = () => {
  const mobileBp = 1280
  // resize
  const reset = () => {
    $('body').css('overflow', 'auto')
    $('.ProjectHeader').removeClass('mb-active')
    $('#menu_itemProducts').removeClass('active')
    $('#functionBar_member').removeClass('active')
  }
  $(window).on('resize', function () {
    reset()
  })

  $('#hamburger').on('click', function () {
    $('body').css('overflow', 'hidden')
    $('.ProjectHeader').addClass('mb-active')
  })

  $('#navbar_closeBtn').on('click', function () {
    reset()
  })

  $('#menu_itemProducts').on('click', function () {
    $('#menu_itemProducts').toggleClass('active')

    const ww = $(document).width()
    if (ww <= mobileBp) {
      $('body').css('overflow', 'hidden')
      $('.ProjectHeader').addClass('mb-active')
    }
  })

  $('#navbar_memberBtn').on('click', function () {
    $('#functionBar_member').toggleClass('active')

    const ww = $(document).width()
    if (ww <= mobileBp) {
      $('body').css('overflow', 'hidden')
      $('.ProjectHeader').addClass('mb-active')
    }
  })
}

const indexHandler = () => {
  // 1/15 輪播器調整 - 主頁首圖
  const indexKvData = [
    {
      srcset: '/img/index/kv1-mobile.jpg',
      src: '/img/index/kv1.jpg',
      alt: '昆布芽'
    },
    {
      srcset: '/img/index/kv2-mobile.jpg',
      src: '/img/index/kv2.jpg',
      alt: '海藻製造所'
    }
  ]
  initIndexKvSlider(indexKvData)

  $('.productList').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    arrows: true
  })

  //
  $('.action_icon-cart').on('click', function (e) {
    e.preventDefault()
  })
  $('.action_icon-bag').on('click', function (e) {
    e.preventDefault()
  })
  $('.productAll_itemBtns-cart').on('click', function (e) {
    e.preventDefault()
  })
  $('.productAll_itemBtns-bag').on('click', function (e) {
    e.preventDefault()
  })
}

const initIndexKvSlider = (data) => {
  const Dom = $('#indexKvSlider')
  Dom.html('')
  let htmlString = ''

  const getTemplate = (item) => {
    return `
      <picture>
        <source
          srcset="${item.srcset}"
          media="(max-width: 600px)"
        >
        <img
          src="${item.src}"
          alt="${item.alt}"
        >
      </picture>
    `
  }

  data.forEach(item => { htmlString += getTemplate(item) })
  Dom.html(htmlString)

  Dom.slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    arrows: false
  })
}

const productContentHandler = () => {}

const cartProcess2Handler = () => {
  $('.CartProcess2_client-paymentOption').on('click', function (e) {
    e.preventDefault()
    $('.CartProcess2_client-paymentOption').removeClass('active')
    $(this).addClass('active')

    if ($(this).hasClass('CartProcess2_client-payment-creditCard')) {
      $('.CartProcess2_client-creditCard').addClass('active')
    } else {
      $('.CartProcess2_client-creditCard').removeClass('active')
    }
  })
  $('#CartProcess2_toggle-cartBtn').on('click', function (e) {
    $('#CartProcess2_toggle-cartBtn').toggleClass('active')
    $('#CartProcess2_cart').toggleClass('active')
  })
}

const newsHandler = () => {
  const ww = $(document).width()
  if (ww < 768) return

  const follower = $('#News_follower')
  const videoWrap = $('#News_followerVideo')
  let videoDom = ''

  document.addEventListener('mousemove', function (e) {
    follower.css({
      transform: 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
    })
  })

  const openVideo = (videoId) => {
    $('#News_follower').addClass('active')
    parentDom = videoWrap
    videoDom = document.createElement('iframe')
    videoDom.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0`
    videoDom.frameborder = '0'
    videoDom.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    parentDom.append(videoDom)
  }

  const closeVideo = () => {
    $('#News_follower').removeClass('active')
    $(videoDom).remove()
  }

  $('.News_item').on({
    mouseenter: function () {
      const href = $(this).data('youtube-id')
      if (href) openVideo(href)
    },
    mouseleave: closeVideo
  })
}

const detectionHandler = () => {
  $('#Detection_sliderContent').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoSpeed: 5000,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.Detection_sliderDot').on('click', function () {
    const dom = $(this)
    const index = dom.data('slider-index')
    $('#Detection_sliderContent').slick('slickGoTo', index)
  })

  $('#Detection_sliderPrev').on('click', function () {
    $('#Detection_sliderContent').slick('slickPrev')
  })

  $('#Detection_sliderNext').on('click', function () {
    $('#Detection_sliderContent').slick('slickNext')
  })
}

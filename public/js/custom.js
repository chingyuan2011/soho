/* eslint-disable no-undef */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    new WOW().init()
    navbarHandler()

    // 判斷頁面
    const currentMap = window.location.pathname
    const pageHandlerMap = {
      index: indexHandler,
      productContent: productContentHandler,
      cartProcess2: cartProcess2Handler,
      news: newsHandler
    }
    const pageRegex = /\/(\w+)\.html/
    const pageName = currentMap.match(pageRegex)[1]
    pageHandlerMap[pageName] && pageHandlerMap[pageName]()

    // scroll top
    $(document).on('click', '#btn__quickTop', function (e) {
      e.preventDefault()
      $([document.documentElement, document.body]).animate({
        scrollTop: 0
      }, 500)
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
  $('.kv_content').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    arrows: false
  })

  $('.productList').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    // autoplay: true,
    arrows: true
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
    videoDom.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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

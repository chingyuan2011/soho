/* eslint-disable no-undef */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    new WOW().init()

    // 判斷頁面
    const currentMap = window.location.pathname
    const pageHandlerMap = {
      index: indexHandler,
      productContent: productContentHandler
    }
    const pageRegex = /\/(\w+)\.html/
    const pageName = currentMap.match(pageRegex)[1]
    pageHandlerMap[pageName] && pageHandlerMap[pageName]()

    // resize
    $(window).on('resize', function () {
      $('body').removeClass('hamOpen')
    })

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

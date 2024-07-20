/* eslint-disable no-undef */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    new WOW().init()
    $('.kv_content').slick({
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      arrows: false
    })
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
  })
})()

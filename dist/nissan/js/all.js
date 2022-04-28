$(document).ready(function () {
  var wow = new WOW({
    offset: 1500
  })
  new WOW().init()

  var body = $('html, body')

  window.addEventListener('resize', function () {
    closeMenu()
  })

  $('#hambtn').click(function () {
    body.toggleClass('mActive')

    var overTrigger = true
    if (body.hasClass('mActive')) {
      overTrigger = false
    }
    setBodyOverflow(overTrigger)
  })

  function closeMenu () {
    body.removeClass('mActive')
    setBodyOverflow(true)
  }

  function setBodyOverflow (boolean) {
    var overflow = boolean ? 'auto' : 'hidden'
    body.css('overflow', overflow)
  };

  $('.header__menu-link').click(function (e) {
    var deviceOffset = $(window).width() > 768 ? 110 : 130
    var target = $(this).attr('href')
    var targetPos = $(target).offset().top - deviceOffset
    body.animate({ scrollTop: targetPos }, 1000)
    closeMenu()
  })

  $('.car__btn').click(function () {
    $('.car__btn').removeClass('active')
    $('.car__main ').removeClass('active')

    var carName = $(this).data('car')
    $('.car__btn-' + carName).addClass('active')
    $('.car__main-' + carName).addClass('active')
  })
})

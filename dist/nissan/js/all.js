$(document).ready(function () {
  var wow = new WOW({
    offset: 1500
  })
  new WOW().init()

  var body = $('html, body')
  
  var oriScrollTop = 0
  var scrollListenerTrigger = true
  window.addEventListener('scroll', function () {
    if(!scrollListenerTrigger) return

    var newScrollTop = body.scrollTop()
    if (newScrollTop > 300) {
      body.addClass('overPT200')
    } else {
      body.removeClass('overPT200')
    }

    if (newScrollTop < oriScrollTop) {
      body.addClass('scrollBack')
    } else {
      body.removeClass('scrollBack')
    }
    oriScrollTop = newScrollTop
  })

  window.addEventListener('resize', function () {
    closeMenu()
  })

  $('#hambtn').click(function () {
    body.toggleClass('mActive')

    var overTrigger = true
    if (body.hasClass('mActive')) {
      scrollListenerTrigger = false
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
    scrollListenerTrigger = false
    var target = $(this).attr('href')

    var deviceOffset = $(window).width() > 768 ? 110 : 100

    var targetPos = $(target).offset().top - deviceOffset
    body.animate({ scrollTop: targetPos }, 1000, 'linear')
    setTimeout(function(){
      scrollListenerTrigger = true
    }, 500)
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

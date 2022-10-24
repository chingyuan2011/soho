$(document).ready(function () {
  var wow = new WOW({
    offset: 1500
  })
  new WOW().init()

  var body = $('html, body')
  var scrollBack = 'scrollBack'
  var overPT300= 'overPT300'

  var oriScrollTop = 0
  window.addEventListener('scroll', function () {

    var newScrollTop = body.scrollTop()

    if(newScrollTop > 300) {
      body.addClass(overPT300)
    } else {
      body.removeClass(overPT300)
    }

    if (newScrollTop < oriScrollTop) {
      body.addClass(scrollBack)
    }else {
      body.removeClass(scrollBack)
    }

    oriScrollTop = newScrollTop
  })

  window.addEventListener('resize', function () {
    closeMenu()
  })

  $('#hambtn').click(function () {
    body.toggleClass('mActive')

    var overTrigger = body.hasClass('mActive') ? false : true

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
    e.preventDefault();
    var target = $(this).attr('href')

    var isPc = $(window).width() > 768
    
    var targetOriPos = $(target).offset().top

    var navbarOffset = oriScrollTop < targetOriPos ? 0 : isPc ? 110 : 80
    var targetPos = targetOriPos - navbarOffset - 20
    var time = Math.ceil(Math.abs(targetOriPos - oriScrollTop) / 500) * 200

    body.animate({ scrollTop: targetPos }, time, 'linear')
    
    closeMenu()
  })
})

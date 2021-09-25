/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  // resize
  $(window).resize(function () {
    $('body').removeClass('hamOpen')
  })

  // header
  $('.CtHeader__ham').on('click', function () {
    $('body').toggleClass('hamOpen')
  })
})

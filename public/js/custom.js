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

  // index
  // banner carousel
  var $indexBannerCarousel = $('.IndexBannerCarousel')
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

  //   var $IndexMenuCarousel = $('.IndexMenuCarousel')
  var $IndexMenuCarousel = $('.IndexMenuCarousel')

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
})

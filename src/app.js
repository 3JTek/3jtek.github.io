import './style.scss'

let canScroll = true

function init(){

  const slider = $('.slider')
  const slideWidth = 0.835 * slider[0].scrollWidth / 3
  // slider[0].scrollLeft = -0.01 * slider[0].scrollWidth / 3
  slider.bind('mousewheel DOMMouseScroll', scrollSlide)

  function scrollSlide(e){
    const deltaX = e.originalEvent.deltaX
    if(deltaX) e.preventDefault()

    if(Math.abs(deltaX) > 10 && canScroll) {

      canScroll = false

      const direction = deltaX > 0 ? 1 : -1
      const scrollToPerformed = slider[0].scrollLeft + (direction * slideWidth)
      $('.slider').animate({scrollLeft: scrollToPerformed}, 500, 'swing')

      setTimeout(() => canScroll = true , 600)
    }
  }
}

$(document).ready(init)

import './style.scss'

let canScroll = true

function init(){

  const slider = $('.slider')
  //Calculate the width of one project slide
  const slideWidth = slider[0].scrollWidth / 3

  //Event listener for 2 fingers type of scrolling (or mouseWheel)
  slider.bind('mousewheel DOMMouseScroll', scrollSlide)

  function scrollSlide(e){
    //Calculate the horizontal scrolling
    const deltaX = e.originalEvent.deltaX
    //Prevent any normal scrolling
    if(deltaX) e.preventDefault()
    //Prevent sliding logic in mobile view
    if(slideWidth <= 480) return
    //Make sure the user wants to scroll horizontally
    if(Math.abs(deltaX) > 15 && canScroll) {

      //Allows to only run the code below once every 600 ms just to avoid
      //having the code run multiple time per second
      canScroll = false

      const direction = deltaX > 0 ? 1 : -1
      const scrollToPerformed = slider[0].scrollLeft + (direction * slideWidth)
      $('.slider').animate({scrollLeft: scrollToPerformed}, 500, 'swing')

      setTimeout(() => canScroll = true , 600)
    }
  }
}

$(document).ready(init)

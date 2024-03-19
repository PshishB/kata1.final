import '../scss/1.scss'
import '../scss/2.scss'
import '../scss/3.scss'
import '../scss/6.scss'
import '../scss/7.scss'
import '../scss/8.scss'
import '../scss/9.scss'
import '../fonts/10.scss'

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.scss'
const slider = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  slidesPerView: 'auto',

  spaceBetween: 16
})

let burgerButton = document.querySelector('.burgerMenu')
let burgerSpan = document.querySelectorAll('.burgerMenu__span')
let burger = document.querySelector('.burger')
let body = document.querySelector('.body')
let mainPart = document.querySelector('.main')

burgerButton.addEventListener('click', function () {
  if (burgerSpan[0].classList.contains('spanRotate')) {
    for (let i = 0; i < burgerSpan.length; i++) {
      burgerSpan[i].classList.remove('spanRotate')
    }
    burger.classList.add('hidden')
  } else {
    for (let i = 0; i < burgerSpan.length; i++) {
      burgerSpan[i].classList.add('spanRotate')
    }
    burger.classList.remove('hidden')
  }
})
var button = document.querySelector('.brand__more')
var buttonHide = document.querySelector('.hide')
var buttonShow = document.querySelector('.show')
var imgShow = document.querySelector('.more__img')
var companys = document.querySelectorAll('.brand__item')

document.addEventListener('DOMContentLoaded', function () {
  if (window.screen.width < 1008) {
    for (var i = 6; i < companys.length; i++) {
      companys[i].classList.add('hidden')
    }
  }
  if (window.screen.width > 1008) {
    for (var i = 8; i < companys.length; i++) {
      companys[i].classList.add('hidden')
    }
  }
})

button.addEventListener('click', function () {
  if (window.screen.width < 1008) {
    if (buttonHide.classList.contains('hidden')) {
      buttonShow.classList.add('hidden')
      buttonHide.classList.remove('hidden')
      imgShow.classList.add('reverse')
      for (var i = 6; i < companys.length; i++) {
        companys[i].classList.remove('hidden')
      }
    } else {
      buttonShow.classList.remove('hidden')
      buttonHide.classList.add('hidden')
      imgShow.classList.remove('reverse')
      for (var i = 6; i < companys.length; i++) {
        companys[i].classList.add('hidden')
      }
    }
  }
  if (window.screen.width > 1008) {
    if (buttonHide.classList.contains('hidden')) {
      buttonShow.classList.add('hidden')
      buttonHide.classList.remove('hidden')
      imgShow.classList.add('reverse')
      for (var i = 8; i < companys.length; i++) {
        companys[i].classList.remove('hidden')
      }
    } else {
      buttonShow.classList.remove('hidden')
      buttonHide.classList.add('hidden')
      imgShow.classList.remove('reverse')
      for (var i = 8; i < companys.length; i++) {
        companys[i].classList.add('hidden')
      }
    }
  }
})

var button1 = document.querySelector('.withoutSwiper__more')
var buttonHide1 = document.querySelector('.withoutSwiper__hide ')
var buttonShow1 = document.querySelector('.withoutSwiper__show')
var imgShow1 = document.querySelector('.withoutSwiper__img')
var services = document.querySelectorAll('.withoutSwiper__item')

document.addEventListener('DOMContentLoaded', function () {
  if (window.screen.width < 1008) {
    for (var i = 3; i < services.length; i++) {
      services[i].classList.add('hidden')
      console.log(1)
    }
  }
  if (window.screen.width > 1008) {
    for (var i = 4; i < services.length; i++) {
      services[i].classList.add('hidden')
    }
  }
})

button1.addEventListener('click', function () {
  if (window.screen.width < 1008) {
    if (buttonHide1.classList.contains('hidden')) {
      buttonShow1.classList.add('hidden')
      buttonHide1.classList.remove('hidden')
      imgShow1.classList.add('reverse')
      for (var i = 3; i < services.length; i++) {
        services[i].classList.remove('hidden')
      }
    } else {
      buttonShow1.classList.remove('hidden')
      buttonHide1.classList.add('hidden')
      imgShow1.classList.remove('reverse')
      for (var i = 3; i < services.length; i++) {
        services[i].classList.add('hidden')
      }
    }
  }
  if (window.screen.width > 1008) {
    if (buttonHide1.classList.contains('hidden')) {
      buttonShow1.classList.add('hidden')
      buttonHide1.classList.remove('hidden')
      imgShow1.classList.add('reverse')
      for (var i = 4; i < services.length; i++) {
        services[i].classList.remove('hidden')
      }
    } else {
      buttonShow1.classList.remove('hidden')
      buttonHide1.classList.add('hidden')
      imgShow1.classList.remove('reverse')
      for (var i = 4; i < services.length; i++) {
        services[i].classList.add('hidden')
      }
    }
  }
})

let modalSearchButton = document.querySelector('.feedback__keybtn')
let modalSearch = document.querySelector('.feedback')

modalSearchButton.addEventListener('click', function () {
  modalSearch.classList.remove('hidden')
})

let repairSearchButton = document.querySelector('.repair__keybtn')
let modalRepair = document.querySelector('.modalRepair')

repairSearchButton.addEventListener('click', function () {
  modalRepair.classList.toggle('hidden')
})

let modal = document.querySelectorAll('.modal')
let modalCloseButton = document.querySelectorAll('.modal__close')
modalCloseButton.forEach(function (elem) {
  elem.addEventListener('click', function () {
    modalRepair.classList.add('hidden')
    modalSearch.classList.add('hidden')
  })
})

document.addEventListener('scroll', function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add('hidden')
  }
  for (let i = 0; i < burgerSpan.length; i++) {
    burgerSpan[i].classList.remove('spanRotate')
  }
  burger.classList.add('hidden')
})

let topButtons = document.querySelectorAll('.top__btn')
topButtons[0].addEventListener('click', function () {
  modalSearch.classList.remove('hidden')
})
topButtons[1].addEventListener('click', function () {
  modalRepair.classList.remove('hidden')
})

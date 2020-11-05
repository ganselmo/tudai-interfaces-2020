
import { Cuadrant } from './cuadrant.js'
"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const mouseimage = document.querySelector('#mousemove')
  setTimeout(function () {
    mouseimage.style.animation = 'fadeout 1s linear 0s 1 forwards'
  }, 5000)

  const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;
  let middelPointX = width / 2, middelPointY = height / 2;
  let actualPositionX1 = 0;
  let actualPositionY1 = 0;
  let actualPositionX2 = 0;
  let actualPositionY2 = 0;
  let actualPositionX3 = 0;
  let actualPositionY3 = 0;
  let interval;

  const background1 = document.querySelector('#img-1')
  const background2 = document.querySelector('#img-2')
  const background3 = document.querySelector('#img-3')

  document.addEventListener('mousemove', animateBackground)

  function animateBackground(e) {
    let cuadrant = new Cuadrant(e.x - middelPointX, e.y - middelPointY)

    let nextPostionX1 = (cuadrant.x)
    let nextPostionY1 = (cuadrant.y)
    let nextPostionX2 = (cuadrant.x)
    let nextPostionY2 = (cuadrant.y)
    let nextPostionX3 = (cuadrant.x)
    let nextPostionY3 = (cuadrant.y)

    let speedMultiplier1 = 0.007
    let speedMultiplier2 = 0.013
    let speedMultiplier3 = 0.020
    if (
      (e.x - middelPointX) > 200 || (e.x - middelPointX) <= -200
    ) {
      clearInterval(interval)
      animate(background1, actualPositionX1, actualPositionY1, nextPostionX1 * speedMultiplier1, nextPostionY1 * speedMultiplier1)

      actualPositionX1 = actualPositionX1 + nextPostionX1 * speedMultiplier1
      actualPositionY1 = actualPositionY1 + nextPostionY1 * speedMultiplier1

      animate(background2, actualPositionX2, actualPositionY2, nextPostionX2/ speedMultiplier2, nextPostionY2 * speedMultiplier2)

      actualPositionX2 = actualPositionX2 + nextPostionX2 * speedMultiplier2
      actualPositionY2 = actualPositionY2 + nextPostionY2 * speedMultiplier2

      animate(background3, actualPositionX3, actualPositionY3, nextPostionX3 * speedMultiplier3, nextPostionY3 * speedMultiplier3)

      actualPositionX3 = actualPositionX3 + nextPostionX3 * speedMultiplier3
      actualPositionY3 = actualPositionY3 + nextPostionY3 * speedMultiplier3
      
      interval = setInterval(function () {

        animate(background1, actualPositionX1, actualPositionY1, nextPostionX1 * speedMultiplier1, nextPostionY1 * speedMultiplier1)
        actualPositionX1 += nextPostionX1 * speedMultiplier1
        actualPositionY1 += nextPostionY1 * speedMultiplier1
        animate(background2, actualPositionX2, actualPositionY2, nextPostionX2 * speedMultiplier2, nextPostionY2 * speedMultiplier2)
        actualPositionX2 += nextPostionX2 * speedMultiplier2
        actualPositionY2 += nextPostionY2 * speedMultiplier2
        animate(background3, actualPositionX3, actualPositionY3, nextPostionX3 * speedMultiplier3, nextPostionY3 * speedMultiplier3)
        actualPositionX3 += nextPostionX3 * speedMultiplier3
        actualPositionY3 += nextPostionY3 * speedMultiplier3

      }, 10)

    }
    function animate(element, actualPositionX, actualPositionY, nextPostionX, nextPostionY) {
      element.animate([{
        backgroundPosition: actualPositionX + 'px ' + actualPositionY + 'px',
      }
        , {
        backgroundPosition: (actualPositionX + nextPostionX) + 'px ' + (actualPositionY + nextPostionY) + 'px',
      }
      ], {
        duration: 10,
        easing: 'linear',
        iterations: 1,
        fill: 'forwards'
      });



    }
  }
  const button = document.querySelector('#start')
  const backgrounds = document.querySelectorAll('.img')
  const bring = document.querySelector('#bring')
  const him = document.querySelector('#him')
  const home = document.querySelector('#home')
  const blackBg = document.querySelector('#background-loader')
  console.log(backgrounds)
  button.addEventListener('click', function () {
    setTimeout(function () {
      document.removeEventListener('mousemove', animateBackground)
      
      backgrounds.forEach((element) => {
        element.style.animation = 'move-page 1s linear 0s 1 forwards'
      });

      bring.style.left = '40vw'
      bring.style.animation = 'scapeRight 0.5s linear 1s 1 forwards'
      him.style.right = '45vw'
      him.style.animation = 'scapeLeft  0.5s linear 0.5s 1 forwards'
      home.style.left = '40vw'
      home.style.animation = 'scapeRight  0.5s linear 0s 1 forwards'

      button.style.opacity = '1';
      button.style.visibility = 'visible';
      button.style.animation = 'hideButton 2s linear 0s 1  forwards'


      blackBg.style.opacity = '0';
      blackBg.style.visibility = 'hidden';
      blackBg.style.animation = 'fadein 2s linear 0.5s 1  forwards'

    }, 1000)
    setTimeout(function () {


      window.location.href = './home.html'

    }, 4000)

  })



})

import { Cuadrant } from './cuadrant.js'
"use strict"

document.addEventListener('DOMContentLoaded', function () {



  const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;
  let middelPointX = width / 2, middelPointY = height / 2;
  let actualPositionX = 0;
  let actualPositionY = 0;
  let interval;
  let backgrounds = document.querySelectorAll('.img')
  document.addEventListener('mousemove', function (e) {
    let cuadrant = new Cuadrant(e.x - middelPointX, e.y - middelPointY)

    let nextPostionX =(cuadrant.x) 
    let nextPostionY =( cuadrant.y)
 
    if(
      (e.x - middelPointX)>200 || (e.x - middelPointX)<=-200
    ){
      clearInterval(interval)
      animateBackground(backgrounds,actualPositionX,actualPositionY,nextPostionX/50,nextPostionY/50)
  
  
      actualPositionX = actualPositionX+nextPostionX/50
      actualPositionY = actualPositionY+nextPostionY/50
      interval = setInterval(function()
      {
  
        animateBackground(backgrounds,actualPositionX,actualPositionY,nextPostionX/50,nextPostionY/50)
        actualPositionX += nextPostionX/50
        actualPositionY+= nextPostionY/50
      },10)
      
    }
   

   
    function animateBackground(backgrounds,actualPositionX,actualPositionY,nextPostionX,nextPostionY) {


      backgrounds.forEach(element => {
        
        element.animate([{
          backgroundPosition: actualPositionX + 'px ' + actualPositionY + 'px',
        }
          , {
          backgroundPosition: (actualPositionX+nextPostionX) + 'px ' +(actualPositionY+ nextPostionY) + 'px',
  
        }
        ], {
          duration: 10,
          easing: 'linear',
          iterations: 1,
          fill: 'forwards'
        });
        
  
      })

     
    }
  })

  let button = document.querySelector('#start')

  button.addEventListener('click',function(e)
  {
      
  })

  



})
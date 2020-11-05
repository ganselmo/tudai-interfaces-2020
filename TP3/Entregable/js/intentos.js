 // document.addEventListener('mousemove', function (e) {


  //   console.log(speedX,speedY)
  //   divs.forEach(element => {
  //     element.style.transform = 'translate(' + speedX + 'px,' + speedY + 'px)'
  //     element.style.animationDuration = '4s';
  //   });3
  // });
  let gero = 0

  let speedX = 0;
  let speedY = 0;
  let lastX = 0;
  let lastY = 0;

  let duration2 = 0.1;
  let lastSpeedX = 0;
  let lastSpeedY = 0;
  let body = document.querySelector('body')
  body.addEventListener('mousemove', function (e) {
  
    speedX = (e.offsetX - middelPointX + speedX) * duration2;
    speedY = (e.offsetY - middelPointY + speedY) * duration2;

    animateClouds(divs)
    console.log( 1/speedX)
  });

  let interval;

  function animateClouds(divs) {
    clearInterval(interval)

    interval = setInterval(function () {

      lastSpeedX = lastSpeedX+1;
      lastSpeedY = lastSpeedY+1;



      
        else{
          element.animate([{
            backgroundPosition: -lastSpeedX + 'px ' + -lastSpeedY + 'px',
            // transform: 'translate('+gero+'px, 0px)',
          }
            , {
            backgroundPosition: (lastSpeedX-1) + 'px ' + ( lastSpeedY-1) + 'px',
            // transform: 'translate('+(gero+speed)+'px, 0px)'
          }
          ], {
            duration: duration2,
            easing: 'linear',
            iterations: 1,
            fill: 'forwards'
          });
        }
      });
    }, 1/speedX)
   


  }

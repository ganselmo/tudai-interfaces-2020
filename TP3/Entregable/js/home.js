


"use strict"

document.addEventListener('DOMContentLoaded', function () {


    const bgmountains = document.querySelector('#bgmountains')
    const bgmars1 = document.querySelector('#bgmars1')
    const sinopsis = document.querySelector('#sinopsis')
    const plot = document.querySelector('#plot')
    const title = document.querySelector('#title')
    const html = document.querySelector('html')
    let posible = false
    setTimeout(() => {
        html.scrollTop = 0;
    }, 2000);



    function marsWheel(e)
    {



            if (e.deltaY < 0 && posible) {
                //'adelante'
                posible = true
                bgmountains.style.transition = '2s';
                bgmountains.style.transform = 'scale(1)';
                bgmars1.style.transition = '2s';
                bgmars1.style.transform = 'scale(1)'
                bgmountains.style.backgroundPosition = '0px 0px';
                plot.style.opacity = 1
                plot.style.visibility = 'visible'
                plot.style.animation = 'fadeout 0.5s linear 1s 1 forwards'
                
                title.style.opacity = 0
                title.style.visibility = 'visible'
                title.style.animation = 'fadein 0.5s linear 1.5s 1 forwards'
            }
            if (e.deltaY > 0) {
                //'atras'
                posible = true
                bgmountains.style.transition = '2s';
                bgmountains.style.transform = 'scale(1.3)';
                bgmars1.style.transition = '2s';
                bgmars1.style.transform = 'scale(1.05)'
                bgmountains.style.backgroundPosition = '50px -50px';
                plot.style.opacity = 0
                plot.style.animation = 'fadein 0.5s linear 1s 1 forwards'
                plot.style.visibility = 'visible'

                title.style.visibility = 'visible'
                title.style.opacity = 1
                title.style.animation = 'fadeout 0.5s linear 0.5s 1 forwards'
    
    
    
            }
    
    
    
    
        
    }
    let cargado =false
    document.addEventListener('wheel', function (e) {

        if(!cargado)
        {
            
            document.addEventListener('wheel', marsWheel)
        }
        if(html.scrollTop < 500&&cargado)
        {

            document.addEventListener('wheel', marsWheel)
           
            title.style.opacity = 0
            title.style.animation = 'fadeout 0.5s linear 0.5s 1 forwards'
            bgmars1.style.top='-1200px';
            bgmars1.style.animation = 'scapedown 0.9s linear 0.5s 1 forwards'

            bgmountains.style.top='-1200px';
            bgmountains.style.animation = 'scapedown 0.9s linear 0.5s 1 forwards'

            sinopsis.style.top='-1200px';
            sinopsis.style.animation = 'scapedown 0.9s linear 0.5s 1 forwards'

            plot.style.opacity = 0
            
            plot.style.top='20px';
            
            plot.style.animation = 'fadein 0.5s linear 1s 1 forwards'
            cargado=false

        }
        console.log(html.scrollTop)
        if (html.scrollTop >= 500 && html.scrollTop <= 1000) {
            cargado =true
            document.removeEventListener('wheel', marsWheel)
            bgmountains.style.top=0;
            bgmars1.style.top=0;
            bgmars1.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
            bgmountains.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
            sinopsis.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
            plot.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'

        }
        if (html.scrollTop >= 600 && html.scrollTop <= 600) {
            
        }
        

    })
    // const portraits = document.querySelectorAll('.portraits')

    // portraits.forEach(element => {

    //     element.addEventListener('hover', function (e) {


    //         const mousepos = {
    //             x:e.offsetX,
    //             y:e.offsetY,
    //         }
    //         console.log(mousepos)

    //         element.style.transform = 'rotate3d(40deg)';
         
        
    //     })

    //     element.addEventListener('mouseout', function (e) {


    //         element.style.transform = 'rotate3d(0,0, 0, 0deg )';
        
    //     })
    // });


});

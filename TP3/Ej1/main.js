"use strict"

document.addEventListener('DOMContentLoaded', function () {

    console.log('andando');
    const div = document.querySelector('.loading-bar')
    const number = document.querySelector('.number')

    div.style.animation = "cargando 3s cubic-bezier(0.12, 0, 0.39, 0) 2s ";
    div.style.animationFillMode = 'forwards';

    let interval = setInterval(percentage,50)
    let index = 0;
    function percentage ()
    {
        // if(index>85)
        // {
        //     number.innerHTML = index - 85
        //     if(index>=185)
        //     {
        //         clearInterval(interval)
        //     }
        // }

        //     index++
        console.log(div.style) 
        
     
    }
    






})
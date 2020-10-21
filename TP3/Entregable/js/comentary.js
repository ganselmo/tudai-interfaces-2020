"use strict"

document.addEventListener('DOMContentLoaded', function () {
 
    function hoverState() {

        let nodelist = this.parentElement.parentElement.querySelectorAll('.rate')


        for (let i = nodelist.length; i > 0; i--) {
            if (nodelist.item(this.parentElement.attributes['data-rate'].value - i) != null) {
                nodelist.item(this.parentElement.attributes['data-rate'].value - i).childNodes[0].src = "./assets/icons/starComplete.svg"
            }
        }



    }
    let rates = document.querySelectorAll('.rate img');

    rates.forEach((el) => {

      
        el.addEventListener('mouseover', hoverState)
        el.addEventListener('mouseout', returnState)

        function returnState() {
            rates.forEach(el => {
                el.src = "./assets/icons/starEmpty.svg"
            });
        }
        el.addEventListener('click', function () {
            let nodelist = el.parentElement.parentElement.querySelectorAll('.rate')

            
            for (let i = nodelist.length; i > 0; i--) {
                if (nodelist.item(el.parentElement.attributes['data-rate'].value - i) != null) {
                    nodelist.item(el.parentElement.attributes['data-rate'].value - i).childNodes[0].src = "./assets/icons/starComplete.svg"
                    nodelist.item(el.parentElement.attributes['data-rate'].value - i).classList = 'rated yes'

                }



            }

            nodelist = el.parentElement.parentElement.querySelectorAll('.rate')

            nodelist.forEach(element => {
                element.classList = 'rated no'
            });

            el.removeEventListener('mouseover',hoverState)
            el.removeEventListener('mouseover',returnState)

        })

    })

});
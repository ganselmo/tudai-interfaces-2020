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

    document.querySelector('.n-header .user input').addEventListener('focus',function()
    {

            this.style.width = '90%'

        
    })
    document.querySelector('.n-header .user input').addEventListener('focusout',function()
    {
        if(this.value=='')
        {
            this.style.width = '40%'
        }
        else{
            this.style.width = '90%'
        }
        
    })

    document.querySelector('.n-content textarea').addEventListener('focus',function()
    {

            this.style.width = '90%'

        
    })
    document.querySelector('.n-content textarea').addEventListener('focusout',function()
    {
        if(this.value=='')
        {
            this.style.width = '40%'
        }
        else{
            this.style.width = '90%'
        }
        
    })

    document.querySelector('.n-footer button').addEventListener('click',function(){

        let newcomment = document.createElement('div');
        newcomment.classList ='commentary'
        newcomment.innerHTML = `
        
            <div class="comentary-box">
                <div class="c-header">
                    <div class="user">Geronimo Anselmo</div>
                </div>
                <div class="c-content">
                    <span class="comment">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis purus lacus eleifend curabitur
                        porttitor odio fames, tincidunt tortor turpis enim pharetra parturient. Imperdiet aenean quam
                        "
                    </span>
                </div>
                <div class="c-footer">
                    <div class="rater">
                        <div class="rate" data-rate="1"><img src="./assets/icons/starEmpty.svg" alt=""></div>
                        <div class="rate" data-rate="2"><img src="./assets/icons/starEmpty.svg" alt=""></div>
                        <div class="rate" data-rate="3"><img src="./assets/icons/starEmpty.svg" alt=""></div>
                        <div class="rate" data-rate="4"><img src="./assets/icons/starEmpty.svg" alt=""></div>
                        <div class="rate" data-rate="5"><img src="./assets/icons/starEmpty.svg" alt=""></div>
                    </div>
                </div>
            </div>
        
        `
       
        document.querySelector('#commentarySection').appendChild(newcomment);

        
    })

});



"use strict"

document.addEventListener('DOMContentLoaded', function () {


    const bgmountains = document.querySelector('#bgmountains')
    const bgmars1 = document.querySelector('#bgmars1')
    const sinopsis = document.querySelector('#sinopsis')
    const plot = document.querySelector('#plot')
    const title = document.querySelector('#title')
    const html = document.querySelector('html')
    let posible = false;

    let lugarActual = 0;
    setTimeout(() => {
        html.scrollTop = 0;
    }, 2000);



    function marsWheel(e) {



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
    let cargado = false
    let puedeMover = true
    document.addEventListener('wheel', function (e) {

        e.preventDefault();

        console.log(lugarActual)
        if (puedeMover) {
            setTimeout(function () {
                puedeMover = true
            }, 1000)
            lugarActual += e.deltaY
            puedeMover = false
        }

        if (lugarActual == 100 && !cargado) {
            html.scrollTop = 0
            document.addEventListener('wheel', marsWheel)

        }
        if (lugarActual == 100 && cargado) {
            html.scrollTop = 0
            document.addEventListener('wheel', marsWheel)

            title.style.opacity = 0
            title.style.animation = 'fadeout 0.5s linear 0.5s 1 forwards'
            bgmars1.style.top = '-1200px';
            bgmars1.style.animation = 'scapedown 0.9s linear 0.5s 1 forwards'

            bgmountains.style.top = '-1200px';
            bgmountains.style.animation = 'scapedown 0.9s linear 0.5s 1 forwards'

            sinopsis.style.top = '-1200px';
            sinopsis.style.animation = 'scapedown 0.9s linear 0.5s 1 forwards'

            plot.style.opacity = 0

            plot.style.top = '20px';

            plot.style.animation = 'fadein 0.5s linear 1s 1 forwards'
            cargado = false

        }

        if (lugarActual == 300) {
            html.scrollTop = 580
            cargado = true
            document.removeEventListener('wheel', marsWheel)
            bgmountains.style.top = 0;
            bgmars1.style.top = 0;
            bgmars1.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
            bgmountains.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
            sinopsis.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
            plot.style.visibility = 'visible'
            plot.style.opacity = 1
            plot.style.animation = 'scapeup 0.9s linear 0.5s 1 forwards'
        }
        if (lugarActual == 500) {
            html.scrollTop = 1250
        }

        if (lugarActual == 600) {
            html.scrollTop = 2000
        }
        if (lugarActual > 700) {
            lugarActual = 700
        }


    }, { passive: false });

    let node = document.querySelector('.gallery')
    let der = document.querySelector('.imagen.der')
    let actual = document.querySelector('.imagen.actual')
    let izq = document.querySelector('.imagen.izq')
    let flechaizq = node.querySelector('#flechaizq');
    let flechader = node.querySelector('#flechader');
    flechaizq.addEventListener('click', moveLeft)
    flechader.addEventListener('click', moveRight)
    function moveLeft() {

        let newNode = [].slice.call(node.querySelectorAll('.imagen'))
        console.log(newNode)
        newNode.unshift(newNode[newNode.length - 1])
        newNode = newNode.slice(0, newNode.length - 1)


        node.innerHTML = '';

        newNode[0].classList = 'imagen izq'
        newNode[1].classList = 'imagen actual'
        newNode[2].classList = 'imagen der'
        newNode[3].classList = 'imagen'
        console.log(newNode)
        node.appendChild(flechaizq)

        newNode.forEach(el => {

            node.appendChild(el)
        })
        node.appendChild(flechader)

        node.querySelectorAll('.imagen').forEach((el) => {
            el.styleanimation = ''
        })

        node.querySelector('.actual').style.animation = 'toActual 0.8s linear 0s 1 forwards'


        node.querySelector('.der').style.animation = ''

    }

    function moveRight() {

        let newNode = [].slice.call(node.querySelectorAll('.imagen'))
        console.log(newNode)

        newNode.push(newNode[0])
        newNode.shift()

        node.innerHTML = '';

        newNode[0].classList = 'imagen izq'
        newNode[1].classList = 'imagen actual'
        newNode[2].classList = 'imagen der'
        newNode[newNode.length - 1].classList = 'imagen'
        console.log(newNode)
        node.appendChild(flechaizq)

        newNode.forEach(el => {

            node.appendChild(el)
        })
        node.appendChild(flechader)

        node.querySelectorAll('.imagen').forEach((el) => {
            el.styleanimation = ''
        })

        node.querySelector('.actual').style.animation = 'toActual 0.8s linear 0s 1 forwards'


        node.querySelector('.izq').style.animation = ''

    }

    const counter = document.querySelector('#counter')

    setInterval(function () {
        counter.innerHTML= ''
        let p = document.createElement('p');
        let countDownDate = new Date('10-20-2020 00:00:00')
        var now = new Date().getTime();
        console.log(countDownDate,now)
        var timeleft =  Math.abs(now - countDownDate);

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        p.innerHTML = days+' days ' + hours +':' +minutes +':' + seconds.toString()
            counter.appendChild(p)

    },
        1000)



});

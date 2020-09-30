"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.querySelector('canvas');

    const ctx = canvas.getContext('2d');

    setInterval(draw,1000)

    function timeCalculation()
    {
        
        return new Date()
    }

    function draw()
    {
        console.log(new Date())
        
        let seconds = timeCalculation().getSeconds();
        let minutes = timeCalculation().getMinutes();
        let hours = timeCalculation().getHours();
        
        drawBackground()
        drawSeconds(seconds)
        drawMinutes(minutes)        
        drawHours(hours)  
    }

    function  drawBackground()

    {
        ctx.fillStyle='#000000'
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
    function drawSeconds(seconds)
    {
        let radio = 200;
        ctx.strokeStyle='#ffffff'
        ctx.lineWidth=2

        let angle = seconds * 360/60-90;

        let radians = angle * Math.PI/180;
        
        let seno  = Math.sin(radians)
        let coseno =Math.cos(radians)

        let x = radio * coseno;
        let y = radio * seno;
        ctx.beginPath()
        ctx.moveTo(canvas.width/2,canvas.height/2)
        ctx.lineTo(canvas.width/2+x,canvas.height/2+y)
        ctx.stroke()
        ctx.closePath()
    }

    function drawMinutes(minutes)
    {
        let radio = 150;
        ctx.strokeStyle='#ffffff'
        ctx.lineWidth=4

        let angle = minutes * 360/60-90;

        let radians = angle * Math.PI/180;
        
        let seno  = Math.sin(radians)
        let coseno =Math.cos(radians)

        let x = radio * coseno;
        let y = radio * seno;
        ctx.beginPath()
        ctx.moveTo(canvas.width/2,canvas.height/2)
        ctx.lineTo(canvas.width/2+x,canvas.height/2+y)
        ctx.stroke()
        ctx.closePath()
    }

    function drawHours(hours)
    {
        let radio = 100;
        ctx.strokeStyle='#ffffff'
        ctx.lineWidth=6

        let angle = hours * (360/12) - 90;

        let radians = angle * Math.PI/180;
        
        let seno  = Math.sin(radians)
        let coseno =Math.cos(radians)

        let x = radio * coseno;
        let y = radio * seno;

        ctx.beginPath()
        ctx.moveTo(canvas.width/2,canvas.height/2)
        ctx.lineTo(canvas.width/2+x,canvas.height/2+y)
        ctx.stroke()
        ctx.closePath()
    }
});
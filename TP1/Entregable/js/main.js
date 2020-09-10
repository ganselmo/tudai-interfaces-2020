

"use strict"
import {pencil,eraser} from './tools.js';

document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.querySelector('#mycanvas');
    canvas.height = 600;
    canvas.width = 1000;
    const input = document.querySelector('#file');

    let context = canvas.getContext('2d');
    const pos = { x: 0, y: 0 };

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.heigth)
    let actualTool = pencil;
    const blankButton = document.querySelector('#blankButton');
    const pencilButton = document.querySelector('#pencilButton');
    const eraserButton = document.querySelector('#eraserButton');

    blankButton.addEventListener("click", function () {
        imageBlank(context)
    })
    canvas.style.cursor = "url('./assets/icons/pencil-cursor.png'), auto";
    pencilButton.addEventListener('click',
        function () {
            actualTool = pencil;
            canvas.style.cursor = "url('./assets/icons/pencil-cursor.png'), auto";

        })

    eraserButton.addEventListener('click',
        function () {
            actualTool = eraser;           
            canvas.style.cursor = "url('./assets/icons/icons8-erase-30.png'), auto";
        })









    canvas.addEventListener('mouseup', function () {
        this.removeEventListener('mousemove', createEvlistMove, false);
    })
    canvas.addEventListener('mouseout', function () {
        this.removeEventListener('mousemove', createEvlistMove, false)
    })
    canvas.addEventListener('mousedown', createEvListDown);

    function createEvListDown(e) {
        setActualPos(e);
        toolDraw(e);
        this.addEventListener('mousemove', createEvlistMove);
    }
    function createEvlistMove(e) {

        toolDraw(e);
    }

    function toolDraw(e) {

        if (e.buttons !== 1) return;

        context.beginPath();

        context.lineWidth = actualTool.lineWidth;
        context.lineCap = actualTool.lineCap;
        context.strokeStyle = actualTool.strokeStyle;

        context.moveTo(pos.x, pos.y);
        setActualPos(e);
        context.lineTo(pos.x, pos.y);

        context.stroke();


    }





    input.onchange = e => {
        const file = e.target.files[0];
        if (file != undefined) {
            imageFromFile(file);
        }

        // e.target.files[0] = undefined
    }

    function setActualPos(e) {

        pos.x = e.offsetX + actualTool.cursorOffsetX;
        pos.y = e.offsetY + actualTool.cursorOffsetY;
    }


    // Draw image data to the canvas

    function imageDrawer(image, context) {

        const imageAspectRatio = (1.0 * image.height) / image.width;
        const imageScaleWidth = canvas.width;
        const imageScaleHeight = canvas.width * imageAspectRatio;
        context.drawImage(image, 0, 0, imageScaleWidth, imageScaleHeight);

    }

    function imageFromFile(file) {

        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            const image = new Image();
            image.src = content;
            image.onload = function () {
                imageDrawer(this, context)
            }

        }
    }

    function imageBlank(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

    }






})
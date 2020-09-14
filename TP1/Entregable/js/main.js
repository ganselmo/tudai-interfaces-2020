"use strict"
import { pencil, eraser } from './tools.js';
import { negative, binarization, sepia, lightness, saturation, detection, blur } from './simpleEffects.js';

document.addEventListener("DOMContentLoaded", function () {


    const canvas = document.querySelector('#mycanvas');
    const canvasSpace = document.querySelector('#canvasSpace')
    canvas.height = window.innerHeight * 0.75;
    canvas.width = canvasSpace.offsetWidth * 0.95;
    let context = canvas.getContext("2d");
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height)

    const pos = { x: 0, y: 0 };




    const input = document.querySelector('#file');





    let actualTool = pencil;

    const blankButton = document.querySelector('#blankButton');
    const pencilButton = document.querySelector('#pencilButton');
    const eraserButton = document.querySelector('#eraserButton');

    const fromFileButton = document.querySelector('#fromfile');

    fromFileButton.addEventListener('click', function () {
        document.querySelector('#file').click();
    })

    blankButton.addEventListener("click", function () {
        imageBlank(context)
    })
    canvasSpace.style.cursor = "url('./assets/icons/pencil-cursor.png'), auto";
    pencilButton.addEventListener('click',
        function () {
            actualTool = pencil;
            canvasSpace.style.cursor = "url('./assets/icons/pencil-cursor.png'), auto";

        })

    eraserButton.addEventListener('click',
        function () {
            actualTool = eraser;
            canvasSpace.style.cursor = "url('./assets/icons/icons8-erase-30.png'), auto";
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
        $('#exampleModal').modal('hide');
        // e.target.files[0] = undefined
    }

    function setActualPos(e) {

        pos.x = e.offsetX + actualTool.cursorOffsetX;
        pos.y = e.offsetY + actualTool.cursorOffsetY;

    }


    function imageDrawer(image, context) {

        const imageAspectRatio = (1.0 * image.height) / image.width;
        const imageScaleWidth = canvas.width;
        const imageScaleHeight = canvas.width * imageAspectRatio;
        canvas.height = imageScaleHeight;
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
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height)

    }





    const showSpinner = () => {
        const loadingSpinner = document.querySelector('.spinner-container');
        loadingSpinner.style.display = "flex"

    }
    const lightnessInput = document.querySelector('#lightness');
    lightnessInput.onchange = function () {
        let value = this.value;
        console.log(value)
        showSpinner()
        setTimeout(function () {
            let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

            for (let index = 0; index < value; index++) {

                imageData = lightness.process(imageData, 1);

            }
            context.putImageData(imageData, 0, 0);
            document.querySelector('.spinner-container').style.display = "none"
        }, 1);

    }

    const saturationInput = document.querySelector('#saturation');


    saturationInput.onchange = function () {

        let value = this.value;
        showSpinner()
        setTimeout(function () {

            let imageData = saturationProcess(value);
            
            context.putImageData(imageData, 0, 0);
            document.querySelector('.spinner-container').style.display = "none"
        }, 1);

    }

    function saturationProcess(value)
    {
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        if(value>0)
        {
            for (let index = 0; index < value; index++) {
                imageData = saturation.process(imageData, 2);
            }
        }
        if(value<0)
        {
            for (let index = value; index < 0; index++) {
                imageData = saturation.process(imageData, -5);
            }
        }
        return imageData;
        
    }

    const negativeButton = document.querySelector('#negative');
    negativeButton.addEventListener('click', function () {
        showSpinner()
        setTimeout(function () {
            const imageData = negative.process(context.getImageData(0, 0, canvas.width, canvas.height))
            context.putImageData(imageData, 0, 0);
        }, 1)

    })
    const binarizationButton = document.querySelector('#binarization');
    binarizationButton.addEventListener('click', function () {
        showSpinner()
        setTimeout(function () {
            const imageData = binarization.process(context.getImageData(0, 0, canvas.width, canvas.height))
            context.putImageData(imageData, 0, 0);
            document.querySelector('.spinner-container').style.display = "none"
        }, 1)
    })

    const sepiaButton = document.querySelector('#sepia');
    sepiaButton.addEventListener('click', function () {
        showSpinner()
        setTimeout(function () {
            const imageData = sepia.process(context.getImageData(0, 0, canvas.width, canvas.height))
            context.putImageData(imageData, 0, 0);
            document.querySelector('.spinner-container').style.display = "none"
        }, 10)
    })

    const sobelButton = document.querySelector('#sobel');
    sobelButton.addEventListener('click', function () {
        showSpinner()
        setTimeout(function () {
            const imageData = detection.process(context.getImageData(0, 0, canvas.width, canvas.height))
            context.putImageData(imageData, 0, 0);
            document.querySelector('.spinner-container').style.display = "none"
        }, 100)
    })

    const blurButton = document.querySelector('#blur');
    blurButton.addEventListener('click', function () {
        showSpinner()
        setTimeout(function () {
            const imageData = blur.process(context.getImageData(0, 0, canvas.width, canvas.height))
            context.putImageData(imageData, 0, 0);
            document.querySelector('.spinner-container').style.display = "none"
        }, 500)

    })




    document.getElementById('btn-download').addEventListener("click", function (e) {


        var dataURL = canvas.toDataURL("image/jpeg", 1.0);

        downloadImage(dataURL, 'my-canvas.jpeg');
    });

    // Save | Download image
    function downloadImage(data, filename = 'untitled.jpeg') {
        let a = document.createElement('a');
        a.href = data;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
    }

})
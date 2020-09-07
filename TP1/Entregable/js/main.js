"use strict"

document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.querySelector('#mycanvas');
    const input = document.querySelector('#file');
    let context = canvas.getContext('2d');
    
    context.fillStyle = "#FFFFFF";
    context.fillRect(0,0,canvas.width,canvas.heigth)





    input.onchange = e =>{
        const file = e.target.files[0];
        console.log(file);
        

        const reader = new FileReader();

        reader.readAsDataURL(file)

        reader.onload = readerEvent=>
        {
            const content =readerEvent.target.result;
            const image = new Image();
            image.src = content;

            image.onload = function()
            {
                const imageAspectRatio = (1.0 * this.height)/this.height;
                const imageScaleWidth = canvas.width;
                const imageScaleHeight = canvas.width * imageAspectRatio;

                context.drawImage(this,0,0,imageScaleWidth,imageScaleHeight);
                console.log(context)
            }
        }
    }
    // Iterate through every pixel
    function setPixel(imageData, x, y, r, g, b) {
        let index = (x + y * imageData.width) * 4;
        imageData.data[index] = r;  // R value
        imageData.data[index + 1] = g;    // G value
        imageData.data[index + 2] = b;  // B value
        imageData.data[index + 3] = 255;  // A value
    }

    // Draw image data to the canvas
  




})
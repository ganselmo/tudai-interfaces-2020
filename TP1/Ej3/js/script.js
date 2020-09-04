const imgdt = new ImageData(300,400);

let i;

for (i = 0; i < imgdt.data.length; i += 4) {
    imgdt.data[i+0] = 255;
    imgdt.data[i+1] = 0;
    imgdt.data[i+2] = 0;
    imgdt.data[i+3] = 255;
}

const ctx = document.querySelector("#mycanvas").getContext("2d").putImageData(imgdt,10,10);

// document.addEventListener('mousedown',function(event)
// {
//     console.log(event);
//     document.getElementById("mycanvas").getContext("2d").putImageData(imgdt,event.clientX,event.clientY);
// });


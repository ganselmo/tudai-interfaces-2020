const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(100, 100);

console.log(ctx);
// Iterate through every pixel
function setPixel(imageData,x,y,r,g,b)
{
    let index= (x+y*imageData.width)*4;
    imageData.data[index] = r;  // R value
    imageData.data[index + 1] = g;    // G value
    imageData.data[index + 2] = b;  // B value
    imageData.data[index + 3] = 255;  // A value
}
  

for(let i =0;i<imageData.height;i++)
{
    console.log(imageData.height)
    
    for(let y =0;y<imageData.width;y++)
    {
        setPixel(imageData,i,y,(i/imageData.width)*255,(i/imageData.width)*255,(i/imageData.width)*255);
    }
}
// Draw image data to the canvas
ctx.putImageData(imageData, 20, 20);



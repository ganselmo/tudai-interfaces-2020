
import {Sobel} from './sobel.js';
import {blur as Blur} from './blur.js';
export const negative =
{
    process: function (imageData) {

   
        
        for (let x = 0; x < imageData.height; x++) {

            for (let y = 0; y < imageData.width; y++) {
                const rgba = getPixel(imageData, x, y);

                setPixel(imageData, x, y, 255 - rgba.r, 255 - rgba.g, 255 - rgba.b, 255 - rgba.a);
            }
        }
        return imageData
    }

}

export const lightness =
{
    process: function (imageData,lightness) {

        for (let x = 0; x < imageData.height; x++) {

            for (let y = 0; y < imageData.width; y++) {
                let rgba = getPixel(imageData, x, y);

                let hsla = RGBAToHSLA(rgba.r, rgba.g, rgba.b, rgba.a);

                hsla.l = hsla.l + lightness;

                rgba = HSLAToRGBA(hsla.h, hsla.s, hsla.l, hsla.a)
                setPixel(imageData, x, y, rgba.r, rgba.g, rgba.b, rgba.a);
            }
        }
        return imageData;
    }

}



export const binarization =
{
    process: function (imageData) {

        for (let x = 0; x < imageData.height; x++) {

            for (let y = 0; y < imageData.width; y++) {

                let rgba = getPixel(imageData, x, y);

                if (rgba.r + rgba.g + rgba.b < (255 * 3) / 2) {
                    setPixel(imageData, x, y, 0, 0, 0, rgba.a);
                }
                else {
                    setPixel(imageData, x, y, 255, 255, 255, rgba.a);
                }

            }
        }
        return imageData;

    }
}

export const sepia =
{
    process: function (imageData) {

        for (let x = 0; x < imageData.height; x++) {

            for (let y = 0; y < imageData.width; y++) {

                let rgba = getPixel(imageData, x, y);

                const redOut = rgba.r * 0.393 + rgba.r * 0.769 + rgba.b * 0.189;
                const greenOut = rgba.r * 0.349 + rgba.r * 0.686 + rgba.b * 0.168;
                const blueOut = rgba.r * 0.272 + rgba.r * 0.534 + rgba.b * 0.131;

                setPixel(imageData, x, y, redOut, greenOut, blueOut, rgba.a);
            }
        }
        return imageData;

    }

}


export const saturation =
{
    process: function (imageData,saturation) {

        for (let x = 0; x < imageData.height; x++) {

            for (let y = 0; y < imageData.width; y++) {
                let rgba = getPixel(imageData, x, y);
                let hsla = RGBAToHSLA(rgba.r, rgba.g, rgba.b, rgba.a);
                hsla.s = hsla.s + saturation;
                rgba = HSLAToRGBA(hsla.h, hsla.s, hsla.l, hsla.a)
                setPixel(imageData, x, y, rgba.r, rgba.g, rgba.b, rgba.a);
            }
        }
        return imageData;
    }

}

export const detection =
{
    process: function (imageData) {



    
        var sobelData = Sobel(imageData);

        var sobelImageData = sobelData.toImageData();
        return sobelImageData;
    }




}

export const blur =
{
    process: function (imageData) {



    
        var blurData = Blur(imageData);

        
        return blurData;
    }




}



function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.height) * 4;
    imageData.data[index] = r;  // R value
    imageData.data[index + 1] = g;    // G value
    imageData.data[index + 2] = b;  // B value
    imageData.data[index + 3] = 255;  // A value
}
function getPixel(imageData, x, y) {
    let index = (x + y * imageData.height) * 4;
    let r = imageData.data[index];  // R value
    let g = imageData.data[index + 1];    // G value
    let b = imageData.data[index + 2];  // B value
    let a = imageData.data[index + 3];  // A value

    const color = {
        r: r,
        g: g,
        b: b,
        a: a
    }
    return color;
}


function RGBAToHSLA(r, g, b, a) {
    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    const hsla = {
        h: h,
        s: s,
        l: l,
        a: a
    }
    return hsla
}

function HSLAToRGBA(h, s, l, a) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const color = {
        r: r,
        g: g,
        b: b,
        a: a
    }
    return color;
}
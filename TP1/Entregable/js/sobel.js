export function Sobel(imageData) {

    const width = imageData.width;
    const height = imageData.height;

    const kernelX = [
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1]
    ];

    const kernelY = [
        [-1, -2, -1],
        [0, 0, 0],
        [1, 2, 1]
    ];

    const sobelData = [];
    const grayscaleData = [];

    function bindPixelAt(data) {
        return function (x, y, i) {
            i = i || 0;
            return data[((width * y) + x) * 4 + i];
        };
    }

    const data = imageData.data;
    let pixelAt = bindPixelAt(data);
    let x, y;

    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            const r = pixelAt(x, y, 0);
            const g = pixelAt(x, y, 1);
            const b = pixelAt(x, y, 2);

            const avg = (r + g + b) / 3;
            grayscaleData.push(avg, avg, avg, 255);
        }
    }

    pixelAt = bindPixelAt(grayscaleData);

    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            const pixelX = (
                (kernelX[0][0] * pixelAt(x - 1, y - 1)) +
                (kernelX[0][1] * pixelAt(x, y - 1)) +
                (kernelX[0][2] * pixelAt(x + 1, y - 1)) +
                (kernelX[1][0] * pixelAt(x - 1, y)) +
                (kernelX[1][1] * pixelAt(x, y)) +
                (kernelX[1][2] * pixelAt(x + 1, y)) +
                (kernelX[2][0] * pixelAt(x - 1, y + 1)) +
                (kernelX[2][1] * pixelAt(x, y + 1)) +
                (kernelX[2][2] * pixelAt(x + 1, y + 1))
            );

            const pixelY = (
                (kernelY[0][0] * pixelAt(x - 1, y - 1)) +
                (kernelY[0][1] * pixelAt(x, y - 1)) +
                (kernelY[0][2] * pixelAt(x + 1, y - 1)) +
                (kernelY[1][0] * pixelAt(x - 1, y)) +
                (kernelY[1][1] * pixelAt(x, y)) +
                (kernelY[1][2] * pixelAt(x + 1, y)) +
                (kernelY[2][0] * pixelAt(x - 1, y + 1)) +
                (kernelY[2][1] * pixelAt(x, y + 1)) +
                (kernelY[2][2] * pixelAt(x + 1, y + 1))
            );

            const magnitude = Math.sqrt((pixelX * pixelX) + (pixelY * pixelY)) >>> 0;

            sobelData.push(magnitude, magnitude, magnitude, 255);
        }
    }

    var clampedArray = sobelData;

    if (typeof Uint8ClampedArray === 'function') {
        clampedArray = new Uint8ClampedArray(sobelData);
    }

    clampedArray.toImageData = function () {
        return Sobel.toImageData(clampedArray, width, height);
    };

    return clampedArray;
}

Sobel.toImageData = function toImageData(data, width, height) {
    if (typeof ImageData === 'function' && Object.prototype.toString.call(data) === '[object Uint16Array]') {
        return new ImageData(data, width, height);
    } else {
        if (typeof window === 'object' && typeof window.document === 'object') {
            const canvas = document.createElement('canvas');

            if (typeof canvas.getContext === 'function') {
                let context = canvas.getContext('2d');
                let imageData = context.createImageData(width, height);
                imageData.data.set(data);
                return imageData;
            } else {
                return new FakeImageData(data, width, height);
            }
        } else {
            return new FakeImageData(data, width, height);
        }
    }
};





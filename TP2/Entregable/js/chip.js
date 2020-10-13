import { Figure } from './figure.js';

export class Chip extends Figure {

    r = 35;
    color;
    playerName;
    chipImage;
    constructor(r,color,playerName,chipImage) {
        super();
        this.r =r;
        this.color = color;
        this.playerName = playerName;
        this.chipImage = chipImage;

    }

    // draw(x, y, ctx) {
    //     this.x = x;
    //     this.y = y;
        
    //     ctx.beginPath();
    //     ctx.arc(x, y, this.r, 0, 2 * Math.PI);
    //     ctx.fillStyle = this.color;
       
    //     ctx.fill();
    //     ctx.closePath();
    // }
    draw(x, y, ctx) {
        this.x = x;
        this.y = y;

        ctx.beginPath();
        ctx.arc(x, y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        
        ctx.fill();
        ctx.closePath();
        ctx.drawImage(this.chipImage, x-27.5, y-27.5,  this.r+25,  this.r+25);
    }

    isInside(x, y) {
        return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.r;
    }
    setColor(color)
    {   
        this.color = color
    }

}
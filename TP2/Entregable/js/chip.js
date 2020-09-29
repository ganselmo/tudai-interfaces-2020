import { Figure } from './figure.js';

export class Chip extends Figure {

    r = 35;
    color;
    constructor(size,color) {
        super(size)
        this.color = color
    }

    draw(x, y, ctx) {
        this.x = x;
        this.y = y;
        ctx.beginPath();
        ctx.arc(x, y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }


    highlight(ctx) {
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.lineCap ='round'
        ctx.strokeStyle = "black";

        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
        this.highlighted=true;
        
    }

    unhighlight(ctx)
    {
 
        this.draw(this.x,this.y,ctx)
        this.highlighted=false;
      
        
    }
    isInside(x, y) {
        return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.r;
    }

    drag(x, y) {

    }
    setColor(color)
    {   
        this.color = color
    }

}
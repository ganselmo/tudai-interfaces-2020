export  class Cuadrant {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getCuadrant() {
 
        if(this.x>0 && this.y>0) {
            return 1
        }
        if(this.x>0 && this.y<0)
        {
            return 2
        }
        if(this.x<0 && this.y<0)
        {
            return 3
        }
        if(this.x<0 && this.y>0)
        {
            return 4
        }
    }
}
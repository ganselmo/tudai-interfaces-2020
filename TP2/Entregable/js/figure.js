export class Figure {

    x;
    y;
    size;
    id;
    highlighted;
    
    constructor() {
        this.id = this.makeid(8);
        this.highlighted =false;
    }

    unhighlight(ctx)
    {
 

        
    }

    highlight(ctx) {
    
        
    }

    draw(x, y, ctx) {


    }

    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }




}
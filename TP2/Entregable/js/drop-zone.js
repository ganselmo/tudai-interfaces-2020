export class DropZone {

    gameBoard;
    game;
    startingX;
    startingY;
    height;
    columnNumber;
    ctx;
    constructor(gameBoard, game, startingX,startingY, columnNumber, ctx) {

        this.gameBoard = gameBoard;
     
        this.game = game;
        this.startingX = startingX;
        this.startingY = startingY;
        this.height = - startingY + gameBoard.startingY +7*gameBoard.blockSize;
        this.columnNumber = columnNumber;
        this.ctx = ctx

    }
    draw(color) {

        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.startingX, this.startingY , this.gameBoard.blockSize, this.gameBoard.startingY-20);

    }
    highlight(color) {
        this.draw(color)

    }

    isInside(x, y) {
     
        return x >= this.startingX && x <= this.startingX + this.gameBoard.blockSize && y >= this.startingY && y <= this.startingY + this.height
    }
}


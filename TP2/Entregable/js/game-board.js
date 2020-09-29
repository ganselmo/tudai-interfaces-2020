export class GameBoard {

    startingX = 0;
    startingY = 0;
    blockSize = 0;
    ctx;
    highlightedColumn;
    constructor(x, y, blockSize, ctx) {
        this.startingX = x;
        this.startingY = y;
        this.blockSize = blockSize;
        this.ctx = ctx
    }

    drawBoard(game) {

        for (let column = 0; column < game.matrix.length; column++) {


            for (let row = 0; row < game.matrix[column].length; row++) {

                if (game.matrix[column][row] != undefined) {
                    this.drawPosOccupied(row, column, game.matrix[column][row])
                }
                else {
                    this.drawPosEmpty(row, column)
                }
            }
        }
    }
    drawWinnerLine(chips) {
        this.ctx.beginPath();
        console.log(chips)

        this.ctx.lineWidth = 7;
        this.ctx.moveTo(chips[0].x, chips[0].y);
        this.ctx.lineTo(chips[3].x, chips[3].y);
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineCap = 'round'
        this.ctx.stroke();

    }

    drawPosOccupied(row, column, chip) {

        this.drawPosEmpty(row, column)
        chip.x = this.startingX + column * this.blockSize + this.blockSize / 2,
            chip.y = this.startingY + row * this.blockSize + this.blockSize / 2;
        chip.draw(this.startingX + column * this.blockSize + this.blockSize / 2, this.startingY + row * this.blockSize + this.blockSize / 2, this.ctx);

    }

    drawPosEmpty(row, column) {

        this.drawBorder(this.startingX + column * this.blockSize, this.startingY + row * this.blockSize, this.blockSize, this.blockSize)

        if (column == this.highlightedColumn) {
            this.ctx.fillStyle = '#154699';
        }
        else {
            this.ctx.fillStyle = '#031F4E';
        }
        this.ctx.fillRect(this.startingX + column * this.blockSize, this.startingY + row * this.blockSize, this.blockSize, this.blockSize);

        this.ctx.beginPath();

        this.ctx.arc(this.startingX + column * this.blockSize + this.blockSize / 2, this.startingY + row * this.blockSize + this.blockSize / 2, 30, 0, 2 * Math.PI);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawBorder(xPos, yPos, width, height, thickness = 1) {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
    }

    highlightColumn(column) {
        this.highlightedColumn = column;
    }
}


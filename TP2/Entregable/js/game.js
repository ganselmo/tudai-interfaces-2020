
export class Game {

    x;
    y;
    matrix;

    constructor() {
        this.matrix = new Array(7);
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i] = new Array(6);
        }

    }

    checkGameStatus() {
        console.log('called',this.matrix)
        this.checkY()
        this.checkX()
        this.checkDiagonals()
        

    }

    addFigure(figure) {
        this.figures.push(figure)
    }

    getFigures() {
        return this.figures;
    }


    checkY() {

        let winnerColor;
        for (let x = 0; x < this.matrix.length; x++) {
            let asserts = 0
            for (let y = 0; y < this.matrix[x].length; y++) {
                if (y != 0) {
                    if (this.matrix[x][y] != undefined && this.matrix[x][y - 1] != undefined) {
                        if (this.matrix[x][y].color == this.matrix[x][y - 1].color) {

                            asserts++

                            if (asserts == 3) {

                                winnerColor = this.matrix[x][y].color
                                console.log('win', winnerColor)
                                return
                            }
                        }
                        else {
                            asserts = 0
                        }
                    }
                    else {
                        asserts = 0
                    }


                }
            }


        }
    }

    checkX() {

        let x = 0;
        let winnerColor;
        for (let y = 0; y < this.matrix[x].length; y++) {
            let asserts = 0
            for (let x = 0; x < this.matrix.length; x++) {

                if (x != 0) {
                    if (this.matrix[x][y] != undefined && this.matrix[x - 1][y] != undefined) {
                        if (this.matrix[x][y].color == this.matrix[x - 1][y].color) {

                            asserts++

                            if (asserts == 3) {
                                winnerColor = this.matrix[x][y].color
                                console.log('win', winnerColor)
                                return
                            }
                        }
                        else {
                            asserts = 0
                        }
                    }
                    else {
                        asserts = 0
                    }


                }
            }
        }
    }

    checkDiagonals() {

        for (let x = 0; x < this.matrix.length - 3; x++) {
            this.checkMainDiagonal(x, 0)
        }
        for (let y = 1; y < this.matrix[0].length - 3; y++) {
            this.checkMainDiagonal(0, y)
            this.checkSecondaryDiagonal(6, y)
        }
        for (let x = this.matrix.length - 1; x >= 3; x--) {
            this.checkSecondaryDiagonal(x, 0)
        }

    }

    checkMainDiagonal(x0, y0) {
        let asserts = 0
        let winnerColor;

        for (let x = x0, y = y0; x < this.matrix.length && y < this.matrix[x].length; x++, y++) {

            if (x != 0) {

                if (this.matrix[x][y] != undefined && this.matrix[x - 1][y - 1] != undefined) {

                    if (this.matrix[x][y].color == this.matrix[x - 1][y - 1].color) {

                        asserts++
                        if (asserts == 3) {
                            winnerColor = this.matrix[x][y].color
                            console.log('win', winnerColor)
                            return
                        }
                    }
                    else {
                        asserts = 0
                    }
                }
                else {
                    asserts = 0
                }


            }
        }
    }
    checkSecondaryDiagonal(x0, y0) {

        let asserts = 0
        let winnerColor;

        for (let x = x0, y = y0; x >= 0 && y < this.matrix[x].length; x--, y++) {


            if (y != 0 && x < this.matrix.length - 1) {

                if (this.matrix[x][y] != undefined && this.matrix[x + 1][y - 1] != undefined) {


                    if (this.matrix[x][y].color == this.matrix[x + 1][y - 1].color) {


                        asserts++
                        if (asserts == 3) {
                            winnerColor = this.matrix[x][y].color
                            console.log('win', winnerColor)
                            return
                        }
                    }
                    else {
                        asserts = 0
                    }
                }
                else {
                    asserts = 0
                }


            }
        }

    }

    insertChip(x, chip) {
        for (let y = 0; y < this.matrix[x].length; y++) {

            if (y + 1 < this.matrix[x].length) {

                if (this.matrix[x][y + 1] != undefined) {
                    this.matrix[x][y] = chip
                    return;
                }
            }
            else {
                this.matrix[x][y] = chip
            }

        }



    }
}

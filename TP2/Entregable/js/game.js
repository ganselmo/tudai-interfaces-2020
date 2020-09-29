
export class Game {


    matrix;
    lastPlayed;
    winner;
    _nextTurn;
    finished;
    constructor() {
        this.matrix = new Array(7);
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i] = new Array(6);
        }
        this.lastPlayed = 1;
        this._nextTurn = 1;
        this.finished = false;

    }


    setNextTurn() {
        if (this.lastPlayed == 2) {

            this.lastPlayed = 1
            this._nextTurn = 1

        }
        else {
            this.lastPlayed = 2
            this._nextTurn = 2
        }

        return this._nextTurn
    }

    checkGameStatus() {

        if (!this.finished) {
            this.checkY()
            this.checkX()
            this.checkDiagonals()
        }
    }

    checkY() {

        let winnerColor;
        let winnerChips = []
        for (let x = 0; x < this.matrix.length; x++) {
            let asserts = 0
            for (let y = 0; y < this.matrix[x].length; y++) {
                if (y != 0) {
                    if (this.matrix[x][y] != undefined && this.matrix[x][y - 1] != undefined) {
                        if (this.matrix[x][y].color == this.matrix[x][y - 1].color) {

                            asserts++
                            winnerChips.push(this.matrix[x][y - 1])
                            if (asserts == 3) {
                                winnerChips.push(this.matrix[x][y])
                                winnerColor = this.matrix[x][y].color
                                this.finished = true;
                                this.winner = winnerChips;
                                return
                            }
                        }
                        else {
                            winnerChips = []
                            asserts = 0
                        }
                    }
                    else {
                        winnerChips = []
                        asserts = 0
                    }


                }
            }


        }
    }

    checkX() {

        let x = 0;
        let winnerColor;
        let winnerChips = []
        for (let y = 0; y < this.matrix[x].length; y++) {
            let asserts = 0
            for (let x = 0; x < this.matrix.length; x++) {

                if (x != 0) {
                    if (this.matrix[x][y] != undefined && this.matrix[x - 1][y] != undefined) {
                        if (this.matrix[x][y].color == this.matrix[x - 1][y].color) {

                            asserts++
                            winnerChips.push(this.matrix[x - 1][y])
                            if (asserts == 3) {
                                winnerChips.push(this.matrix[x][y])
                                winnerColor = this.matrix[x][y].color
                                this.finished = true;
                                this.winner = winnerChips;
                                return
                            }
                        }
                        else {
                            winnerChips = []
                            asserts = 0
                        }
                    }
                    else {
                        winnerChips = []
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
        let winnerChips = []
        for (let x = x0, y = y0; x < this.matrix.length && y < this.matrix[x].length; x++, y++) {

            if (x != 0) {

                if (this.matrix[x][y] != undefined && this.matrix[x - 1][y - 1] != undefined) {

                    if (this.matrix[x][y].color == this.matrix[x - 1][y - 1].color) {
                        winnerChips.push(this.matrix[x - 1][y - 1]);
                        asserts++
                        if (asserts == 3) {
                            winnerChips.push(this.matrix[x][y])
                            winnerColor = this.matrix[x][y].color
                            this.finished = true;
                            this.winner = winnerChips;
                            return
                        }
                    }
                    else {
                        winnerChips = []
                        asserts = 0
                    }
                }
                else {
                    winnerChips = []
                    asserts = 0
                }


            }
        }
    }
    checkSecondaryDiagonal(x0, y0) {

        let asserts = 0
        let winnerColor;
        let winnerChips = []
        for (let x = x0, y = y0; x >= 0 && y < this.matrix[x].length; x--, y++) {


            if (y != 0 && x < this.matrix.length - 1) {

                if (this.matrix[x][y] != undefined && this.matrix[x + 1][y - 1] != undefined) {


                    if (this.matrix[x][y].color == this.matrix[x + 1][y - 1].color) {

                        winnerChips.push(this.matrix[x + 1][y - 1]);
                        asserts++
                        if (asserts == 3) {
                            winnerChips.push(this.matrix[x][y])
                            winnerColor = this.matrix[x][y].color
                            this.finished = true;
                            this.winner = winnerChips;
                            return
                        }
                    }
                    else {
                        winnerChips = []
                        asserts = 0
                    }
                }
                else {
                    winnerChips = []
                    asserts = 0
                }


            }
        }

    }

    insertChip(x, chip) {
        if (!this.finished) {


            for (let y = 0; y < this.matrix[x].length; y++) {

                if (y + 1 < this.matrix[x].length) {

                    if (this.matrix[x][y + 1] != undefined) {
                        this.matrix[x][y] = chip
                        return;

                    }
                }
                else {
                    this.matrix[x][y] = chip
                    return;
                }

            }
        }



    }
}



"use strict"
import { Game } from './game.js';
import { Chip } from './chip.js';
import { GameBoard } from './game-board.js';
import { DropZones } from './drop-zones.js';

document.addEventListener("DOMContentLoaded", function () {

    const btnComenzar = document.querySelector('#comenzar');
    btnComenzar.addEventListener('click', newGame);

    const btnRestart = document.querySelector('#restart');
    btnRestart.addEventListener('click', newGame);

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const winnerDiv = document.querySelector("#ganador");
    const gamingDiv = document.querySelector("#jugando");
    const winnerText = document.querySelector("#jugadorGanador");

    const nextPlayerSelector = document.querySelector('#nextPlayer')

    winnerDiv.style='display:none';jugadorGanador
    gamingDiv.style='display:none';
    canvas.width = 934;
    canvas.height = 550;
    canvas.style.border = 'black 1px solid'
    btnRestart.style='display:none'
    let gameBoard = new GameBoard(200, 100, 70, ctx)
    let game = new Game();

    let p1Chip;
    let p2Chip;

    gameBoard.drawBoard(game)

    function newGame() {
        btnRestart.style='display:block'
        gamingDiv.style='display:block;'
        winnerDiv.style='display:none;'
        gameBoard = new GameBoard(200, 100, 70, ctx)
        game = new Game();
        gameBoard.drawBoard(game)
        const inpP1name = document.querySelector('#nombre1')
        const inpP2name = document.querySelector('#nombre2')
        const btnP1Color = document.querySelector('#color1')
        const btnP2Color = document.querySelector('#color2')
        p1Chip = new Chip(30, btnP1Color.value, inpP1name.value)
        p2Chip = new Chip(30, btnP2Color.value, inpP2name.value)
        nextPlayerSelector.innerText = inpP1name.value
        p1Chip.draw(50, 50, ctx);   
        p2Chip.draw(50, 125, ctx);
        canvas.addEventListener('mousedown', function selectChip(e) {
            nextChip = getNextPlayer()
            p1Chip.draw(50, 50, ctx);
            p2Chip.draw(50, 125, ctx);
            if (!game.finished) {
                if (nextChip.isInside(e.offsetX, e.offsetY)) {

                    canvas.addEventListener('mousemove', dragging)
                    canvas.addEventListener('mouseup', dropping)
                }
            }
        })

    }


    let dropzones = new DropZones(gameBoard, game, gameBoard.startingX, ctx)

    dropzones.dropZones.forEach(element => {
        element.draw("#fff")
    });


    function xCounter(c) {
        let counter = 0;
        for (const chip of game.matrix[c]) {
            if (chip != undefined) counter++;
        }
        return counter
    }
    let nextChip;
    function getNextPlayer() {
        if (game._nextTurn == 1) {

            return p1Chip;
        }
        if (game._nextTurn == 2) {
            return p2Chip;
        }
    }

    function dragging(e) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        gameBoard.drawBoard(game)
        p1Chip.draw(50, 50, ctx);
        p2Chip.draw(50, 125, ctx);
        nextChip.draw(e.offsetX, e.offsetY, ctx)
        dropzones.dropZones.forEach(dropZone => {
            if (dropZone.isInside(e.offsetX, e.offsetY)) {
                if (xCounter(dropZone.columnNumber) < game.matrix[0].length) {
                    gameBoard.highlightColumn(dropZone.columnNumber)
                }
                else{
                    gameBoard.highlightColumn(8)
                }
            }
            
        })
    }

    function dropping(e) {
        canvas.removeEventListener('mousemove', dragging, false)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dropzones.dropZones.forEach(dropZone => {
            if (dropZone.isInside(e.offsetX, e.offsetY)) {
                if (xCounter(dropZone.columnNumber) < game.matrix[0].length) {
                    gameBoard.highlightColumn(dropZone.columnNumber)
                    game.insertChip(dropZone.columnNumber, new Chip(30, nextChip.color, nextChip.playerName))
                    gameBoard.highlightColumn(8)
                    gameBoard.drawBoard(game)
                }
                setNextTurn()
            }
            gameBoard.highlightColumn(8)
        }
        )
        p1Chip.draw(50, 50, ctx);
        p2Chip.draw(50, 125, ctx);

        gameBoard.drawBoard(game)
        game.checkGameStatus()

        canvas.removeEventListener('mouseup', dropping)
        if (game.finished) {
            winnerDiv.style='display:block;'
            gamingDiv.style='display:none;'
            gameBoard.drawWinnerLine(game.winner);
            winnerText.innerText = game.winner[0].playerName
        }
    }


    // function chipDrop(chip, x, fromY, toY) {
    //     let actualPositionY = fromY;
    //     let speed = 1;

    //     let intervale = setInterval(function () {
    //         if (speed >= toY) {
    //             clearInterval(intervale)
    //             game.insertChip(dropZone.columnNumber, new Chip(50, nextChip.color))
    //         }
    //         else {
    //             console.log(speed)
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //             gameBoard.drawBoard(game)
    //             chip.draw(x, actualPositionY + speed, ctx)
    //             speed = speed * 1.18;

    //         }
    //     }, 10);
    // }
    // const nextPlayer = new Chip(40, 'red')

    
    function setNextTurn() {
        game.setNextTurn()
        nextPlayerSelector.innerText = getNextPlayer().playerName
    }
})
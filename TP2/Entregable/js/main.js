

"use strict"
import { Game } from './game.js';
import { Chip } from './chip.js';
import { GameBoard } from './game-board.js';
import { DropZones } from './drop-zones.js';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const redChip = new Chip(50, 'red')
    const blackChip = new Chip(50, 'black')

    canvas.width = 934;
    canvas.height = 800;
    canvas.style.border = 'black 1px solid'

    const gameBoard = new GameBoard(200, 200, 90, ctx)
    let game = new Game();

    gameBoard.drawBoard(game)



    game.checkGameStatus()


    game.checkGameStatus()

    gameBoard.drawBoard(game)

    // let dropZone = new DropZones(gameBoard,game,gameBoard.startingX,0,1000,0,ctx) 

    let dropzones = new DropZones(gameBoard, game, gameBoard.startingX, ctx)

    dropzones.dropZones.forEach(element => {
        console.log(element)
        element.draw("#333333")
    });

    // canvas.addEventListener('mouseover', function (e) {
    //     dropzones.dropZones.forEach(dropZone => {
    //         if (dropZone.isInside(e.offsetX, e.offsetY)) {
    //             dropZone.highlightColumn('#333')
    //         }
    //     })
    // })
    // canvas.addEventListener('click', function (e) {

    // })
    // console.log(game.nextTurn())

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

            return redChip;
        }
        if (game._nextTurn == 2) {
            return blackChip;
        }
    }
    redChip.draw(50, 50, ctx);
    blackChip.draw(50, 150, ctx);
    canvas.addEventListener('mousedown', function selectChip(e) {
        nextChip = getNextPlayer()
        redChip.draw(50, 50, ctx);

        if (nextChip.isInside(e.offsetX, e.offsetY)) {

            canvas.addEventListener('mousemove', dragging)





            canvas.addEventListener('mouseup', dropping)
        }
    })
    function dragging(e) {


        console.log('called')


        ctx.clearRect(0, 0, canvas.width, canvas.height);
        gameBoard.drawBoard(game)
        blackChip.draw(50, 150, ctx);
        nextChip.draw(e.offsetX, e.offsetY, ctx)
        dropzones.dropZones.forEach(dropZone => {
            if (dropZone.isInside(e.offsetX, e.offsetY)) {
                if (xCounter(dropZone.columnNumber) < game.matrix[0].length) {
                    console.log(game.matrix[dropZone.columnNumber].length)
                    gameBoard.highlightColumn(dropZone.columnNumber)

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
                    console.log(game.matrix[dropZone.columnNumber].length)
                    gameBoard.highlightColumn(dropZone.columnNumber)

                    chipDrop(nextChip,e.offsetX,e.offsetY,1000)
                    

                }
                game.setNextTurn()
            }

        }
        )
        redChip.draw(50, 50, ctx);
        blackChip.draw(50, 150, ctx);

        gameBoard.drawBoard(game)
        game.checkGameStatus()
        canvas.removeEventListener('mouseup', dropping)
    }
 

    async function chipDrop(chip,x,fromY,toY)
    {
        let actualPositionY = fromY;
        let speed = 1;
        
        let intervale = setInterval(function(){ 
            if(speed>=toY)
            {
                clearInterval(intervale)
                game.insertChip(dropZone.columnNumber, new Chip(50, nextChip.color))
            }
            else{
                console.log(speed)
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                gameBoard.drawBoard(game)
                chip.draw(x,actualPositionY+speed,ctx)
                speed = speed * 1.18 ;
               
            }
        }, 10);
    }
    // const nextPlayer = new Chip(40, 'red')
})
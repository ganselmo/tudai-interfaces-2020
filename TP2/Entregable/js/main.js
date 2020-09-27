

"use strict"
import { Game } from './game.js';
import { Chip } from './chip.js';
import './tests.js';
import { Test } from './tests.js';


document.addEventListener("DOMContentLoaded", function () {
    // const canvas = document.querySelector("canvas");
    // const ctx = canvas.getContext("2d");

    // canvas.width = 934;
    // canvas.height = 622;
    // canvas.style.border = 'black 1px solid'
    // const test = new Chip(13);
    // test.draw(120, 120, ctx)
    // const test2 = new Chip(13);
    // test2.draw(500, 500, ctx);

    // const game = new Game()
    // game.addFigure(test)
    // game.addFigure(test2)
    
    // canvas.addEventListener('click', function (e) {
    //     ctx.imageSmoothingEnabled= false;

    //     game.getFigures().forEach(figure => {

    //         if (figure.isInside(e.offsetX, e.offsetY, ctx)) {
               
   
    //             if (!figure.highlighted) {
             
    //                 console.log(figure)
    //                 figure.highlight(ctx)
                    
                    
    //             }
    //         }
    //         else{
    //             if (figure.highlighted) {
    //                 console.log(figure)
    //                 figure.unhighlight(ctx)
                    
    //             }
    //         }


    //     });

    // })
    let game = new Game();

    
    
    game.insertChip(0,new Chip(50,'red'))
    game.insertChip(0,new Chip(50,'red'))
    game.insertChip(0,new Chip(50,'red'))
    game.insertChip(0,new Chip(50,'red'))
    game.checkGameStatus()
    
 


})
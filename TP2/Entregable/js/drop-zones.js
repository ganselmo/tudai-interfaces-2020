import { DropZone } from "./drop-zone.js"

export class DropZones
{
    dropZones = []
    constructor(gameBoard,game,startingX,ctx)
    {
        let nextX = 0
        for(let i = 0;i<game.matrix.length;i++){
            this.dropZones.push(new DropZone(gameBoard,game,startingX+nextX,10,i,ctx))
            nextX+=gameBoard.blockSize;
        }
    }


}
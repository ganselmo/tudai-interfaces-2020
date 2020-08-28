
const columns = 10;
const rows = 10;

let matrix = [];

for (let i = 0; i < columns; i++) {
    matrix[i] = [];
    for (let j = 0; j < rows; j++) {
        matrix[i][j] = Math.random()*100;
        
    }
}

console.table(matrix)

function returnMax()
{
    
}
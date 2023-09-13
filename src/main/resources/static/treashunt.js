let playerClicks = 0;

let treasIconClass0 = "fa-regular";
let treasIconClass1 = "fa-gem";
let treasIconStyle0 = "color: #d69200;";

let skullIconClass0 = "fa-solid";
let skullIconClass1 = "fa-skull-crossbones";

populateGameTable();
let gameBoard = createGameElementContainerArray();
placeContents(gameBoard);



function populateGameTable() {

    let gameTable = document.getElementById("gameTable");
    
    for(row = 0; row < tableSize; row++) {

        let tableRow = document.createElement("tr");
        gameTable.appendChild(tableRow);
    
        for(column = 0; column < tableSize; column++) {
    
            let tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
           
            let cellContainer = document.createElement("div");
            cellContainer.classList.add("iconContainerDiv");
            cellContainer.classList.add("clickable");
            cellContainer.setAttribute("id", "c-" + row + "-" + column);
            tableCell.appendChild(cellContainer);
    
            let icon = document.createElement("i");
            icon.setAttribute("id", "i-" + row + "-" + column);
            cellContainer.appendChild(icon);
    
    
            cellContainer.onclick = function() {
                
               
            }
        }
    }
}


function createGameElementContainerArray() {

    let gameBoard = [];

    for(let row = 0; row < tableSize; row++) {

        let gameBoardRow = [];

        for(let column = 0; column < tableSize; column++) {
            gameBoardRow[column] = "empty";
        }

        gameBoard[row] = gameBoardRow;
    }

    return gameBoard;
}


function placeContents(gameBoard) {

    let rowPos = Math.floor(Math.random() * tableSize);
    let colPos = Math.floor(Math.random() * tableSize);

    gameBoard[rowPos][colPos] = "treasure";

    let trapCount = 2;

    for(let trapsPlaced = 0; trapsPlaced < trapCount; trapsPlaced++) {

        let validPosition = false;

        while(validPosition == false) {
            
            validPosition = false;
            
            rowPos = Math.floor(Math.random() * tableSize);
            colPos = Math.floor(Math.random() * tableSize);

            if(gameBoard[rowPos][colPos] == "empty") {
                validPosition = true;
                gameBoard[rowPos][colPos] = "trap";
            }
        }
    }
}


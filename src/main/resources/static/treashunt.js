let playerClicks = 0;

let treasIconClass0 = "fa-regular";
let treasIconClass1 = "fa-gem";
let treasIconClass2 = "fa-8x";
let treasIconStyle0 = "gold";

let skullIconClass0 = "fa-solid";
let skullIconClass1 = "fa-skull-crossbones";
let skullIconClass2 = "fa-8x";
let skullIconStyle0 = "white";


populateGameTable();
let gameBoard = createGameElementContainerArray();
placeContents(gameBoard);

console.log(user);


function populateGameTable() {

    let gameTable = document.getElementById("gameTable");
    
    for(row = 0; row < tableSize; row++) {

        let tableRow = document.createElement("tr");
        gameTable.appendChild(tableRow);
    
        for(column = 0; column < tableSize; column++) {
    
            let tableCell = document.createElement("td");
            tableCell.style.padding = "0rem;";
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
                
                if(cellContainer.classList.contains("clickable")) {

                    let exploredTile = explore(gameBoard, cellContainer);

                    if(exploredTile != "empty") {
                        finishTheGame(exploredTile);
                    }
                }
                
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


function explore(gameBoard, cellContainer) {

    let id = cellContainer.id;
    let rowId = Number(id.substr(2, 1));
    let colId = Number(id.substr(4, 1));

    let thisTile = gameBoard[rowId][colId];

    if(thisTile == "treasure") {
        console.log("treasure " + rowId + ", " + colId);
        
        let icon = document.getElementById("i-" + rowId + "-" + colId);
        icon.style.color = treasIconStyle0;
        cellContainer.style.color = treasIconStyle0;
        icon.classList.add(treasIconClass0);
        icon.classList.add(treasIconClass1);
        icon.classList.add(treasIconClass2);

        let tileDiv = document.getElementById("c-" + rowId + "-" + colId);
        tileDiv.style.backgroundColor = "black";
    }
    else if(thisTile == "trap") {
        console.log("trap " + rowId + ", " + colId);

        let icon = document.getElementById("i-" + rowId + "-" + colId);
        icon.style.color = skullIconStyle0;
        cellContainer.style.color = skullIconStyle0;
        icon.classList.add(skullIconClass0);
        icon.classList.add(skullIconClass1);
        icon.classList.add(skullIconClass2);

        let tileDiv = document.getElementById("c-" + rowId + "-" + colId);
        tileDiv.style.backgroundColor = "black";
    }
    else {
        console.log("empty " + rowId + ", " + colId);

        let tileDiv = document.getElementById("c-" + rowId + "-" + colId);
        tileDiv.style.backgroundColor = "black";
    }

    playerClicks++;

    return thisTile;
}


function finishTheGame(lastExploredTile) {

    for(let row = 0; row < tableSize; row++) {
        for(let column = 0; column < tableSize; column++) {

            document.getElementById("c-" + row + "-" + column).classList.remove("clickable");
        }
    }


    if(lastExploredTile == "treasure") {

        fetch("http://localhost:8080/game/treasurehunt/newscore", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({user, playerClicks})
        })
            .then((response) => response.json())
            .then((json) => {
                user.name = json.persistedObject.name;
                user.password = json.persistedObject.password;
                user.livesLeft = json.persistedObject.livesLeft;
                user.highScore = json.persistedObject.highScore;
                console.log(user);
            });

    }
    else {

        user.livesLeft = user.livesLeft - 1;

        fetch("http://localhost:8080/game/treasurehunt/playerdied", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((json) => {
                user.name = json.persistedObject.name;
                user.password = json.persistedObject.password;
                user.livesLeft = json.persistedObject.livesLeft;
                user.highScore = json.persistedObject.highScore;
                console.log(user);
            });
    }
}


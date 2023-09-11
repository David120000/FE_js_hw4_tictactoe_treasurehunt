let playerClicks = 0;

let xIconClass0 = "fa-solid";
let xIconClass1 = "fa-xmark";
let xIconClass2 = "fa-10x";
let oIconClass0 = "fa-solid";
let oIconClass1 = "fa-o";
let oIconClass2 = "fa-10x";


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

        cellContainer.onclick = function() {
            
            playerClick(cellContainer);

            let winnerCounter = 0;

            if(playerClicks >= 5 && playerClicks % 2 == 0) {
                
                let winner = winCheck();
                winnerCounter = winner.length;

                if(winnerCounter >= 1) {
                    finishTheGame(winner);
                }
            }

            if(winnerCounter == 0 && playerClicks < (tableSize * tableSize)) {
                whoseTurnNext();
            }
            else if(winnerCounter == 0 && playerClicks == (tableSize * tableSize)) {
                let winner = [];
                finishTheGame(winner);     

            }
           
        }

        let icon = document.createElement("i");
        icon.setAttribute("id", "i-" + row + "-" + column);
        cellContainer.appendChild(icon);
    }
}

whoseTurnNext();


function playerClick(cellContainer) {

    if(cellContainer.classList.contains("clickable")) {

        let cellId = cellContainer.id;
        cellId = cellId.replace("c", "i");
        let iconToChange = document.getElementById(cellId);

        if(playerClicks % 2 == 0) {
            /* X */
            iconToChange.classList.add(xIconClass0);
            iconToChange.classList.add(xIconClass1);
            iconToChange.classList.add(xIconClass2);
            cellContainer.classList.remove("clickable");
        }
        else {
            /* O */
            iconToChange.classList.add(oIconClass0);
            iconToChange.classList.add(oIconClass1);
            iconToChange.classList.add(oIconClass2);
            cellContainer.classList.remove("clickable");
        }

        playerClicks++;
    }
}


function whoseTurnNext() {
        
    let xIndicator = document.getElementById("nextPlayerX");
    let oIndicator = document.getElementById("nextPlayerO");

    if(playerClicks % 2 == 0) {

        xIndicator.classList.add("youNext");
        oIndicator.classList.remove("youNext");
    }
    else {
 
        oIndicator.classList.add("youNext");
        xIndicator.classList.remove("youNext");
    }
}


function winCheck() {

    let winner = [];

    for(let row = 0; row < tableSize; row++) {
        for(let column = 0; column < tableSize; column++) {

            let icon = document.getElementById("i-" + row + "-" + column);
            let iconHasXorO = "";
           
            if(icon.classList.contains("fa-xmark")) {
                iconHasXorO = "fa-xmark";
            }
            else if(icon.classList.contains("fa-o")) {
                iconHasXorO = "fa-o";
            }


            if((row-1) >= 0 && (row+1) < tableSize) {

                let icon2 = document.getElementById("i-" + (row-1) + "-" + column);
                let icon3 = document.getElementById("i-" + (row+1) + "-" + column);

                if(icon2.classList.contains(iconHasXorO) && icon3.classList.contains(iconHasXorO)) {
                    
                    winner[winner.length] = iconHasXorO;
                    highlightWinnerMarks(icon, icon2, icon3);
                }                    
            }

            if((column-1) >= 0 && (column+1) < tableSize) {

                let icon2 = document.getElementById("i-" + row + "-" + (column-1));
                let icon3 = document.getElementById("i-" + row + "-" + (column+1));

                if(icon2.classList.contains(iconHasXorO) && icon3.classList.contains(iconHasXorO)) {
                    winner[winner.length] = iconHasXorO;
                    highlightWinnerMarks(icon, icon2, icon3);
                }
            }

            if((row-1) >= 0 && (column-1) >= 0 && (row+1) < tableSize && (column+1) < tableSize) {

                let icon2 = document.getElementById("i-" + (row-1) + "-" + (column-1));
                let icon3 = document.getElementById("i-" + (row+1) + "-" + (column+1));

                if(icon2.classList.contains(iconHasXorO) && icon3.classList.contains(iconHasXorO)) {
                    winner[winner.length] = iconHasXorO;
                    highlightWinnerMarks(icon, icon2, icon3);
                }
            }

            if((row-1) >= 0 && (column+1) < tableSize && (row+1) < tableSize && (column-1) >= 0) {

                let icon2 = document.getElementById("i-" + (row-1) + "-" + (column+1));
                let icon3 = document.getElementById("i-" + (row+1) + "-" + (column-1));

                if(icon2.classList.contains(iconHasXorO) && icon3.classList.contains(iconHasXorO)) {
                    winner[winner.length] = iconHasXorO;
                    highlightWinnerMarks(icon, icon2, icon3);
                }
            }
        }
    }
    
    return winner;
}

function highlightWinnerMarks(icon1, icon2, icon3) {

    icon1.classList.add("fa-flip");
    icon1.style.color = "#a80000";
    icon2.classList.add("fa-flip");
    icon2.style.color = "#a80000";
    icon3.classList.add("fa-flip");
    icon3.style.color = "#a80000";
}


function finishTheGame(winner) {

    for(let row = 0; row < tableSize; row++) {
        for(let column = 0; column < tableSize; column++) {

            document.getElementById("c-" + row + "-" + column).classList.remove("clickable");
        }
    }


    let italicAnnouncerText = document.getElementById("italicAnnouncerText");
    italicAnnouncerText.style.color = "#a80000";

    let xIndicator = document.getElementById("nextPlayerX");
    let oIndicator = document.getElementById("nextPlayerO");


    if(winner.length == 1) {

        italicAnnouncerText.textContent = "We have a WINNER!";

        if(winner[0] == "fa-xmark") {

            xIndicator.style.width = "160px";
            xIndicator.classList.add("youNext");
            oIndicator.style.display = "none";
        }
        else {

            oIndicator.style.width = "160px";
            oIndicator.classList.add("youNext");        
            xIndicator.style.display = "none";
        }
    }
    else if(winner.length == 2) {

        italicAnnouncerText.textContent = "Draw game! Both players won.";
        xIndicator.classList.add("youNext");
        oIndicator.classList.add("youNext");
    }
    else {

        italicAnnouncerText.textContent = "Draw game!";
        xIndicator.classList.remove("youNext");
        oIndicator.classList.remove("youNext");
    }

}
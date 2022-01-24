const PlayerFactory = (token) => {
    return {token};
}

const GameBoard = (() => {
    gameArray = ['','','','','','','','',''];

    return {gameArray}
})();

const Controller = (() => {
    let player1 = PlayerFactory('x');
    let player2 = PlayerFactory('o');
    
    let win = false
    let finished = false;
    let currentTurn = 0;
    
    // Mode key: true = PvP | false = PvAI   => Implement Later
    let mode = false;

    const changeModeButton = document.getElementById('change-mode-btn');
    const changeMode = () => { 
        mode = !mode; 
    };

    changeModeButton.addEventListener('click', changeMode);

    function checkWin () {
        if ( gameArray[0] == gameArray[1] && gameArray[1] ==  gameArray[2] && gameArray[0] != '') { return true }
        else if ( gameArray[0] == gameArray[3] && gameArray[3] ==  gameArray[6] && gameArray[0] != '') { return true }
        else if ( gameArray[0] == gameArray[4] && gameArray[4] ==  gameArray[8] && gameArray[0] != '') { return true }
        else if ( gameArray[1] == gameArray[4] && gameArray[4] ==  gameArray[7] && gameArray[1] != '') { return true }
        else if ( gameArray[2] == gameArray[4] && gameArray[4] ==  gameArray[6] && gameArray[2] != '') { return true }
        else if ( gameArray[2] == gameArray[5] && gameArray[5] ==  gameArray[8] && gameArray[2] != '') { return true }
        else if ( gameArray[3] == gameArray[4] && gameArray[4] ==  gameArray[5] && gameArray[3] != '') { return true }
        else if ( gameArray[6] == gameArray[7] && gameArray[7] ==  gameArray[8] && gameArray[6] != '') { return true }
        else { return false }
    }


    // Display Game Board
    function writeSymbol (index) {
        if ( GameBoard.gameArray[index] == 'x' || GameBoard.gameArray[index] == 'o') { 
            // exits out of function if the gameArray already contains a token
            console.log('fail');
            return 
        } else {
            // change who's turn it is after the writing of a players token
            if ( currentTurn % 2 == 0)  {
                console.log('p1 turn')
                GameBoard.gameArray[index] = player1.token
            } else {
                console.log('p2 turn')
                GameBoard.gameArray[index] = player2.token    
            }   

            currentTurn++;
            win = checkWin();

            if ( currentTurn == 9 ) {
                console.log('Done');
                finished = true;
                currentTurn = 0;
            }
            else if ( win ) {
                console.log("Win");                        
                finished = true;
                currentTurn = 0;
                win = false;
                displayGameBoard;
            }

            // Resets gameboard
            if (finished) {
                // do something smart here
                GameBoard.gameArray =  ['','','','','','','','','']
                win = false;
                finished = false;
                currentTurn = 0;       
                displayGameBoard;
            } 

            console.log("Gameboard: ")
            console.log(GameBoard.gameArray)
            console.log(currentTurn)
            console.log(win)
            console.log(finished)
            console.log(player1.token)
            console.log(player2.token)
            updateGameBoard();
        }
    
    }

       // implement in a more elegant way
    function updateGameBoard () {
        const board = document.getElementById('gameboard');
        board.innerHTML = '';
        
        for (let index = 0; index < GameBoard.gameArray.length; index++) {
            const newButton = document.createElement('button');
            newButton.textContent = GameBoard.gameArray[index];
            newButton.classList.add('grid-button');
            
            newButton.addEventListener("click", function() { 
                console.log(GameBoard.gameArray)
                writeSymbol(index); 
            });
            board.appendChild(newButton);
        }
    }

    const displayGameBoard = (() => {
        const board = document.getElementById('gameboard');
        
        for (let index = 0; index < GameBoard.gameArray.length; index++) {
            const newButton = document.createElement('button');
            newButton.textContent = GameBoard.gameArray[index];
            newButton.classList.add('grid-button');

            newButton.addEventListener("click", function() { writeSymbol(index) });
            board.appendChild(newButton);
        }
    } )();


})();



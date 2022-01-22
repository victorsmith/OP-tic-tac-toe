
    const gameboard = (() => {
        // stuff here
        const gameArray = [0,0,0,0,0,0,0,0,0];
        
        
        const getGameArray = () => {
            return gameArray;
        }
        
        const setArray = (index, symbol) => {
            gameArray[index] = symbol;
        }
        
        // restarts game
        const resetGameArray = () => {
            gameArray = [0,0,0,0,0,0,0,0,0];
        }
        
        return {getGameArray, setArray, resetGameArray};
})();
    
    
const PlayerFactory = (symbol) => {
    // player content
    const assignedSymbol = symbol;

    const getAssignedSymbol = () => {
        return assignedSymbol;
    }
    
    return {getAssignedSymbol};
};
    
const controller = (() => {
    
    // Game modes: 0: P1 vs P2 | 1 = P1 vs AI
    const gameMode = 0; 
    let turn = 0;
    
    const player1 = PlayerFactory('X')
    const player2 = PlayerFactory('0')
    
    console.log(player1.symbol);
    
    const gameBoard = document.getElementById('gameboard');
    const gameArray = gameboard.getGameArray();
    
    console.log(gameArray)

    const toggleBlock = ( (index) => {
        console.log(index)
        if (turn % 2 == 0) {
            // gameBoard.setArray(index, player2.getAssignedSymbol())
        } else {
            // gameBoard.setArray(index, player1.getAssignedSymbol())
        }
        turn++;
    } ) ();
    
    const displayGameBoard = ( () => {
        console.log("working")
        for (let x=0; x<gameArray.length; x++) {
            const gridButton = `                
                <div class="wrapper">
                    <button class="game-block" onclick="toggleBlock(${x})">
                    </button>
                </div>`
            gameBoard.insertAdjacentHTML("beforeend", gridButton);
        }
    })();


})();



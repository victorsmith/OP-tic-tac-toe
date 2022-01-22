// if you only need 1 -> use a module 
// need 2+ -> use a factory function

const gameboard = (() => {
    // stuff here
    const gameArray = [0,0,0,0,0,0,0,0,0];
    const getGameArray = () => {
        return gameArray;
    }
    return {getGameArray};
})();


const displayController = (() => {
    const gameBoard = document.getElementById('gameboard');
    const gameArray = gameboard.getGameArray();
    
    console.log("test")
    console.log(gameArray)

    const displayGameBoard = () => {
        for (let x=0; x<gameArray.length; x++) {
            const gridButton = `                
                <div class="wrapper">
                    <button class="game-block" onclick="toggleBlock(${x})">
                    </button>
                </div>`
            gameBoard.insertAdjacentHTML("beforeend", gridButton);
        }
    }
    return {displayGameBoard};
})();
    

const playerFactory = () => {
    // player content
};


window.onload = () => {
    const newGame = displayController.displayGameBoard();
}  
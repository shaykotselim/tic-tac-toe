let allBoxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetbtn");
let newGameButton = document.querySelector("#new-btn");
let newGameContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let mainContainer = document.querySelector(".main-container")

let firstTurn = true // first player 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8], 
]
const resetGame = ()=>{
    firstValue = true;
    enableBoxes();
    newGameContainer.classList.add("hide");
    mainContainer.classList.remove("hide");
}
allBoxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if(firstTurn){
            box.innerText = "O";
            firstTurn = false;
        }else{
            box.innerText = "X";
            firstTurn = true; 
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBoxes = ()=>{
    for(let box of allBoxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for(let box of allBoxes){
        box.disabled = false;
        box.innerText ="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    newGameContainer.classList.remove("hide");
    disabledBoxes();
    mainContainer.classList.add("hide")
  
}
const checkWinner = ()=> {
    for(let pattern of winPatterns){

       let firstValue = allBoxes[pattern[0]].innerText;
       let secondValue = allBoxes[pattern[1]].innerText;
       let thirdValue = allBoxes[pattern[2]].innerText;
    
        if(firstValue != "" && secondValue !="" && thirdValue !=""){
            if(firstValue === secondValue && secondValue === thirdValue){
                console.log("Winner", firstValue);
                
                showWinner(firstValue);
            }
        }
    }
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

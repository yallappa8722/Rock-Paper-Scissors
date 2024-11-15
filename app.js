let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mgs = document.querySelector("#msg");
const userParaScore = document.querySelector("#user-score");
const compParaScore = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw")
    mgs.innerText = "game was graw! play again"
    mgs.style.backgroundColor = "blue";
};

const showWinner = (userWin,userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userParaScore.innerText = userScore;
        console.log("you win!");
        mgs.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        mgs.style.backgroundColor = "green";
    }else {
        console.log("you loss");
        compScore++;
        compParaScore.innerText = compScore;
        mgs.innerText=`you loss!  ${compChoice} beats your ${userChoice}` ;
        mgs.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin =true;
        if(compChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false :true;
        }else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false :true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
            
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Corrected
        playGame(userChoice)
    });
});
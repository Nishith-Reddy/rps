const maxPoints = parseInt(prompt("Enter the maximum points needed to win the game:"));

function getComputerChoice() {
    const choice = Math.floor(Math.random()*100)%3;
    return choice;
}

function getHumanChoice() {
    const userChoice = prompt('Enter your choice: \n Rock: 1, Paper: 2, Scissors:3');
    return userChoice
}

function playround(maxPoints, playHuman, playComputer) {
    if (!maxPoints){
        alert('Can\'t start the game, enter Max points to start.');
        return 
    }
    alert(`Starting your match now,\n first to score ${maxPoints} is declared as the Winner!`);
    let scoreHuman = 0;
    let scoreComp = 0;
    
    while(Math.max(scoreComp, scoreHuman)<maxPoints){
        let humanChoice =  parseInt(playHuman())-1;
        let computerChoice = playComputer();
        if (humanChoice > 2 || humanChoice<0 || isNaN(humanChoice)){
            alert('You have to choose a vaild option to continue playing');
            humanChoice =  playHuman();
            continue;
        }
        if (humanChoice === computerChoice){
            continue;
        }
        switch (humanChoice) {
            case 0:
                if (computerChoice === 2) {
                    scoreHuman += 1;
                }
                else {
                    scoreComp +=1 
                }
                break;
            case 1:
                if (computerChoice === 0) {
                    scoreHuman += 1;
                }
                else {
                    scoreComp += 1;
                }
                break;
            case 2:
                if (computerChoice==1){
                    scoreHuman+=1;
                }
                else{
                    scoreComp +=1;
                }
                break;
        }
        alert(`Scores are Player:${scoreHuman} and Computer:${scoreComp}`);

    }
   
    if(scoreComp>scoreHuman){
        alert("The winner is Computer!!!");
    }
    else{
        alert("Congrats!!! on winning");
    }
    return
}

playround(maxPoints, getHumanChoice, getComputerChoice);

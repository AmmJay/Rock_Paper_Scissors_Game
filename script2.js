const choices = ['Rock', 'Paper', 'Scissors']
const iconButtons = document.querySelectorAll('.iconButtons')
const result ={
    playerScore : 0,
    computerScore : 0,
    totalPlayerScore : 0,
    totalComputerScore : 0
}
const statement = document.getElementById('statement')
const scoreBoard =document.getElementById('scoreBoard')
const remark = document.getElementById('remark')
const restart = document.getElementById('restart')

const getComputerChoice = () =>{
    return choices[Math.floor(Math.random() *3)]
}

const getResult = (playerChoice, computerChoice) => {
    if(playerChoice == computerChoice){
        result.playerScore = 0
        result.computerScore = 0
        remark.innerText = 'It\'s a tie!'
    }

    else if((playerChoice == 'Rock' && computerChoice=='Scissors') || (playerChoice=='Paper' && computerChoice=='Rock') || (playerChoice=='Scissors' && computerChoice=='Paper')){
        result.playerScore = 1
        result.computerScore =-1
        remark.innerText = 'You Win!'
    }

    else {
        result.playerScore = -1
        result.computerScore =1
        remark.innerText = 'You Lose!'
    }

    result.totalPlayerScore += result.playerScore
    result.totalComputerScore += result.computerScore
    
}

const showResult = (playerChoice,computerChoice) =>{
    statement.innerText = `You : ${playerChoice} VS Computer: ${computerChoice}`
    scoreBoard.innerHTML = `<h3>Your Score : ${result.playerScore}  ||  Computer Score : ${result.computerScore}<br>
                            Total: ${result.totalPlayerScore}  ||  Total: ${result.computerScore}<h3>`;
}

const onClickGenerateUserChoice = (playerChoice) =>{
    computerChoice = getComputerChoice()
    getResult(playerChoice,computerChoice)
    showResult(playerChoice,computerChoice)
}

const endGame = () =>{
    result.playerScore = 0
    result.computerScore =0
    result.totalPlayerScore = 0
    result.totalComputerScore = 0
    remark.innerText = ''
    statement.innerText = ''
    scoreBoard.innerHTML  = ''
}

const playGame = () => {
    iconButtons.forEach(button =>{
        button.onclick = () => onClickGenerateUserChoice(button.value)
    })

    restart.onclick = () => endGame()
}

playGame()
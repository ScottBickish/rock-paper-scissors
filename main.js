let userScore = 0
let computerScore = 0
let userScoreElem = document.getElementById('user-score')
let compScoreElem = document.getElementById('computer-score')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let resultElem = document.getElementById('result')

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getComputerChoice())
function game(userChoice){
    let computerChoice = getComputerChoice()
    // console.log('you picked: ', userChoice)
    // console.log('computer picked: ', computerChoice)
    switch(userChoice + computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
        win(userChoice, computerChoice)
        break
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
        lose(userChoice, computerChoice)
        break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        draw(userChoice, computerChoice)
        break
    }
}

function win(userChoice, computerChoice){
    
    userScore++
    userScoreElem.innerText = userScore
    resultElem.innerText = `${userChoice} beats ${computerChoice} you win!!`
}

function lose(userChoice, computerChoice){
   computerScore++
   compScoreElem.innerText = computerScore
   resultElem.innerText = `${userChoice} lost to ${computerChoice} you lost :(`
}
function draw(userChoice, computerChoice){
    resultElem.innerText = `${userChoice} is equal to ${computerChoice} its a draw...`
}


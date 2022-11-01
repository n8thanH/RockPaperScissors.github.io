const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playButton = document.getElementById('playButton');
const feedback = document.getElementById('feedbackBox');
const buttons = document.getElementById('buttons');
const optionButtons = document.getElementsByClassName('gameButton');
const gameButtons = document.querySelectorAll('.gameButtons');

buttons.style.opacity = 0;
var sign = "";

playButton.addEventListener('click', getSign);
playButton.addEventListener('click', hidePlayButton);
rock.addEventListener('click', () => SelectObject("rock", sign));
paper.addEventListener('click', () => SelectObject("paper", sign));
scissors.addEventListener('click', () => SelectObject("scissors", sign));

function hidePlayButton() {
    playButton.style.opacity = 0;
    buttons.style.opacity = 1;
    feedback.textContent = "";
    rock.style.opacity = 1;
    paper.style.opacity = 1;
    scissors.style.opacity = 1;
}

function getSign() {
    var random = Math.floor(Math.random() * 3 + 1);

    switch (random) {
        case 1:
            sign = "rock"
            break;

        case 2:
            sign = "paper"
            break;

        case 3:
            sign = "scissors"
            break;
    }
    console.log(sign);
}

function SelectObject(obj, sign) {
    let goAgain = false;
    rock.style.opacity = 1;
    paper.style.opacity = 1;
    scissors.style.opacity = 1;

    if (obj == "rock") {
        if (sign == "rock") {
            feedback.textContent = "Tie, Go Again!";
            goAgain = true;
            getSign();
        } else if (sign == "paper") {
            feedback.textContent = "You Lose!";
        } else if (sign == "scissors") {
            feedback.textContent = "You Win!";
        }
        rock.style.opacity = .75;
    }
    else if (obj == "scissors") {
        if (sign == "rock") {
            feedback.textContent = "You Lose!";
        } else if (sign == "paper") {
            feedback.textContent = "You Win!";
        } else if (sign == "scissors") {
            feedback.textContent = "Tie, Go Again!";
            goAgain = true;
            getSign();
        }
        scissors.style.opacity = .75;
    }
    else if (obj == "paper") {
        if (sign == "rock") {
            feedback.textContent = "You Win!";
        } else if (sign == "paper") {
            feedback.textContent = "Tie, Go Again!";
            goAgain = true;
            getSign();
        } else if (sign == "scissors") {
            feedback.textContent = "You Lose!";
        }
        paper.style.opacity = .75;
    }

    if (goAgain == true) {

    } else {
        playButton.style.opacity = 1;
        buttons.style.opacity = 0;
        playButton.textContent = "Play Again!";
        goAgain = false;
    }
}
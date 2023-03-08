let userChoices = document.getElementsByClassName("btn")
let options = ['rock', 'paper', 'scissors'];
let message = document.getElementById("messageBox")

let winAudio = new Audio("win.mp3")
let loseAudio = new Audio("lose.mp3")
let drawAudio = new Audio("draw.mp3")


for(let e of Array.from(userChoices)){
    e.addEventListener("click", ()=>{
        let userChoice =  e.innerHTML;
        let computerChoice = options[Math.floor(Math.random()*3)]


        if (userChoice.toLowerCase()=='rock' && computerChoice == 'scissors' ){
            message.style.color = "green";
            winAudio.play();
            message.innerHTML = `Computer chose ${computerChoice}! You won!`;   
        }

        else if (userChoice.toLowerCase()=='paper' && computerChoice == 'rock' ){
            message.style.color = "green";
            winAudio.play();
            message.innerHTML = `Computer chose ${computerChoice}! You won!`;       
        }

        else if (userChoice.toLowerCase()=='scissors' && computerChoice == 'paper' ){
            message.style.color = "green";
            winAudio.play();
            message.innerHTML = `Computer chose ${computerChoice}! You won!`;      
        }

        else if (userChoice.toLowerCase()==computerChoice){
            message.style.color = "orange";
            drawAudio.play();
            message.innerHTML = `Computer chose ${computerChoice}! It's a draw!`;      
        }

        else{
            message.style.color = "red";
            loseAudio.play();
            message.innerHTML = `Computer chose ${computerChoice}! You lose!`; 
        }

    })
}


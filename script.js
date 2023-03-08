let userChoices = document.getElementsByClassName("btn")
let options = ['rock', 'paper', 'scissors'];
let message = document.getElementById("messageBox")

for(let e of Array.from(userChoices)){
    e.addEventListener("click", ()=>{
        let userChoice =  e.innerHTML;
        let computerChoice = options[Math.floor(Math.random()*3)]


        if (userChoice.toLowerCase()=='rock' && computerChoice == 'scissors' ){
            message.style.color = "green";
            message.innerHTML = `Computer chose ${computerChoice}! You won!`;   
        }

        else if (userChoice.toLowerCase()=='paper' && computerChoice == 'rock' ){
            message.style.color = "green";
            message.innerHTML = `Computer chose ${computerChoice}! You won!`;       
        }

        else if (userChoice.toLowerCase()=='scissors' && computerChoice == 'paper' ){
            message.style.color = "green";
            message.innerHTML = `Computer chose ${computerChoice}! You won!`;      
        }

        else if (userChoice.toLowerCase()==computerChoice){
            message.style.color = "orange";
            message.innerHTML = `Computer chose ${computerChoice}! It's a draw!`;      
        }

        else{
            message.style.color = "red";
            message.innerHTML = `Computer chose ${computerChoice}! You lose!`; 
        }

    })
}


const submit = document.querySelector("#submit");
 const userNum = document.querySelector("#guess");
 const result = document.querySelector("#result");
 const newBtn = document.querySelector("#newBtn");
 const yourGuess = document.querySelector("#yourGuess");
 const previousGuess = document.querySelector("#previousGuess");
let guesses = [];
let attempts = 1;
let maxAttempts = 10;
 
submit.addEventListener("click",()=>{
    let randomNum = Math.floor(Math.random()*100);
      console.log(randomNum);
      if (attempts >= maxAttempts) {
        result.innerText = "Game Over! Click New Game 😢";
        submit.disabled = true;
        return;
    }
    
    if (attempts === maxAttempts && userValue !== randomNum) {
        result.innerText =`Game Over 😢 The number was ${randomNum}` ;
        submit.disabled = true;
    }
         let userValue = Number(userNum.value);
         guesses.push(userValue);
         previousGuess.innerText =  `Your Guess :${guesses.join(",")}`;
      if (userValue < 0 || userValue > 100) {
    result.innerText = "Please enter a number between 0 and 100 ⚠️";
    return;
}   
     if(userValue===randomNum){
    result.innerText = "Congrats! You guessed the correct Number.";
    submit.disabled = true;

}else if(userValue>randomNum){
    result.innerText = `${userValue} is too high,guess again!`;
}else{
     result.innerText = `${userValue} is too low,guess again!`;
}
    
  attempts++;    
});

newBtn.addEventListener("click",()=>{
    userNum.value = "";
     result.innerText = "";
     submit.disabled = false;
    previousGuess.innerText = "";
     guesses = [];
    attempts = 1;
})

// Game start
let gameState = {
    numScore: 0,
    passiveResources: 0,
   
}

let passiveResourceAmount = document.getElementById("passiveResources")
let totalScore = document.getElementById("score");


//Anvil Button

let anvilImg = document.getElementById("anvil");

function moreHeat() {
    gameState.numScore = gameState.numScore + 1; 
    totalScore.textContent = gameState.numScore; 
};

anvilImg.addEventListener("click", moreHeat)

// 1st Producer

let levelOneBtn = document.getElementById("lvlOneBtn"); 
let costOne = document.getElementById("oneCost");

function lvl1HeatProducer () {
    if (gameState.numScore >= 10) {
        gameState.numScore -= 10;
        totalScore.textContent = gameState.numScore;
        gameState.passiveResources += 1;
        passiveResourceAmount.textContent = gameState.passiveResources; 
    }
};



levelOneBtn.addEventListener("click", lvl1HeatProducer)

// 2nd Producer

let levelTwoBtn = document.getElementById("lvlTwoBtn"); 

function lvl2HeatProducer () {
    if (gameState.numScore >= 50) {
        gameState.numScore -= 50;
        totalScore.textContent = gameState.numScore;
        gameState.passiveResources += 5;
        passiveResourceAmount.textContent = gameState.passiveResources;
    }
};

// hidden button for future update


// let twoBtn = document.getElementById("leveltwo");
//   if (gameState.numScore <= 25){
//     twoBtn.hidden = true;
//   } else {twoBtn.hidden = false}
    


// function lvltwobtn (){
//     let twoBtn = document.getElementById("leveltwo");
//     if (gameState.numScore <= 25) {
//       twoBtn.hidden = true;
//     } else {
//       twoBtn.hidden = false;    
//     }



levelTwoBtn.addEventListener("click", lvl2HeatProducer)

// 3rd Producer
let levelThreeBtn = document.getElementById("lvlThreeBtn"); 

function lvl3HeatProducer () {
    if (gameState.numScore >= 100) {
        gameState.numScore -= 100;
        totalScore.textContent = gameState.numScore;
        gameState.passiveResources += 10;
        passiveResourceAmount.textContent = gameState.passiveResources;
    }
};


levelThreeBtn.addEventListener("click", lvl3HeatProducer)


// 4th Producer

let levelFourBtn = document.getElementById("lvlFourBtn"); 

function lvl4HeatProducer () {
    if (gameState.numScore >= 200) {
        gameState.numScore -= 200;
        totalScore.textContent = gameState.numScore;
        gameState.passiveResources += 20;
        passiveResourceAmount.textContent = gameState.passiveResources;
    }
};


levelFourBtn.addEventListener("click", lvl4HeatProducer)

// 5th Producer

let levelFiveBtn = document.getElementById("lvlFiveBtn"); 

function lvl5HeatProducer () {
    if (gameState.numScore >= 500) {
        gameState.numScore -= 500;
        totalScore.textContent = gameState.numScore;
        gameState.passiveResources += 50;
        passiveResourceAmount.textContent = gameState.passiveResources;
    }
};


levelFiveBtn.addEventListener("click", lvl5HeatProducer)

// 6th Producer

let levelSixBtn = document.getElementById("lvlSixBtn"); 

function lvl6HeatProducer () {
    if (gameState.numScore >= 1000) {
        gameState.numScore -= 1000;
        totalScore.textContent = gameState.numScore;
        gameState.passiveResources += 100;
        passiveResourceAmount.textContent = gameState.passiveResources;
    }
};


levelSixBtn.addEventListener("click", lvl6HeatProducer)


// interval

function heatPerSecond() {
    gameState.numScore += gameState.passiveResources
    totalScore.textContent = gameState.numScore; 
}

setInterval(heatPerSecond, 1000);



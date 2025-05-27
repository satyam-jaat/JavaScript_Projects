let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
let buttons = ["yellow","red","purple","green"];

let button = document.querySelector("button");
button.addEventListener("click", function() {
    if(started == false) {
        console.log("Game started");
        started = true;
        button.innerText = "Stop Game";
        levelUp();
    }else {
        started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
        h2.innerText = "";
        button.innerText = "Start Game";
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}


function userFlash(btn) {
    let color = btn.getAttribute("id");
    if(color == "red") {
        btn.classList.add("userflashred");
        setTimeout(function() {
            btn.classList.remove("userflashred");
        }, 100);
    }else if(color == "yellow") {
        btn.classList.add("userflashyellow");
        setTimeout(function() {
            btn.classList.remove("userflashyellow");
        }, 100);
    }if(color == "green") {
        btn.classList.add("userflashgreen");
        setTimeout(function() {
            btn.classList.remove("userflashgreen");
        }, 100);
    }if(color == "purple") {
        btn.classList.add("userflashpurple");
        setTimeout(function() {
            btn.classList.remove("userflashpurple");
        }, 100);
    }
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    //random button
    let index = Math.floor(Math.random() * 3);
    let randomColor = buttons[index];
    let btn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(btn);
}


function btnPress() {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns();
}


let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns) {
    btns.addEventListener("click",btnPress);
}


function checkAns() {
    let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]) {
        levelUp();
        console.log("Same value");
    }else {
        button.innerText = "Restart";
        userSeq = [];
        gameSeq = [];
        level = 0;
        console.log("Game Over!");
        levelUp();
        h2.innerText = "Game Over! Press Button to Restart.";
    }
}

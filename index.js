// Code to get Player names

let player1 = prompt("Enter Player 1 Name :");
let player2 = prompt("Enter Player 2 Name :");

// Code for Changing the default names from the names entered by user

document.querySelector(".player1").textContent=player1;
document.querySelector(".player2").textContent=player2;
//function for  player 1 

function run1() {
    let k = Math.random();
    k = Math.round(k * 8) + 1;
    let q=0;
    q=q+k;
    switch (q) {
        case 1: document.querySelector(".play1").style.left = "11%";
            break;
        case 2: document.querySelector(".play1").style.left = "22%";
            break;
        case 3: document.querySelector(".play1").style.left = "33%";
            break;
        case 4: document.querySelector(".play1").style.left = "44%";
            break;
        case 5: document.querySelector(".play1").style.left = "55%";
            break;
        case 6: document.querySelector(".play1").style.left = "66%";
            break;
        case 7: document.querySelector(".play1").style.left = "77%";
            break;
        case 8: document.querySelector(".play1").style.left = "88%";
            break;
    }
    if(q===8)
    {
        document.querySelector("h1").textContent= player1+" is Winner!! 😇"
    }
}

//function for player2 
function run2() {
    let j = Math.random();
    j = Math.round(j * 8) + 1;
    let p = 0;
    p = p+j;
    switch (p) {
        case 1: document.querySelector(".play2").style.left = "11%";
            break;
        case 2: document.querySelector(".play2").style.left = "22%";
            break;
        case 3: document.querySelector(".play2").style.left = "33%";
            break;
        case 4: document.querySelector(".play2").style.left = "44%";
            break;
        case 5: document.querySelector(".play2").style.left = "55%";
            break;
        case 6: document.querySelector(".play2").style.left = "66%";
            break;
        case 7: document.querySelector(".play2").style.left = "77%";
            break;
        case 8: document.querySelector(".play2").style.left = "88%";
            break;
    }
    if(p===8)
    {
        document.querySelector("h1").textContent= player2+" is Winner!! 😇"
    }
}
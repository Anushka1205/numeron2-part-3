// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let number1=Math.round(Math.random()*100)
let number2=Math.round(Math.random()*100)
console.log(number1,number2);
let number1Box=document.getElementById("number1");
let number2Box=document.getElementById("number2");
number1Box.innerText=number1;
number2Box.innerText=number2;



// Iteration 3: Creating variables required to make the game functional

let plusBtn=document.getElementById("plus");
let minusBtn=document.getElementById("minus");
let mulBtn=document.getElementById("mul");
let divideBtn=document.getElementById("divide");;
let modulusBtn=document.getElementById("modulus");
let score=0;


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3;
let number3Box=document.getElementById("number3");
console.log(number3Box)


// Iteration 5: Creating a randomise function to make the game functional

function randomise(){

    number1=Math.round(Math.random()*100)
    number2=Math.round(Math.random()*100)
    if(number1<number2){
        let temp=number1;
        number1=number2;
        number2=temp;
    }

    number1Box.innerText=number1;
    number2Box.innerText=number2;

    let OperatorArr=["+","-","*","/","%"];

    let randomIndex=Math.floor(Math.random()*OperatorArr.length);

    switch(OperatorArr[randomIndex]){

        case "+":
            number3=number1+number2;
            break;
        case "-":
            number3=number1-number2;
            break;
        case "*":
            number3=number1*number2;
            break;
        case "/":
            number3=Math.floor(number1/number2);
            break;
        case "%":
            number3=number1%number2;
            break;
        default:
            randomise();
            
    }

    number3Box.innerText=number3;

}

randomise();


// Iteration 6: Making the Operators (button) functional

plusBtn.onclick=()=>{
    if (number1+number2==number3){
        score++;
        randomise();
        resetTime(intervalId);
    }else{
        alert("Game Over")
    }
}

minusBtn.onclick=()=>{
    if (number1-number2==number3){
        score++;
        randomise();
        resetTime(intervalId);
    }else{
        alert("Game Over")
    }
}

mulBtn.onclick=()=>{
    if (number1*number2==number3){
        score++;
        randomise();
        resetTimetimerId();
    }else{
        alert("Game Over")
    }
}

divideBtn.onclick=()=>{
    if (number1/number2==number3){
        score++;
        randomise();
        resetTime(timerId);
    }else{
        alert("Game Over")
    }
}

modulusBtn.onclick=()=>{
    if (number1%number2==number3){
        score++;
        randomise();
        resetTime(timerId);
    }else{
        alert("Game Over")
    }
}

// Iteration 7: Making Timer functional

let time=20;
let timer=document.getElementById("timer");
let timerId;

function startTimer(){
    time=20;
    timerId=timer.innerText=time;
    setInterval(function(){

        time--;
        if(time==0){
            window.location.href="./gameover.html";
        }
        console.log(time);
        timer.innerText=time;
        localStorage.setItem("gameScore",score);
    },1000);

}


startTimer();

function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}


// 1. setTimeout
let counter=10;

setTimeout(()=>{

    counter++;
    console.log(counter);
},2000)



// 2. setInterval

let count=10;

let intervalId;

intervalId=setInterval(function(){
    console.log(count);
    count--;
    if (count==0){
        clearInterval(intervalId)
    }
    
},1000)
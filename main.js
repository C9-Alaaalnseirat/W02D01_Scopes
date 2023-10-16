/* START CODE UNDER THIS LINE */

// Pulse Check

// Q1

let myFavoriteFood = "Mansaf";
const favoriteFood = function () {
    return myFavoriteFood;
  };
  
  console.log(favoriteFood()); // => the value of `myFavoriteFood` variable


  // Q2

  const updateFavoriteFood = function (newValue) {
    myFavoriteFood = newValue;
    return newValue;
  };
  
  updateFavoriteFood("Pizza");
  console.log(favoriteFood());; // => "Pizza"


  // Q3

  const createCounter_v01 = function () {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return (counter += 1);
    };
  };

  const counter_1 = createCounter_v01();
  console.log(counter_1());
  console.log(counter_1());
  console.log(counter_1());
  console.log(counter_1());
  const counter_2 = createCounter_v01();
  console.log(counter_2());
  console.log(counter_1());

  console.clear()

  // Q4

  // instead of counting from zero it will take count from the value provided
const createCounter_v02 = function (start) {
    let counter = start;
    return function () {
        return (counter += 1);
    }
  };

  const counter_v1 = createCounter_v02(3);
  console.log(counter_v1());
  console.log(counter_v1());
  console.log(counter_v1());
  const counter_v2 = createCounter_v02(5)
  console.log(counter_v2());
  console.log(counter_v2());
  console.log(counter_v2());
  console.log(counter_v2());

  
  // Practice

  // Q1


let age = 25;
if (true) {
  age = 30;
}
console.log(age);; // 30

const myName = "John";
if (true) {
  const myName = "Jane";
  console.log(myName);
}
console.log(myName);; // John


// Q2


let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

console.log(func1());; // 24

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

console.log(func2(26));; // ?



// Q3 

let counter = 5;
const countDown = function () {
        if(counter > 0){
            return (counter -= 1)       
        }else{
        return "count down is over"
        } 
  }

  
//   console.log(countDown()); // => 4
//   console.log(countDown()); // => 3
//   console.log(countDown()); // => 2
//   console.log(countDown()); // => 1
//   console.log(countDown()); // => 0
//   console.log(countDown()); // => "count down is over"
//   console.log(countDown()); // => "count down is over"
//   console.log(countDown()); // => "count down is over"



  // Q4

  const countUp = function () {

    return (counter += 1)
  };
  
//   console.log(countUp());; // => 4
//   console.log(countUp());; // => 5
//   console.log(countUp());; // => 6
//   console.log(countUp());; // => 7
//   console.log(countUp());; // => 8



  // Q5

  const resetCount = function (start) {
    counter = start
    return start
  };
  
  resetCount(0); // => "the count has been reset"
  console.log(countUp()); // => 1
  resetCount(10); // => "the count has been reset"
  console.log(countUp());; // => 11



  // Q6

  let allList = "";
  const addToList = function (toDo) {
    return allList += toDo
  };
  
  console.log(addToList("Eat ")); // => 'Eat'
  console.log(addToList("Play ")); // => 'Eat Play'
  console.log(addToList("Sleep ")); // => 'Eat Play Sleep'
  console.log(addToList("repeat ")); // => 'Eat Play Sleep repeat'

 console.clear()

  // Q7


  const createToDoList = function () {
     let toDo = ""
     return function(add){
         toDo += add;
         return toDo
     }
  };
  
  const toDoListOne = createToDoList();
  console.log(toDoListOne("Eat "));; // => 'Eat'
  console.log(toDoListOne("Play "));; // => 'Eat Play'
  console.log(toDoListOne("Sleep "));; // => 'Eat Play Sleep'
  console.log(toDoListOne("repeat "));; // => 'Eat Play Sleep repeat'


// Q8 

let currentBalance = 0;
const deposit = function (amount) {
    return currentBalance += amount;
  };
  
//   console.log(deposit(100));; // => 100
//   console.log(deposit(50));; // => 150



// Q9


  const withdraw = function (amount) {
    if(currentBalance - amount >= 0){
     return currentBalance -= amount
    }else{
        return "insufficient funds, current balance: " + currentBalance;
    }
  };
  
  console.log(deposit(100));; // => 100
  console.log(deposit(50));; // => 150
  console.log(withdraw(70));; // => 80
  console.log(deposit(50));; // => 130
  console.log(withdraw(100));; // => 30
  console.log(withdraw(100));; // => "insufficient funds, current balance: 30"



// Q10 


const createAccount = function (initialValue) {
    let currentBalance = initialValue;
     return function(transactionType , amount){
        if(transactionType === "deposit"){
            return currentBalance += amount
        }else if(transactionType === "withdraw" && (currentBalance - amount) > 0){
            return currentBalance -= amount
        }else if(transactionType === "withdraw" && (currentBalance - amount) <= 0) {
            return "insufficient funds, current balance: " + currentBalance;
        }
     }
  };
  
  const accountOne = createAccount(0);
  console.log(accountOne("withdraw", 10));; // => "insufficient funds, current balance: 0"
  console.log(accountOne("deposit", 50));; // => 50
  console.log(accountOne("deposit", 70));; // => 120
  console.log(accountOne("withdraw", 10));; // => 110
  
  const accountTwo = createAccount(500);
  console.log(accountTwo("withdraw", 100));; // => 400
  console.log(accountTwo("withdraw", 100));; // => 300
  console.log(accountTwo("deposit", 50));; // => 350
  console.log(accountTwo("withdraw", 500));; // => "insufficient funds, current balance: 350"

console.clear()


  // Advanced Practice


  // Q1


// // every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// // both, and preserve the result for later invocations
// const minMax = function (number) {
//     let minNumber = Math.max(number)
//     let maxNumber = Math.min(number)
//     if(number){
//         return minNumber
//     }else{
//         return maxNumber
//     }
//   };
  
//   console.log(minMax(5));; // => "the maximum number is: 5 and the minimum number is 5"
//   console.log(minMax(2));; // => "the maximum number is: 5 and the minimum number is 2"
//   console.log(minMax(3));; // => "the maximum number is: 5 and the minimum number is 2"
//   console.log(minMax(7));; // => "the maximum number is: 7 and the minimum number is 2"
//   console.log(minMax(0));; // => "the maximum number is: 7 and the minimum number is 0"





// Q2


const randomMove = function () {
        let randomWordNumber = Math.floor((Math.random() * 3) + 1)
        if(randomWordNumber === 1){
            return "rock"
        }else if(randomWordNumber === 2){
            return "paper"
        }else{
            return "scissors"
        }
  };
const randomMoveForComputer = randomMove();
const rockPaperScissors_v02 = function () {
    let victory = 0
    let loss = 0
    console.log("Random move for computer is: " + randomMoveForComputer)
    return function(move){
        if(move === "rock" && randomMoveForComputer === "scissors"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "paper" && randomMoveForComputer === "rock"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "paper"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "rock"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "rock" && randomMoveForComputer === "paper"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "paper" && randomMoveForComputer === "scissors"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else{
            return "it is a draw"
        }  
      } 
  };
  
  const Result = rockPaperScissors_v02()
  console.log(Result("rock"));
  console.log(Result("rock"));
  console.log(Result("paper"));
  console.log(Result("scissors"));



  // Q3




console.log("Random move for computer is: " + randomMoveForComputer)
const rockPaperScissors_v03 = function (score) {
let counterGame = score;        
let victory = 0;
let loss = 0;

return function(move){
    if(victory < counterGame && loss < counterGame){
        if(move === "rock" && randomMoveForComputer === "scissors"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "paper" && randomMoveForComputer === "rock"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "paper"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "rock"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "rock" && randomMoveForComputer === "paper"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "paper" && randomMoveForComputer === "scissors"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === randomMoveForComputer){
            return "it is a draw"
        }
     }else{
        victory = 0
        loss = 0
        if(move === "rock" && randomMoveForComputer === "scissors"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "paper" && randomMoveForComputer === "rock"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "paper"){
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "rock"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "rock" && randomMoveForComputer === "paper"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "paper" && randomMoveForComputer === "scissors"){
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === randomMoveForComputer){
            return "it is a draw"
        }
     }
  } 
};

const Result_2 = rockPaperScissors_v03(3)
console.log(Result_2("rock"));
console.log(Result_2("rock"));
console.log(Result_2("paper"));
console.log(Result_2("paper"));
console.log(Result_2("paper"));
console.log(Result_2("paper"));
console.log(Result_2("paper"));
console.log(Result_2("paper"));




// Q4



console.log("Random move for computer is: " + randomMoveForComputer)
const rockPaperScissors_v04 = function () {
    let victory = 0
    let loss = 0
    
    
    return function(move , reset){
        
        if(move !== "" || reset !== true){
            if(move === "rock" && randomMoveForComputer === "scissors"){
                return "Won: " + (victory += 1) + ", Lost: " + loss
            }else if(move === "paper" && randomMoveForComputer === "rock"){
                return "Won: " + (victory += 1) + ", Lost: " + loss
            }else if(move === "scissors" && randomMoveForComputer === "paper"){
                return "Won: " + (victory += 1) + ", Lost: " + loss
            }else if(move === "scissors" && randomMoveForComputer === "rock"){
                return "Won: " +  victory + ", Lost: " + (loss += 1)
            }else if(move === "rock" && randomMoveForComputer === "paper"){
                return "Won: " +  victory + ", Lost: " + (loss += 1)
            }else if(move === "paper" && randomMoveForComputer === "scissors"){
                return "Won: " +  victory + ", Lost: " + (loss += 1)
            }else if(move === randomMoveForComputer) {
                return "it is a draw"
            }  
        }else if(move === "" || reset === true){
            victory = 0
            loss = 0
            return "the game has been reset"
        }
    }
  };
  

  const result_2 = rockPaperScissors_v04()
  console.log(result_2("rock"));
  console.log(result_2("paper"));
  console.log(result_2("scissors"));
  console.log(result_2("", true)); // => "the game has been reset"
  console.log(result_2("scissors"));



  console.clear()

  // Q5


const rockPaperScissors_v05 = function (){
let chance = 0
let victory = 0
let loss = 0

return function (move){
    if(chance < 0.25){
        if(move === "rock" && randomMoveForComputer === "scissors"){
            chance += 0.125
            return "Won: " + (victory += 1) + ", Lost: " + loss 
        }else if(move === "paper" && randomMoveForComputer === "rock"){
            chance += 0.125
            return "Won: " + (victory += 1) + ", Lost: " + loss  
        }else if(move === "scissors" && randomMoveForComputer === "paper"){
            chance += 0.125
            return "Won: " + (victory += 1) + ", Lost: " + loss 
        }else if(move === "scissors" && randomMoveForComputer === "rock"){
            chance += 0.125
            return "Won: " +  victory + ", Lost: " + (loss += 1) 
        }else if(move === "rock" && randomMoveForComputer === "paper"){
            chance += 0.125
            return "Won: " +  victory + ", Lost: " + (loss += 1) 
        }else if(move === "paper" && randomMoveForComputer === "scissors"){
            chance += 0.125
            return "Won: " +  victory + ", Lost: " + (loss += 1) 
        }else if(move === randomMoveForComputer) {
            return "it is a draw"
        } 
    }else {
        victory = 0
        loss = 0
        if(move === "rock" && randomMoveForComputer === "scissors"){
            chance += 0.125
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "paper" && randomMoveForComputer === "rock"){
            chance += 0.125
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "paper"){
            chance += 0.125
            return "Won: " + (victory += 1) + ", Lost: " + loss
        }else if(move === "scissors" && randomMoveForComputer === "rock"){
            chance += 0.125
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "rock" && randomMoveForComputer === "paper"){
            chance += 0.125
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === "paper" && randomMoveForComputer === "scissors"){
            chance += 0.125
            return "Won: " +  victory + ", Lost: " + (loss += 1)
        }else if(move === randomMoveForComputer) {
            return "it is a draw"
        }
    }
}
}

const result_3 = rockPaperScissors_v05()
console.log(result_3("rock"));; // => "Won: 0, Lost:1"
// lets assume that the same random move was picked because of the 25% chance
console.log(result_3("rock"));; // => "Won: 0, Lost:2"
console.log(result_3("rock"));; // => "Won: 1, Lost:0"
console.log(result_3("rock"));; // => "Won: 1, Lost:0"
console.log(result_3("rock"));; // => "Won: 1, Lost:0"
console.log(result_3("rock"));; // => "Won: 1, Lost:0"





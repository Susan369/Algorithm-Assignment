//1 new var
//for loop
//check if \3 \5 but not both
//call it

let result2= 0;

for(let i =200; i<=2700; i++){
    if (!(i%3===0 && i%5===0) && (i%3===0 || i%5===0)){
        result2= result2+i
    }
}
console.log(result2)

//2 shift the number to the front

function shiftArray(arr) {
    const shiftedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      shiftedArray.push(arr[i]);
    }
    return shiftedArray;
}
  
const inputArray = [2, 1, 6, 4, -7];
const shiftedArray = shiftArray(inputArray);
console.log(shiftedArray);

//3 
//inserts the numbers from 1 to 135 into an array
// fizz, buzz
//call it

let Array5= [];
for(let i=1; i<=13; i++){
    if(i%3 ===0 && i %5 ===0){
       Array5[i-1] = "FizzBuzz" 
    }else if(i%3 ===0){
        Array5[i-1] = "Fizz"
    }else if(i %5 ===0){
        Array5[i-1] = "Buzz"
    }else {
        Array5[i-1] = i
    }
}
console.log(Array5);

//4
//add up all the values below 1,000,000

function sumFibonacci(limit) {
let sum = 0;
let a = 0; // First Fibonacci number
let b = 1; // Second Fibonacci number
  
while (a < limit) {
    if (a % 2 === 0) {
// Add even Fibonacci numbers
    sum += a;
    }
  
// Calculate the next Fibonacci number
const next = a + b;
    a = b;
    b = next;
  }
  
  return sum;
}
  
  const limit = 1000000;
  const result = sumFibonacci(limit);
  console.log("The sum of even Fibonacci numbers below 1,000,000 is:", result);

//5
//remove the negative numbers

function removeNegatives(arr) {
    return arr.filter(number => number >= 0);
  }
  
  const inputArray1 = [1, -2, 4, 1];
  const resultArray1 = removeNegatives(inputArray1);
  console.log(resultArray1);

//6
//replace every letter of the word Program with*
//make algorithm work for any choice

function replaceWordWithAsterisks(arr, word) {
return arr.map((str) => {
    if (str === word) {
    return '*'.repeat(word.length);
  } else {
    return str;
  }
 });
}
  
const inputArray2 = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
const wordToReplace = 'Program';
  
const resultArray2 = replaceWordWithAsterisks(inputArray2, wordToReplace);
console.log(resultArray2);

//another word of my choice
function replaceWordWithAsterisks(arr, word) {
return arr.map((str) => {
    if (str === word) {
    return '*'.repeat(word.length);
    } else {
        return str;
    }
 });
}

const inputArray3 = ['This', 'is', 'a', 'different', 'example', 'with', 'different', 'words'];
const wordToReplace3 = 'different'; // Replace 'different' with asterisks

const resultArray3 = replaceWordWithAsterisks(inputArray3, wordToReplace3);
console.log(resultArray3);

//




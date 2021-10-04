// A)
// 1) Given the array,
//     Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
//     Loop through the array to find the longest word by how many letters each string contains.
//     Which other variables will you be needing?
// 2) Print the length of the longest word to the console.
// 3) Print the longest word to the console.  
// 4) Now what if the array was 
//     Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
//     Since all the words are in one string together, how would you solve this? 

let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let food = lunchArray[0];
let longest = lunchArray[0].length;

for (let i = 1; i < lunchArray.length; i++) {
  if (longest < lunchArray[i].length) {
    food = lunchArray[i]
    longest = lunchArray[i].length;
  }
  else {
    food = food;
  }
}

console.log(`The length of the longest word is ${longest}`)
console.log(`The longest word in the array is ${temp}`)



// B)Write a function that returns elements on odd positions in a list. 

function odd() {
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray = [];

  for (let i = 0; i < numArray.length; i++) {
    if (numArray.indexOf(i) % 2 != 0) {
      newArray.push(numArray[i]);
    }
  }
  return newArray;
}

console.log(odd());



// C)Function factorial(n) {
//   }
//   Compute the factorial of any given number.

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let n = 4;
answer = factorial(n)
console.log(`The factorial of ${n} is ${answer}`);



// D)Conditional Practice
//   Write an if statement and determine a condition where:
//   If mpg is less than or equal to 10, console “gas guzzler”
//   If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
//   If mpg is between 17-20, console “ it’s palpable”
//   If mpg is between 21-29, console “ Atmosphere smiles at your decision”
//   If mpg is between 30-35, console “ Not many gas stops will be taken”
//   If mpg is above 35 console “ The fish of the sea smile at your conservation”
//   If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
//   After testing each one, change the mpg variable to ensure it is good. 

let mpg = 28;

if (mpg >= 120) {
  console.log("If you are using the Tom Ogle fuel system, props")
}
else if (mpg > 35) {
  console.log("The fish of the sea smile at your conservation")
}
else if (mpg > 31) {
  console.log("Not many gas stops will be taken")
}
else if (mpg > 25) {
  console.log("Atmosphere smiles at your decision")
}
else if (mpg > 19) {
  console.log("It's palpable")
}
else if (mpg > 14) {
  console.log("Planet still frowns upon this, and so does your wallet")
}
else if (mpg <= 10) {
  console.log("Gas guzzler!");
}



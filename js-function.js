// practice task 1
// Take four parameters. Multiply the four numbers and then return the result
function multiplyNums(a, b, c, d) {
  const output = a * b * c * d;
  return output;
}

const result = multiplyNums(2, 4, 5, 8);
// console.log("Your Ans is : ", result);

// practice task 2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function isEvenOdd(number) {
  if (number % 2 === 0) {
    return number / 2;
  }
  return number * 2;
}
const output = isEvenOdd(16);
// console.log(output)
// console.log("---------------------------")
const output1 = isEvenOdd(17);
// console.log(output1)

// practice task 3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numsOfArray) {
  const lenOfArray = numsOfArray.length;

  let sum = 0;
  for (const num of numsOfArray) {
    sum = sum + num;
  }
  const avg = sum / lenOfArray;
  return avg;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const print = make_avg(array);
// console.log("Your avg mark is : ", print);

// practice task 4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
  const array = [];
    for(singleEle of str){
          if(singleEle === "0"){
                array.push(singleEle)
          }
    }
    const result = array.length;
    return result;
}
const stringBinary = "0100100001111";
const result1 = count_zero(stringBinary);
console.log(result1);

// practice task 5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num % 2 === 0){
        return 'even'
    }
    return 'odd'
}
const print1 = odd_even(57);
// console.log(print1);
# Syntax: Find Largest Odd Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findLargestOddNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 1) {
      if (maxSoFar === undefined) {
        maxSoFar = number;
      } else if (number > maxSoFar) {
        maxSoFar = number;
      }
    }
  }

  return maxSoFar;
}

let pileOfNumbers = [10, 9, -2, 18, 101, 17];
let result = findLargestOddNumber(pileOfNumbers);

console.log(result); // => 101

```

## Python

```javascript
function findLargestOddNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 1) {
      if (maxSoFar === undefined) {
        maxSoFar = number;
      } else if (number > maxSoFar) {
        maxSoFar = number;
      }
    }
  }

  return maxSoFar;
}

let pileOfNumbers = [10, 9, -2, 18, 101, 17];
let result = findLargestOddNumber(pileOfNumbers);

console.log(result); // => 101

```

## Ruby

```javascript
function findLargestOddNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 1) {
      if (maxSoFar === undefined) {
        maxSoFar = number;
      } else if (number > maxSoFar) {
        maxSoFar = number;
      }
    }
  }

  return maxSoFar;
}

let pileOfNumbers = [10, 9, -2, 18, 101, 17];
let result = findLargestOddNumber(pileOfNumbers);

console.log(result); // => 101

```

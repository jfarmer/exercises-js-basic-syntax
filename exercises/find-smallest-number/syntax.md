# Syntax: Find Smallest Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findSmallestNumber(numbers) {
  let minSoFar = numbers[0];

  for(let number of numbers) {
    if (number < minSoFar) {
      minSoFar = number;
    }
  }

  return minSoFar;
}

let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
let smallestNumber = findSmallestNumber(pileOfNumbers);

console.log(smallestNumber);

```

## Python

```javascript
function findSmallestNumber(numbers) {
  let minSoFar = numbers[0];

  for(let number of numbers) {
    if (number < minSoFar) {
      minSoFar = number;
    }
  }

  return minSoFar;
}

let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
let smallestNumber = findSmallestNumber(pileOfNumbers);

console.log(smallestNumber);

```

## Ruby

```javascript
function findSmallestNumber(numbers) {
  let minSoFar = numbers[0];

  for(let number of numbers) {
    if (number < minSoFar) {
      minSoFar = number;
    }
  }

  return minSoFar;
}

let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
let smallestNumber = findSmallestNumber(pileOfNumbers);

console.log(smallestNumber);

```

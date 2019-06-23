# Syntax: Find Largest Even Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findLargestEvenNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 0) {
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
let result = findLargestEvenNumber(pileOfNumbers);

console.log(result); // => 18

```

## Python

```javascript
function findLargestEvenNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 0) {
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
let result = findLargestEvenNumber(pileOfNumbers);

console.log(result); // => 18

```

## Ruby

```javascript
function findLargestEvenNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 0) {
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
let result = findLargestEvenNumber(pileOfNumbers);

console.log(result); // => 18

```

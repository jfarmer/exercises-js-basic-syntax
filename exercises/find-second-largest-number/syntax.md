# Syntax: Find second-largest number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findSecondLargestNumber(list) {
  let maxSoFar = undefined;
  let secondMaxSoFar = undefined;

  let firstNumber = list[0];
  let secondNumber = list[1];

  if (firstNumber > secondNumber) {
    maxSoFar = firstNumber;
    secondMaxSoFar = secondNumber;
  } else {
    maxSoFar = secondNumber;
    secondMaxSoFar = firstNumber;
  }

  for(let number of list) {
    if (number > maxSoFar) {
      secondMaxSoFar = maxSoFar;
      maxSoFar = number;
    } else if (number > secondMaxSoFar) {
      secondMaxSoFar = number;
    }
  }

  return secondMaxSoFar;
}

let pile = [56, 10, 15, 109, 88];
let result = findSecondLargestNumber(pile);

console.log(result);

```

## Python

```javascript
function findSecondLargestNumber(list) {
  let maxSoFar = undefined;
  let secondMaxSoFar = undefined;

  let firstNumber = list[0];
  let secondNumber = list[1];

  if (firstNumber > secondNumber) {
    maxSoFar = firstNumber;
    secondMaxSoFar = secondNumber;
  } else {
    maxSoFar = secondNumber;
    secondMaxSoFar = firstNumber;
  }

  for(let number of list) {
    if (number > maxSoFar) {
      secondMaxSoFar = maxSoFar;
      maxSoFar = number;
    } else if (number > secondMaxSoFar) {
      secondMaxSoFar = number;
    }
  }

  return secondMaxSoFar;
}

let pile = [56, 10, 15, 109, 88];
let result = findSecondLargestNumber(pile);

console.log(result);

```

## Ruby

```javascript
function findSecondLargestNumber(list) {
  let maxSoFar = undefined;
  let secondMaxSoFar = undefined;

  let firstNumber = list[0];
  let secondNumber = list[1];

  if (firstNumber > secondNumber) {
    maxSoFar = firstNumber;
    secondMaxSoFar = secondNumber;
  } else {
    maxSoFar = secondNumber;
    secondMaxSoFar = firstNumber;
  }

  for(let number of list) {
    if (number > maxSoFar) {
      secondMaxSoFar = maxSoFar;
      maxSoFar = number;
    } else if (number > secondMaxSoFar) {
      secondMaxSoFar = number;
    }
  }

  return secondMaxSoFar;
}

let pile = [56, 10, 15, 109, 88];
let result = findSecondLargestNumber(pile);

console.log(result);

```

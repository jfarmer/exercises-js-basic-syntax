# Syntax: Count Larger Than 10

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countLargerThanTen(numbers) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number > 10) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countAbove10 = countLargerThanTen(pile);

console.log(`There are #{countAbove10} numbers larger than 10 in the list.`);

```

## Python

```javascript
function countLargerThanTen(numbers) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number > 10) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countAbove10 = countLargerThanTen(pile);

console.log(`There are #{countAbove10} numbers larger than 10 in the list.`);

```

## Ruby

```javascript
function countLargerThanTen(numbers) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number > 10) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countAbove10 = countLargerThanTen(pile);

console.log(`There are #{countAbove10} numbers larger than 10 in the list.`);

```

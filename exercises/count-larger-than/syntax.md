# Syntax: Count Larger Than X

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countLargerThan(numbers, cutoff) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number > cutoff) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countAbove10 = countLargerThan(pile, 10);
let countAbove0 = countLargerThan(pile, 0);
let countAbove50 = countLargerThan(pile, 50);

console.log(`There are #{countAbove10} numbers larger than 10 in the list.`);
console.log(`There are #{countAbove0} numbers larger than 0 in the list.`);
console.log(`There are #{countAbove50} numbers larger than 50 in the list.`);

```

## Python

```javascript
function countLargerThan(numbers, cutoff) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number > cutoff) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countAbove10 = countLargerThan(pile, 10);
let countAbove0 = countLargerThan(pile, 0);
let countAbove50 = countLargerThan(pile, 50);

console.log(`There are #{countAbove10} numbers larger than 10 in the list.`);
console.log(`There are #{countAbove0} numbers larger than 0 in the list.`);
console.log(`There are #{countAbove50} numbers larger than 50 in the list.`);

```

## Ruby

```javascript
function countLargerThan(numbers, cutoff) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number > cutoff) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countAbove10 = countLargerThan(pile, 10);
let countAbove0 = countLargerThan(pile, 0);
let countAbove50 = countLargerThan(pile, 50);

console.log(`There are #{countAbove10} numbers larger than 10 in the list.`);
console.log(`There are #{countAbove0} numbers larger than 0 in the list.`);
console.log(`There are #{countAbove50} numbers larger than 50 in the list.`);

```

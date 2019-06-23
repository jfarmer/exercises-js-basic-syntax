# Syntax: Count Smaller Than X

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countSmallerThan(numbers, cutoff) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number < cutoff) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countBelow10 = countSmallerThan(pile, 10);
let countBelow0 = countSmallerThan(pile, 0);
let countBelow50 = countSmallerThan(pile, 50);

console.log(`There are #{countBelow10} numbers smaller than 10 in the list.`);
console.log(`There are #{countBelow0} numbers smaller than 0 in the list.`);
console.log(`There are #{countBelow50} numbers smaller than 50 in the list.`);

```

## Python

```javascript
function countSmallerThan(numbers, cutoff) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number < cutoff) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countBelow10 = countSmallerThan(pile, 10);
let countBelow0 = countSmallerThan(pile, 0);
let countBelow50 = countSmallerThan(pile, 50);

console.log(`There are #{countBelow10} numbers smaller than 10 in the list.`);
console.log(`There are #{countBelow0} numbers smaller than 0 in the list.`);
console.log(`There are #{countBelow50} numbers smaller than 50 in the list.`);

```

## Ruby

```javascript
function countSmallerThan(numbers, cutoff) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number < cutoff) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countBelow10 = countSmallerThan(pile, 10);
let countBelow0 = countSmallerThan(pile, 0);
let countBelow50 = countSmallerThan(pile, 50);

console.log(`There are #{countBelow10} numbers smaller than 10 in the list.`);
console.log(`There are #{countBelow0} numbers smaller than 0 in the list.`);
console.log(`There are #{countBelow50} numbers smaller than 50 in the list.`);

```

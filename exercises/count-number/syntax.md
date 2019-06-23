# Syntax: Count Specific Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countNumber(list, numberToCount) {
  let countSoFar = 0;

  for(let number of list) {
    if (number === numberToCount) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countOf15 = countNumber(pile, 15);   // should be 2
let countOf3 = countNumber(pile, 3);     // should be 1
let countOf109 = countNumber(pile, 109); // should be 0

console.log(`Count of 15 is #{countOf15}`);
console.log(`Count of 3 is #{countOf3}`);
console.log(`Count of 109 is #{countOf109}`);

```

## Python

```javascript
function countNumber(list, numberToCount) {
  let countSoFar = 0;

  for(let number of list) {
    if (number === numberToCount) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countOf15 = countNumber(pile, 15);   // should be 2
let countOf3 = countNumber(pile, 3);     // should be 1
let countOf109 = countNumber(pile, 109); // should be 0

console.log(`Count of 15 is #{countOf15}`);
console.log(`Count of 3 is #{countOf3}`);
console.log(`Count of 109 is #{countOf109}`);

```

## Ruby

```javascript
function countNumber(list, numberToCount) {
  let countSoFar = 0;

  for(let number of list) {
    if (number === numberToCount) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countOf15 = countNumber(pile, 15);   // should be 2
let countOf3 = countNumber(pile, 3);     // should be 1
let countOf109 = countNumber(pile, 109); // should be 0

console.log(`Count of 15 is #{countOf15}`);
console.log(`Count of 3 is #{countOf3}`);
console.log(`Count of 109 is #{countOf109}`);

```

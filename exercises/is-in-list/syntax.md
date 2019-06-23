# Syntax: Is In List

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function isInList(pile, searchNumber) {
  let result = false;

  for(let number of pile) {
    if (number === searchNumber) {
      result = true;
      return result;
    }
  }

  return result;
}

let pile = [10, 9, -2, 100];
let is9InList = isInList(pile, 9);
let is14InList = isInList(pile, 14);

console.log(`is9InList has value #{is9InList}`);
console.log(`is14InList has value #{is14InList}`);

```

## Python

```javascript
function isInList(pile, searchNumber) {
  let result = false;

  for(let number of pile) {
    if (number === searchNumber) {
      result = true;
      return result;
    }
  }

  return result;
}

let pile = [10, 9, -2, 100];
let is9InList = isInList(pile, 9);
let is14InList = isInList(pile, 14);

console.log(`is9InList has value #{is9InList}`);
console.log(`is14InList has value #{is14InList}`);

```

## Ruby

```javascript
function isInList(pile, searchNumber) {
  let result = false;

  for(let number of pile) {
    if (number === searchNumber) {
      result = true;
      return result;
    }
  }

  return result;
}

let pile = [10, 9, -2, 100];
let is9InList = isInList(pile, 9);
let is14InList = isInList(pile, 14);

console.log(`is9InList has value #{is9InList}`);
console.log(`is14InList has value #{is14InList}`);

```

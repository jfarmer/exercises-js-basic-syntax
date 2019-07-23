# Syntax: Count Positive Numbers

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countPositive(list) {
  let countSoFar = 0;

  for(let number of list) {
    if (number > 0) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let positiveCount = countPositive(pile);   // will give 5

console.log(`There are #{positiveCount} positive numbers in the list.`);

```

## Python

```javascript
def count_positive(list)
  count_so_far = 0

  for number in list:
    if number > 0 :
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
positive_count = count_positive(pile)

print(f'There are {positive_count} positive numbers in the list.')

```

## Ruby

```javascript
def count_positive(list)
  count_so_far = 0

  list.each do |number|
    if (number > 0)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
positive_count = count_positive(pile)

puts("There are #{positive_count} positive numbers in the list.")

```

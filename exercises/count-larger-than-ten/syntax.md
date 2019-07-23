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
def count_larger_than_ten(numbers)
  count_so_far = 0

  for number in numbers:
    if number > 10 :
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
count_above_10 = count_larger_than_ten(pile)

print(f'There are {count_above_10} numbers larger than 10 in the list.')

```

## Ruby

```javascript
def count_larger_than_ten(numbers)
  count_so_far = 0

  numbers.each do |number|
    if (number > 10)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
count_above_10 = count_larger_than_ten(pile)

puts("There are #{count_above_10} numbers larger than 10 in the list.")

```

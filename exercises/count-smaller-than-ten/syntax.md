# Syntax: Count Smaller Than 10

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countSmallerThanTen(numbers) {
  let countSoFar = 0;

  for(let number of numbers) {
    if (number < 10) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countBelow10 = countSmallerThanTen(pile);

console.log(`There are #{countBelow10} numbers smaller than 10 in the list.`);

```

## Python

```javascript
def count_smaller_than_ten(numbers)
  count_so_far = 0

  for number in numbers:
    if number < 10 :
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
count_below_10 = count_smaller_than_ten(pile)

print(f'There are {count_below_10} numbers smaller than 10 in the list.')

```

## Ruby

```javascript
def count_smaller_than_ten(numbers)
  count_so_far = 0

  numbers.each do |number|
    if (number < 10)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
count_below_10 = count_smaller_than_ten(pile)

puts("There are #{count_below_10} numbers smaller than 10 in the list.")

```

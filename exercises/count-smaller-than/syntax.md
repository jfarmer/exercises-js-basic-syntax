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
def count_smaller_than(numbers, cutoff)
  count_so_far = 0

  for number in numbers:
    if number < cutoff :
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
count_below_10 = count_smaller_than(pile, 10)
count_below_0 = count_smaller_than(pile, 0)
count_below_50 = count_smaller_than(pile, 50)

print(f'There are {count_below_10} numbers smaller than 10 in the list.')
print(f'There are {count_below_0} numbers smaller than 0 in the list.')
print(f'There are {count_below_50} numbers smaller than 50 in the list.')

```

## Ruby

```javascript
def count_smaller_than(numbers, cutoff)
  count_so_far = 0

  numbers.each do |number|
    if (number < cutoff)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
count_below_10 = count_smaller_than(pile, 10)
count_below_0 = count_smaller_than(pile, 0)
count_below_50 = count_smaller_than(pile, 50)

puts("There are #{count_below_10} numbers smaller than 10 in the list.")
puts("There are #{count_below_0} numbers smaller than 0 in the list.")
puts("There are #{count_below_50} numbers smaller than 50 in the list.")

```

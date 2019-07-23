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
def count_larger_than(numbers, cutoff)
  count_so_far = 0

  for number in numbers:
    if number > cutoff :
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
count_above_10 = count_larger_than(pile, 10)
count_above_0 = count_larger_than(pile, 0)
count_above_50 = count_larger_than(pile, 50)

print(f'There are {count_above_10} numbers larger than 10 in the list.')
print(f'There are {count_above_0} numbers larger than 0 in the list.')
print(f'There are {count_above_50} numbers larger than 50 in the list.')

```

## Ruby

```javascript
def count_larger_than(numbers, cutoff)
  count_so_far = 0

  numbers.each do |number|
    if (number > cutoff)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
count_above_10 = count_larger_than(pile, 10)
count_above_0 = count_larger_than(pile, 0)
count_above_50 = count_larger_than(pile, 50)

puts("There are #{count_above_10} numbers larger than 10 in the list.")
puts("There are #{count_above_0} numbers larger than 0 in the list.")
puts("There are #{count_above_50} numbers larger than 50 in the list.")

```

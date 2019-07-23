# Syntax: Find Smallest Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findSmallestNumber(numbers) {
  let minSoFar = numbers[0];

  for(let number of numbers) {
    if (number < minSoFar) {
      minSoFar = number;
    }
  }

  return minSoFar;
}

let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
let smallestNumber = findSmallestNumber(pileOfNumbers);

console.log(smallestNumber);

```

## Python

```javascript
def find_smallest_number(numbers):
  min_so_far = numbers[0]

  for number in numbers:
    if number < min_so_far:
      min_so_far = number

  return min_so_far

pile_of_numbers = [1, 4, 10, 9, -3, 20, 18]
smallest_number = find_smallest_number(pile_of_numbers)

print(smallest_number)

```

## Ruby

```javascript
def find_smallest_number(numbers)
  min_so_far = numbers.first

  numbers.each do |number|
    if number < min_so_far
      min_so_far = number
    end
  end

  return min_so_far
end

pile_of_numbers = [1, 4, 10, 9, -3, 20, 18]
smallest_number = find_smallest_number(pile_of_numbers)

puts(smallest_number)

```

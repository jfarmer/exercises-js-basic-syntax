# Syntax: Find Largest Odd Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findLargestOddNumber(numbers) {
  let maxSoFar = undefined;

  for(let number of numbers) {
    if (number % 2 === 1) {
      if (maxSoFar === undefined) {
        maxSoFar = number;
      } else if (number > maxSoFar) {
        maxSoFar = number;
      }
    }
  }

  return maxSoFar;
}

let pileOfNumbers = [10, 9, -2, 18, 101, 17];
let result = findLargestOddNumber(pileOfNumbers);

console.log(result); // => 101

```

## Python

```javascript
def find_largest_odd_number(numbers):
  max_so_far = None

  for number in numbers:
    if number % 2 == 1:
      if max_so_far is None:
        max_so_far = number
      elif number > max_so_far:
        max_so_far = number

  return max_so_far

pile_of_numbers = [10, 9, -2, 18, 101, 17]
result = find_largest_odd_number(pile_of_numbers)

print(result)

```

## Ruby

```javascript
def find_largest_odd_number(numbers)
  max_so_far = nil

  numbers.each do |number|
    if number.odd?
      if max_so_far.nil?
        max_so_far = number
      elsif number > max_so_far
        max_so_far = number
      end
    end
  end

  return max_so_far
end

pile_of_numbers = [10, 9, -2, 18, 101, 17]
result = find_largest_odd_number(pile_of_numbers)

puts(result)

```

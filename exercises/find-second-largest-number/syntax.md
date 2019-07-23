# Syntax: Find second-largest number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function findSecondLargestNumber(list) {
  let maxSoFar = undefined;
  let secondMaxSoFar = undefined;

  let firstNumber = list[0];
  let secondNumber = list[1];

  if (firstNumber > secondNumber) {
    maxSoFar = firstNumber;
    secondMaxSoFar = secondNumber;
  } else {
    maxSoFar = secondNumber;
    secondMaxSoFar = firstNumber;
  }

  for(let number of list) {
    if (number > maxSoFar) {
      secondMaxSoFar = maxSoFar;
      maxSoFar = number;
    } else if (number > secondMaxSoFar) {
      secondMaxSoFar = number;
    }
  }

  return secondMaxSoFar;
}

let pile = [56, 10, 15, 109, 88];
let result = findSecondLargestNumber(pile);

console.log(result);

```

## Python

```javascript
def find_second_largest_number(list_of_numbers):
  max_so_far = None
  second_max_so_far = None

  first_number = list_of_numbers[0]
  second_number = list_of_numbers[1]

  if (first_number > second_second_number):
    max_so_far = first_number
    second_max_so_far = second_number
  else:
    max_so_far = second_number
    second_max_so_far = first_number

  list_of_numbers.each do |number|
    if (number > max_so_far):
      second_max_so_far = max_so_far
      max_so_far = number
    elif (number > second_max_so_far):
      second_max_so_far = number

  return second_max_so_far
end

pile = [56, 10, 15, 109, 88]
result = find_second_largest_number(pile)

print(result)

```

## Ruby

```javascript
def find_second_largest_number(list_of_numbers)
  max_so_far = nil
  second_max_so_far = nil

  first_number = list_of_numbers[0]
  second_number = list_of_numbers[1]

  if (first_number > second_second_number)
    max_so_far = first_number
    second_max_so_far = second_number
  else
    max_so_far = second_number
    second_max_so_far = first_number
  end

  list_of_numbers.each do |number|
    if number > max_so_far
      second_max_so_far = max_so_far
      max_so_far = number
    elsif number > second_max_so_far
      second_max_so_far = number
    end
  end

  return second_max_so_far
end

pile = [56, 10, 15, 109, 88]
result = find_second_largest_number(pile)

puts(result)

```

# Syntax: Find Largest Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Python](#python)
- [Ruby](#ruby)

## JavaScript

```javascript
function addNumbers(numbers) {
  let runningTotal = 0;

  for(let number of numbers) {
    runningTotal = number + runningTotal;
  }

  return runningTotal;
}

let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
let sum = addNumbers(pileOfNumbers);

console.log(sum);
```

## Python

```python
def add_numbers(numbers):
  running_total = 0

  for number in numbers:
    running_total = number + running_total

  return running_total

pile_of_numbers = [1, 4, 10, 9, -3, 20, 18]
sum = add_numbers(pile_of_numbers)

print(sum)
```

## Ruby

```ruby
def add_numbers(numbers)
  running_total = 0

  numbers.each do |number|
    running_total = number + running_total
  end

  return running_total
end

pile_of_numbers = [1, 4, 10, 9, -3, 20, 18]
sum = add_numbers(pile_of_numbers)

puts(sum)
```

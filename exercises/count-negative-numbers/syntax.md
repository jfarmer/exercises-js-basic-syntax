# Syntax: Count Negative Numbers

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countNegative(list) {
  let countSoFar = 0;

  for(let number of list) {
    if (number > 0) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let negativeCount = countNegative(pile);   // will give 1

console.log(`There are #{negativeCount} negative numbers in the list.`);

```

## Python

```javascript
def count_negative(list)
  count_so_far = 0

  for number in list:
    if number < 0 :
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
negative_count = count_negative(pile)   // should be 1

print(f'There are {negative_count} positive numbers in the list.')

```

## Ruby

```javascript
def count_negative(list)
  count_so_far = 0

  list.each do |number|
    if (number < 0)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
negative_count = count_negative(pile)

puts("There are #{negative_count} negative numbers in the list.")

```

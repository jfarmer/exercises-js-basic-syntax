# Syntax: Count Specific Number

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)

## JavaScript

```javascript
function countNumber(list, numberToCount) {
  let countSoFar = 0;

  for(let number of list) {
    if (number === numberToCount) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let countOf15 = countNumber(pile, 15);   // should be 2
let countOf3 = countNumber(pile, 3);     // should be 1
let countOf109 = countNumber(pile, 109); // should be 0

console.log(`Count of 15 is #{countOf15}`);
console.log(`Count of 3 is #{countOf3}`);
console.log(`Count of 109 is #{countOf109}`);

```

## Python

```javascript
def count_number(list, number_to_count)
  count_so_far = 0

  for number in list:
    if number == number_to_count:
      count_so_far = count_so_far + 1

  return count_so_far

pile = [1, 15, -10, 3, 15, 88]
count_of_15 = count_number(pile, 15)   // should be 2
count_of_3 = count_number(pile, 3)     // should be 1
count_of_109 = count_number(pile, 109) // should be 0

print(f'Count of 15 is {count_of_15}')
print(f'Count of 3 is {count_of_3}')
print(f'Count of 109 is {count_of_109}')

```

## Ruby

```javascript
def count_number(list, number_to_count)
  count_so_far = 0

  list.each do |number|
    if (number == number_to_count)
      count_so_far = count_so_far + 1
    end
  end

  return count_so_far
end

pile = [1, 15, -10, 3, 15, 88]
count_of_15 = count_number(pile, 15)   // should be 2
count_of_3 = count_number(pile, 3)     // should be 1
count_of_109 = count_number(pile, 109) // should be 0

puts("Count of 15 is #{count_of_15}")
puts("Count of 3 is #{count_of_3}")
puts("Count of 109 is #{count_of_109}")

```

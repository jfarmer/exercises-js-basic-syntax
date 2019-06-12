# Syntax: Is In List

## Contents <!-- omit in toc -->

- [JavaScript](#javascript)
- [Ruby](#ruby)
- [Python](#python)
- [PHP](#php)

## JavaScript

```javascript
function isInList(pile, searchNumber) {
  for(let number of pile) {
    if (number === searchNumber) {
      let result = true;
      return result;
    }
  }

  let result = false;

  return result;
}

let pile = [10, 9, -2, 100];

let is9InList = isInList(pile, 9);
console.log(is9InList); // => true

let is14InList = isInList(pile, 14);
console.log(is14InList); // => false
```

## Ruby

```ruby
def is_in_list(pile, search_number)
  pile.each do |number|
    if number == search_number
      result = true
      return result
    end
  end

  result = false
  return result
end

pile = [10, 9, -2, 100]
is_in_list(pile, 9)  # => true
is_in_list(pile, 14) # => false
```

## Python

```python
def is_in_list(pile, search_number):
  for number in pile:
    if number == search_number:
      result = True
      return result

  result = False
  return result

pile = [10, 9, -2, 100]
is_in_list(pile, 9)  # => true
is_in_list(pile, 14) # => false
```

## PHP

```php
function is_in_list($pile, $search_number) {
  foreach ($pile as $search_number) {
    if ($number == $search_number) {
      $result = TRUE;
      return $result;
    }
  }

  $result = FALSE
  return $result
}

$pile = [10, 9, -2, 100]
is_in_list($pile, 9)  # => true
is_in_list($pile, 14) # => false
```

We're not going to include PHP examples going forward, but did so here because PHP has one interesting feature that the other languages don't: when we want to give a name to a value, we prefix the name with `$`.  For example, we write `$search_number` instead of `search_number`.

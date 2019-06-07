# Pseudocode: Is In List

```text
define procedure is_in_list:
  input: a pile of numbers, call it PILE
         a number to find, call it SEARCH_NUMBER

  foreach NUMBER in PILE, do the following:
    if NUMBER is SEARCH_NUMBER, then:
      write YES on post-it note
      hand back post-it note
    end if
  end foreach

  write NO on post-it note
  hand back post-it note
end define procedure

let PILE be [10, 9, -2, 100]

call procedure is_in_list with inputs: PILE, 9  // will result in "YES"
call procedure is_in_list with inputs: PILE, 14 // will result in "NO"
```

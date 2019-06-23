# Pseudocode: Is In List

```text
define procedure is_in_list:
  input:
    - a pile of numbers, call it PILE
    - a number to search for, call it SEARCH_NUMBER

  write "No" on a sticky note, call it RESULT

  foreach NUMBER in PILE, do the following:
    if NUMBER equals SEARCH_NUMBER, then:
      replace RESULT with "Yes" on sticky note
      return sticky note (and stop looking at numbers)
    end if
  end foreach

  return sticky note
end define procedure

let PILE be [10, 9, -2, 100, 17]
call procedure is_in_list with inputs: PILE, 9 // will give us "Yes"
call procedure is_in_list with inputs: PILE, 9 // will give us "Yes"


```

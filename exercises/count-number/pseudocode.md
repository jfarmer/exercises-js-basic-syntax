# Pseudocode: Count Specific Number

```text
define procedure count_number
  input:
    - a pile of numbers, call it PILE
    - a number to count, call it SEARCH_NUMBER

  label a sticky note COUNT_SO_FAR, write 0 on it

  foreach NUMBER in PILE, do the following:
    if NUMBER equals SEARCH_NUMBER, then:
      replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
    end if
  end foreach

  return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_number with inputs: PILE, 15  // will give 2 since 15 appears twice
call procedure count_number with inputs: PILE, 3   // will give 1 since 3 appears once
call procedure count_number with inputs: PILE, 109 // will give 0 since 109 doesn't appear

```

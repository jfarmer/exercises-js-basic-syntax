# Pseudocode: Count Larger Than 10

```text
define procedure count_smaller_than_ten
  inputs:
    - a pile of numbers, call it PILE

  label a sticky note COUNT_SO_FAR, write 0 on it

  foreach NUMBER in PILE, do the following:
    if NUMBER > 10, then:
      replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
    end if
  end foreach

  return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_smaller_than_ten with inputs: PILE, 10  // will give 3 since there are three numbers larger than 10
call procedure count_smaller_than_ten with inputs: PILE, 0   // will give 1 since there is one number larger than 0
call procedure count_smaller_than_ten with inputs: PILE, 50  // will give 5 since there are five numbers larger than 50

```

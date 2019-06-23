# Pseudocode: Count Smaller Than X

```text
define procedure count_smaller_than
  input:
    - a pile of numbers, call it PILE
    - a specific number, call it CUTOFF

  label a sticky note COUNT_SO_FAR, write 0 on it

  foreach NUMBER in PILE, do the following:
    if NUMBER < CUTOFF, then:
      replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
    end if
  end foreach

  return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_smaller_than with inputs: PILE, 10  // will give 3 since there are three numbers smaller than 10
call procedure count_smaller_than with inputs: PILE, 0   // will give 1 since there is one number smaller than 0
call procedure count_smaller_than with inputs: PILE, 50  // will give 5 since there are five numbers smaller than 50

```

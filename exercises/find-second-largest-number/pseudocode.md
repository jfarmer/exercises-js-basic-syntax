# Pseudocode: Find second-largest number

```text
define procedure find_second_largest_number
  input: a pile of numbers, call it PILE

  // Comment: The idea is to keep track of the two-largest numbers we've seen as we
  // look through the stack of cards. To start, we look at the first two cards
  // and arrange them according to which is largest and which is second-largest so far.

  put aside one sticky note, call it MAX_SO_FAR
  put aside another sticky note, call it SECOND_MAX_SO_FAR

  write down first number in PILE, call it FIRST_NUMBER
  write down second number in PILE, call it SECOND_NUMBER

  if FIRST_NUMBER > SECOND_NUMBER, then:
    replace value of MAX_SO_FAR with value of FIRST_NUMBER
    replace value of SEOND_MAX_SO_FAR with SECOND_NUMBER
  otherwise:
    replace value of MAX_SO_FAR with value of SECOND_NUMBER
    replace value of SEOND_MAX_SO_FAR with FIRST_NUMBER
  end if

  foreach NUMBER in PILE, do the following:
    if NUMBER > MAX_SO_FAR, then:
      // Comment: Since NUMBER > MAX_SO_FAR, the largest we've seen so far is now the second-largest we've seen so far

      replace value of SECOND_MAX_SO_FAR with value of MAX_SO_FAR
      replace value of MAX_SO_FAR with value of NUMBER
    otherwise, if NUMBER > SECOND_MAX_SO_FAR, then:
      // Comment: We know NUMBER is between MAX_SO_FAR and SEOND_MAX_SO_FAR, so NUMBER is now second-largest we've seen

      replace value of SECOND_MAX_SO_FAR with value of NUMBER
    end if
  end foreach

  hand back SECOND_MAX_SO_FAR sticky note
end define procedure

let PILE be [56, 10, 15, 109, 88]
call procedure find_second_largest_number with inputs: PILE // will give us 88

```

# Pseudocode: Find Largest Number

```text
define procedure find_largest_number:
  input: a pile of numbers, call it PILE

  look at first NUMBER in pile and write it on post-it note, call it MAX_SO_FAR

  foreach NUMBER in PILE, do the following:
    if NUMBER > MAX_SO_FAR, then:
      replace MAX_SO_FAR with NUMBER on post-it note
    end if
  end foreach

  hand back post-it note
end define procedure

let PILE be [10, 9, -2, 100, 17]
call procedure find_largest_number with inputs: PILE // will give us 100
```

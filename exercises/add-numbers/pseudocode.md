# Pseudocode: Add Numbers

```text
define procedure add_numbers:
  input: a pile of numbers, call it PILE

  write 0 on a sticky note, call it RUNNING_TOTAL

  foreach NUMBER in PILE, do the following:
    add NUMBER and RUNNING_TOTAL, overwrite RUNNING_TOTAL with this sum
  end foreach

  hand back RUNNING_TOTAL post-it note
end define procedure

let PILE be [10, 9, -2, 100, 0]

call procedure add_numbers with inputs: PILE  // will result in 117
```

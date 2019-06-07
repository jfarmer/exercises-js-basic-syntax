# Is In List

I'm going to hand you two things:

1. A pile of index cards with numbers written on one side
1. A sticky note with a specific number

Your job is to look through the pile of index cards, one at a time, and tell me whether the specific number is in the list.  If it is, hand back a sticky note with "YES" written on it.  If it isn't, hand back a sticky note with "NO" written on it.

## Contents <!-- omit in toc -->

- [Describe the Process](#describe-the-process)
- [Looking at Code](#looking-at-code)

## Describe the Process

Describe the process you carried out in English.  You should describe what to put on sticky notes and when, when to flip cards, what to do with the information you can see at each step, and when to return the sticky note with the answer.

You can use any terminology and symbols you want. You are free to give names to different pieces of information, e.g., the pile of index cards, the number you're currently looking at, the sticky note(s) you're writing on, etc.

## Looking at Code

Look first at [pseudocode.md](pseudocode.md) and convince yourself that this describe a process that will answer whether a specific number is in the pile.  Put your description with the pseudocode side by side.

Next, look at [syntax.md](syntax.md) to see the process. This contains actual implementations in multiple languages. Do you see how these programs represent the same procedure as your description and the pseudocode?

Put them side by side with the pseudocode and your description.  Take note of which pieces of syntax map to something you understand and which pieces don't.  Many of these pieces of syntax you can search for.

For example, you will probably notice that we don't use "YES" and "NO" in the actual code but instead use `true` and `false`. Many programming languages have special values to signifiy true and false.  Typically the special value for "true" is denoted by `true`, `True`, or `TRUE` in actual code (likewise with "false").

These values are called "booleans".  Virtually all programming languages support multiple types of values, not just numbers.  There are more besides booleans and numbers that you will learn about later.

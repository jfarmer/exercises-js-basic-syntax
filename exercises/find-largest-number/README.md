# Find The Largest Number

I'm going to hand you a pile of index cards with numbers written on them.  The numbers will be facing down so you can't see them

I want you to hand me a post-it note with the largest number in the pile written on it. To help you, you have a pile of sticky notes and a pencil.

## Table of Contents <!-- omit in toc -->

- [The Rules](#the-rules)
- [Describe the Process](#describe-the-process)
- [Looking at Code](#looking-at-code)

## The Rules

1. You can only look at one index card at a time by flipping them over, one after another.

   No spreading out the cards and inspecting them visually all at once!
1. You can use as many post-it notes as you want, but each post-it note can only have one number written on it.

   This is so you don't use a single post-it note to do complex calculations by writing very, very small.
1. You can re-use a post-it note by erasing the existing number and writing a new number on it.
1. You can add numbers, compare numbers, decide when to flip the next card, when to write something on a sticky note, and when to hand back the sticky note containing the answer.

If you feel like these rules prevent you from getting started, just do what makes sense to you. The goal is to constrain the way you interact and recall information in a way that's similar to a computer.

Your description of the process will end up being similar enough to actual code that you'll be able to make sense of the syntax once you see it.

## Describe the Process

After you've done this, write down an English description of the process.  Try to do describe it in as much detail as you can.

The rough structure is going to be:

- Steps you want to take before you start flipping cards (if anything)
- Steps you want to take between each flip of a card
- Steps you want to take after you've decided to stop flipping cards (if anything)
- Handing back a sticky note containing the answer

You can use any terminology and symbols you want. You are free to give names to different pieces of information, e.g., the pile of index cards, the number you're currently looking at, the sticky note(s) you're writing on, etc.

## Looking at Code

After you've written down a description, look as [pseudocode.md](pseudocode.md). Is this similar to your description of the procedure? Do you see how the pseudocode represents the same process?

Once you've convinced yourself that the pseudocode does describe a process that solves the problem, look at [syntax.md](syntax.md).  This contains actual implementations in multiple languages.  Do you see how these programs represent the same procedure as your description and the pseudocode?

Put them side by side with the pseudocode and your description.  Take note of which pieces of syntax map to something you understand and which pieces don't.  Many of these pieces of syntax you can search for.

For example, in the JavaScript code you might see `let` used in ways that don't make sense.  Because you've gone through this process you can now google "What does `let` mean in JavaScript?"

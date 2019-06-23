# Find Largest Even Number

Given a list of numbers, let's invent a process to find the largest even number from a list of numbers. A number is even if it is divisible by 2: -14, 0, 18, 22, 144 are all even.


## Contents <!-- omit in toc -->

- [Instructions](#instructions)
- [The Goal: Three Descriptions](#the-goal-three-descriptions)
- [First Description: Write One Yourself](#first-description-write-one-yourself)
- [Second Description: Pseudocode](#second-description-pseudocode)
- [Third Description: Actual Code](#third-description-actual-code)

## Instructions

Imagine that you have a pen/pencil and a pad of stick notes. A friend hands you the following:

- A stack of 20 cards with random numbers written on one side, all face down

Your friend then asks you to find the largest even number in the stack of index cards and hand them a sticky note with the answer written on it.

You have two tasks:

1. Invent a process that produces the result your friend wants
1. Write down a detailed description of your process that another person could use to reenact your process step by step

**Don't forget!**  Whatever process you invent should follow [the rules][the-rules]. The rules are there so that you think in mechanical terms rather than human terms.  Instructions like "Find the largest number" or "Tell me whether the number 0 is on one of the index cards" are good enough for a person, but they don't describe the steps you took to produce your answer.

## The Goal: Three Descriptions

Inventing a process that produces the answer your friend wants is only half the battle. The other half is writing code which tells a computer to carry out that process for you.

When [Neo from The Matrix](https://www.youtube.com/watch?v=3vAnuBtyEYE) looks at code he doesn't see a jumble of symbols, he sees whatever the code describes: a machine that adds numbers, plays songs, displays the current weather, or whatever else. We want you to become like Neo as quickly as possible.

To do this, we need to show you what the process you invented looks like when described with actual code. Let's get there step-by-step using three different flavors of description:

1. One description you write yourself using whatever syntax feels natural to you
1. Another description written in pseudocode, a human-friendly format structured similarly to an actual program without getting bogged down in the syntax of a specific programming language
1. A few actual programs written in different programming languages

After you do this 10-15 times, you'll be able to separate the pieces of code that map to something you undetstand from those that don't. You'll be able to search for tutorials about those parts you don't understand. Those tutorials won't feel like a collection of arbitrary facts to memorize, but instead help you write better, more descriptive programs.

## First Description: Write One Yourself

In English, write a clear, step-by-step description of the process you just invented.  What does "clear" and "step-by-step" mean? To help you write a good description, keep the following scenario in mind. Or, better yet, actually carry it out with a friend!

Imagine going to a friend who has never seen this problem before. You give them a pad of sticky notes, a pen, and your description of the process. Finally, you hand them a stack of numbered index cards and ask them to carry out the process described.

You should feel confident that your friend could carry out the process with little-to-no explanation. They shouldn't even have to "know" that their goal is to find the largest number.

At a minimum, the following should be clear to your friend as they follow your instructions:

- What to do before they begin flipping cards (if anything)
- What to write on the sticky notes and when
- When to flip a card
- Between each flip, what to do with the information they can see
- When to stop flipping
- What to do after they've finished flipping cards (if anything)
- When to return the sticky note containing the answer

## Second Description: Pseudocode

We've described a process for solving this problem in pseudocode, here: [pseudocode.md](pseudocode.md).

Remember, pseudocode is an informal, high-level description of a computer program. It's meant to communicate the structure of a program to another programmer without getting bogged down in the syntax of a specific language.  It's more structured than plain English, but less structured than actual, executable code.

Your description and the pseudocode are descriptions of processes that produce the same result. The steps they describe might not be identical since there's more than one way to calculate the result.

Put the two side-by-side and convince yourself that they produce the same result.  What aspects of the pseudocode make sense to you?  What parts are confusing? Do they describe the same sequence of steps?  If not, where do they differ?

## Third Description: Actual Code

Next, look at [syntax.md](syntax.md). This contains actual implementations in multiple languages. Do you see how these programs represent the same procedure as your description and the pseudocode?

Put them side by side with the pseudocode and your description.  Take note of which pieces of syntax map to something you understand and which pieces don't.  Many of these pieces of syntax you can search for.

How to the languages themselves differ? How do they represent things like the stack of index cards or writing a number on a sticky note?

# Index Card Exercises

## Table of Contents <!-- omit in toc -->

- [Introduction](#Introduction)
- [The Exercises](#The-Exercises)
- [Practicing Programming: Modeling And Syntax](#Practicing-Programming-Modeling-And-Syntax)
- [Exercise Goals](#Exercise-Goals)
- [Materials](#Materials)
- [The Rules](#The-Rules)
  - [Why These Rules](#Why-These-Rules)

## Introduction

One reason learning to code is difficult is because everything about it feels unfamiliar. To a beginner, code looks like a magical incantation. "How does this pile of `if`'s and `for`'s and `function`'s make the computer do what I want?"

When learning your first foreign language, you at least have a native language you can use as a reference. When learning your first programming language, what could you possibly use as a reference? These exercises are meant to give you that reference.

We're going to give you some very simple problems and ask you to solve them using everyday physical materials like index cards, sticky notes, and pens. These problems will be things like "Find the largest number in this list of numbers" or "Tell me how many numbers in this list of numbers are greater than 10."

The problems are meant to be simple so that you can practice the harder, less familiar part: describing step-by-step the process you used to to solve each problem. After comparing your description to code that implements the same process, you'll find that the code looks less like a magical incantation and more like a sentence in a foreign language.

## The Exercises

Please read the other sections before diving into these exercises.

1. [Find the largest number](exercises/find-largest-number)
1. [Find the smallest number](exercises/find-smallest-number)
1. [Is in list](exercises/is-in-list)
1. [Add numbers](exercises/add-numbers)
1. [Find max even number](exercises/find-largest-even-number)
1. [Find max odd number](exercises/find-largest-odd-number)
1. [Find second-largest number](exercises/find-second-largest-number)
1. [Count specific number](exercises/count-number)
1. [Count positive numbers](exercises/count-positive-numbers)
1. [Count negative numbers](exercises/count-negative-numbers)
1. [Count larger than 10](exercises/count-larger-than-ten)
1. [Count smaller than 10](exercises/count-smaller-than-ten)
1. [Count larger than X](exercises/count-larger-than)
1. [Count smaller than Y](exercises/count-smaller-than)

## Practicing Programming: Modeling And Syntax

> 🚨**Key Takeaway**🚨
>
> Novices focus too much on syntax and not enough on modeling. This is understandable since syntax is new, foreign, and unique to programming.  Most curriculum reinforces this by organizing everything by syntax.

What is "modeling"? Remember, computers are dumb but fast. They can perform billions of operations per second, but those operations are so specific and so mechanical that you'd almost never think to spell them out when talking to another human.

This doesn't mean computers are limited. We can compose infinitely many songs with finitely many notes and we can compose infinitely many programs with finitely many operations.

Programming is the art/science of getting computers to solve problems on our behalf. The two fundamental skills are:

1. **Modeling**

   Understanding a problem to the point where you can solve it in terms of these super-specific operations. The understanding we have is a kind of picture of the problem in our heads, called a [mental model][wiki-mental-model].

1. **Coding + Syntax**

   Translating your mental model of the problem into code a computer can execute

If there's a "fundamental theorem of learning to program" it's this:

- If you have a clear mental model and sufficient knowledge of syntax, you'll know exactly what code to write.

Equivalently:

- If you don't know what code to write then your mental model isn't as clear as you think it is or you don't have sufficient knowledge of syntax (likely a combination of both).

So, remember: novices focus too much on syntax and not enough on modeling. This is understandable since syntax is new, foreign, and unique to programming. Most curriculum reinforces this by organizing everything by syntax.


## Exercise Goals

Introducing one tiny piece of syntax after another makes it difficult to practice the full scope of what a programmer does. "How does this tie into anything else? How am I going to remember all of this?", you might ask yourself.

These exercises are here to get you playing the whole game without overwhelming you with syntax. We're going to get you solving problems as a computer would and then introduce you to the actual syntax the computer requires.

Specifically, these exercises are designed to:

1. Introduce you to the ~5 building blocks that serve as the basis of every computer program you'll ever write
1. Get you modeling and solving problems you already know how to solve using those building blocks
1. Introduce you to the syntax of JavaScript by translating your solutions into working JavaScript code

## Materials

Every exercise requires the following materials:

- A stack of ~20 [index cards][wiki-index-cards] with random numbers printed on on side, ranging from -100 to 100.
- [Sticky notes][wiki-sticky-notes] or small pieces of scrap paper
- A pen or pencil

We will not be writing any code.

## The Rules

You have a stack of sticky notes and a pen. At the start of each exercise, you will...

1. Receive a stack of index cards with numbers printed on one side
1. Be asked a question about the numbers in the stack

Using the sticky notes as scratch paper (and *only* the sticky notes) your job is to answer the question, write down the answer on a sticky note, and return it.

There are three rules:

1. You can flip over and look at only one index card at a time.

   No spreading them out on the floor and relying on your eyesight to answer the question, for example.
1. Each sticky note can only have a *single* word or number written on it.
1. To write on a sticky note, you can either
   - Write a new word or number on a blank sticky note
   - Replace a word or number on a non-blank sticky note with something else

### Why These Rules

These rules are designed to prevent you from using human capabilities that a computer simply doesn't have.

For example, if you were handed a stack of index cards with numbers and asked to find the largest number, you might spread them out on the floor with the numbers facing up.  You'd then scan the cards and pick out the largest number based on heuristics like

- Ignore negative numbers
- Look for numbers with many digits
- Look for numbers that start with 9 or 8

Using those heuristics, you might find a likely candidate for "largest number" and then quickly sanity check by scanning every card to see if there's a larger one.

That's too smart for a computer!

[wiki-mental-model]: https://en.wikipedia.org/wiki/Mental_model
[wiki-index-cards]: https://en.wikipedia.org/wiki/Index_card
[wiki-sticky-notes]: https://en.wikipedia.org/wiki/Post-it_Note

---
title: "JavaScript musings"
date: "2024-05-01"
slug: "callstack-and-queues"
---

- Recently I've found myself diving a little bit deeper into JavaScript in an attempt to learn what is _actually_ happening during run time.

&nbsp;

## JS Fundamentals

- Javascript is a single thread language, which, simply put, means it can only execute one line of code at a time. Problems arise here when you're calling that sketchy public API that takes 500ms to return anything. You don't want your single thread stuck waiting for something to be returned do you? That's where async comes in. We can call that sketchy API but our single thread can continue to execute code while we are waiting for a response. But we need a system to manage all this.

&nbsp;

## Call Stack

- When JavaScript is executing it initally calls the global context, then suppose your global context encounters this line of code: `imALittleTeapot()`. This would add the `imALittleTeapot` function onto the call stack, when `imALittleTeapot` is completed it's removed from the call stack.

<!-- ![Stack](/stack.png) -->

&nbsp;

## Micro Task Queue

- So what happens when the call stack is empty? The event loop visits the micro task queue, which is where, among other things, Promises are patiently waiting.

&nbsp;

## Task Queue

- So what happens when the call stack _and_ micro task queue is empty? The event loop visits the task queue, which is where, as Will Sentance put it in his front end master's course, your _facade_ function's call backs will be waiting to join the call stack.

&nbsp;

One of my coworkers asked me if I actually think of this while coding, the answer is not really, but it is important to understand nevertheless.

# state

## What is state?

Basically, the state is a variable.

A variable that can be passed between renders.

## Why use state?

There are several cases the component can be [rerendered](./render-and-re-render.md).

Rerendering is simply calling a function, and when the function is called, in JavaScript, it removes generated local variables after execution, which will loose the data. So, the state is used to keep the data of the function, which in here, is the component.
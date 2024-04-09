# Closure

Hey future me, if you came back cuz you forgot what a closure is, just read the article below.
But I'm sure you won't forget it.

Closure is a `reference` of a function to its `lexical environment`, which simply means the context that the function can access.

The local variables and everything inside a function get removed after execution is done.

But since that data is stored in the closure, we can use it if we store the function definition in a variable.

```js
function outer() { // 1. variable outer is created, store a function definition
  // 3. local variable outerVar is created, store a string
  let outerVar = 'I am from outer function';
  function inner() {
    // 8. look for outerVar on local execution context, miss
    // 9. look for outerVar on closure, found it, value is string, execute console log with string arg
    console.log(outerVar);
  }
  return inner; // 5. return the function definition of inner, remove local variables outerVar and inner
}

// 2. variable innerFunction is created, look for variable outer, found it, execute it since `()`.
// 6. the function definition of inner and its closure is stored in innerFunction
let innerFunction = outer();
innerFunction(); // 7. execute innerFunction
```

Got it? Now read the article below.

## References

- [I never understood JavaScript closures - Olivier De Meulder](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

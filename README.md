# Yl ("while")

> :fire: This is a proof-of-concept library and should **not** be used in production!
Because this lib uses something like recursion, it cannot handle very large sets
and can easily exceed the stack limit in such cases.

Demonstrates using the Y-combinator to create a function with `while`-like behavior.

> **Read more about the Y-combinator in [The Mysterious Y-combinator](https://medium.com/@therealklanni/the-mysterious-y-combinator-e824bebf8c96)**

## Use

Pass a function in that takes the current iteration (`Number`) as its argument.
Return `false` to exit the function early (before the iterations are complete).
The value you return from the final iteration will be the exit value.
Also supports currying.

Pass a number of times to loop as the second argument. Loop until `false` is returned by using a negative number.

```js
import Yl from 'yl-while'

// generate a random number over 50
let num = Yl(i => {
  let n = Math.floor(Math.random() * 100)
  return n > 50 ? n : false
}, -1)
```

## License

MIT © Kevin Lanni

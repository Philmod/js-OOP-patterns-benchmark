# js-OOP-patterns-benchmark

  Benchmark of three OOP patterns in javascript

## Use

```js
node index.js
```

## Results
```js
Classical x 707,399 ops/sec +-37.24% (44 runs sampled)
Prototypal x 476,373 ops/sec +-71.03% (38 runs sampled)
Factory x 175,449 ops/sec +-90.56% (14 runs sampled)
```
 - The classical pattern is by far the fatest, and should be the better solution in terms of memory usage.
 - Pure prototypal is the simplest and easiest to understand. Objects simply inherit from other objects.  This is also very powerful because of it's simplicity alone.
 - The factory pattern is the slowest, each instance has it's own copy of all the functions.  On the plus side, closure factories never need to use "this", and private data is easily hidden inside the closure.

## Author

Philmod &lt;philippe.modard@gmail.com&gt;
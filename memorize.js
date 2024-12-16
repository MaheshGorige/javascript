function memoize(fn) {
    const cache = {}; // Cache object
  
    return function (...args) {
      const key = JSON.stringify(args); // Use arguments as cache key
      if (cache[key]) {
        console.log("Fetching from cache:", key);
        return cache[key];
      }
      console.log("Calculating result:", key);
      const result = fn(...args); // Compute result
      cache[key] = result; // Store in cache
      return result;
    };
  }
  
  // Example: Fibonacci function
  function slowFibonacci(n) {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
  }
  
  const memoizedFibonacci = memoize(slowFibonacci);
  
  console.log(memoizedFibonacci(10)); // Calculated
  console.log(memoizedFibonacci(10)); // Cached
  
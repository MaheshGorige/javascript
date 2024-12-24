Function.prototype.callPolyfill = function(context, ...args){
    context.fn = this;
    return context.fn(...args)
  }
  
  fn = function add(b) {
    return this.a + b;
  }
  args = [{"a": 5}, 7]
  
  // Output: 12
  // Explanation:
  console.log(fn.callPolyfill({"a": 5}, 7)) // 12
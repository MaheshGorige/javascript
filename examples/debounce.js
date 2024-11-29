function debounce(func, delay){
    let timeoutId;

    return function(...args){
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

const debounceHandler =  debounce((props) => {
    console.log("hello" + " " + props)
}, 2000)
console.log(debounceHandler("world"))
setTimeout(() => {
   console.log(debounceHandler("world delay")) 
}, 1000)






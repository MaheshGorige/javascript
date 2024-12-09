var array = [2, 3, 5]

function double(){
    const results = []
    for(var i = 0; i< array.length; i++){
        const rem = array.filter(val => val !== array[i])
        var total = rem.reduce((t, v) => t * v, 1)
        results.push(total)
    }

    return results;
}

// console.log(double())

 const res = [];

function flat(array){
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            flat(array[i])
        } else {
           res.push(array[i]) 
        }
    }

    return res;
}

// console.log(flat([1, 2, [3, 4, [5]]]))




Array.prototype.myFilter = function(fn){
    const resp = []
    for(var i = 0; i < this.length; i++){
        if(fn(this[i], i)){
            resp.push(this[i]) 
        }
    }

    return resp;
}

// console.log([1, 2, 3, 4].myFilter(v => v > 2));


Array.prototype.myMap = function(callback){
    let newArray = []
    for(i = 0; i <= this.length -1; i++){
        newArray.push(callback(this[i], i))
    }

    return newArray;
}

console.log([1, 2, 3, 4].myMap(v => v));
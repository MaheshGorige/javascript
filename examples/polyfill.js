Array.prototype.forEach((callback) => {
    for(i = 0; i <= this.length -1; i++){
        return callback(this[i], i)
    }
})



Array.prototype.map((callback) => {
    let newArray = []
    for(i = 0; i <= this.length -1; i++){
        newArray.push(callback(this[i], i))
    }

    return newArray;
})


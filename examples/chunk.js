function chunkArray(array, size){
    const chunks = [];
    for(let i =0; i < array.length; i += size){
        chunks.push(array.slice(i, i + size)) 
    }

    return chunks
}

const ary = [1, 2, 3, 4, 5, 6, 7]
console.log(chunkArray(ary, 2))

console.log(ary.slice(0, 3))
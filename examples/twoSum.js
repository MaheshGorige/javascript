function sum(ary, target){
    for(i = 0; i < ary.length; i++){
        for(j = i + 1; j < ary.length; j++){
            if(ary[i] + ary[j] == target){
                return [i, j]
            }
        }
    }

    return []
}

function sum(ary, target){
    let map = new Map();

    for(let i = 0; i < ary.length; i++){
        let com = target -  ary[i];
        if(map.has(com)){
            return [map.get(com), i]
        }

        map.set(ary[i], i)
    }
}

console.log(sum([2, 7, 11, 15], 13))
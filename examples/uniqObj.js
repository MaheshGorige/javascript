const arry = [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: 
    "111111"}]
    
    const u = arry.reduce((uniq, current) => {
        if(uniq.some(value => value.name === current.name)){
            return uniq;
        }
    
        return [...uniq, current]
    }, [])
    
    // console.log(u)
    
    
    function getUnique(){
        const uniq = [];
    
        for(let i = 0; i <= arry.length - 1; i++){
            console.log(arry[i])
            if(uniq.some(obj => obj.name === arry[i].name)){
                // uniq.push(arry[i])
            } else {
                 uniq.push(arry[i])
            }
        }
    
        return uniq;
    }
    
    console.log(".", getUnique())
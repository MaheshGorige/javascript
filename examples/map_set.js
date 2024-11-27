const map = new Map()

const setMap = new Set();

map.set("age", 20),
map.set("name", "mahesh")
map.set("name", "mahesh")


setMap.add(20)
setMap.add("mahesh")
setMap.add("mahesh")


// console.log("map..",map)
console.log("set...", setMap)

for(let [key, value ] of map){
    console.log(key, value)
}


for(let key of setMap.entries()){ // repeat key and value
    console.log(key, value)
}
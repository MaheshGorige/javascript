// console.log(hey1())

const object = {
    x: 0,
    getX: function(){
        console.log(this.x)
    }
}

const object1 = {
    x: 0,
    getX: () => {
        console.log(this.x)
    }
}

function hey() {
    var x = 0;
    console.log("arguments", arguments)
}

var car1 = "nexon"
var x = 1;

const hey1 = (args) =>  {
    let y = 1
    console.log("args", args)
}

// console.log(hey("fff"))
console.log(object1.getX())
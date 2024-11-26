const obj1 = {
    firstName: "Mahesh",
    lastName: "Gorige",
} 

const obj2 = {
    firstName: "Raj",
    LastName: "G",
}

function getUser(age){
    console.log(this.firstName + " " + this.lastName + " " + age)
}

// getUser(obj1);
// getUser.call(obj1, 10);
getUser.apply(obj1, [20, 30, 45]);
const bind = getUser.bind(obj1, [20, 30, 22]);
// bind()
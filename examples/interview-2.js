var arry = [1,2,4,6,5,8,7]

function findMissingNumber() {
  var n = arry.length + 1;
  var expected = n * (n + 1) / 2
  
  var actual = arry.reduce((t, c) => t + c, 0)
  
  
  console.log(expected - actual)
}

findMissingNumber();



const str = "I am a programmer my name is mahesh";


function getSmallestWords(){
  const strAry = str.split(" ");
  
  var smallestLength = Math.min(...strAry.map(v => v.length));
  
  var result = strAry.filter(v => v.length === smallestLength)
  
  console.log(result);
}

getSmallestWords()
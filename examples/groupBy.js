const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  
  // const grp = Object.groupBy(inventory, ({ type}) => type)
  
  // console.log(grp)
  
  function group(){
      const obj = {}
  
      for(let i = 0; i < inventory.length; i++){
          // const type = 
          if(obj[inventory[i].type] === undefined){
              obj[inventory[i].type] = [inventory[i]]
          } else {
              obj[inventory[i].type] = [...obj[inventory[i].type], inventory[i]]
          }
      }
  
      return obj;
  }
  
  console.log("group", group())
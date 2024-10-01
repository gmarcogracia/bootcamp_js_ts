const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
  if (!arg || typeof(arg)!="object"){
    //Devuelve arg si es null o no es objeto.
    return arg
  }
  if (Array.isArray(arg)){
    var retornable=[]
    for (i =0; i<arg.length;i++){
      if(arg[i]){
        retornable.push(arg[i])

      }

    }
    return retornable;
  }

  var myObject = {}
  for (const key in arg) {
    if(arg[key]){
      myObject[key]=arg[key]
    }
  
  }
  return myObject;

};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}

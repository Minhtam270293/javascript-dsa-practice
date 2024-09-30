function flattern(oldArr){
  let newArr = []
  	for(let i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flattern(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

console.log(flattern([0,1,[2,3,4]]));
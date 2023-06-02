// Question link
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller


function steamrollArray(arr) {
  // solution 1 : recursion
  
  // let flat=[];
  // arr.forEach((item)=>{
  //   if(Object.prototype.toString.call(item) === '[object Array]'){
  //     flat.push(...steamrollArray(item));
  //   }else{
  //     flat.push(item);
  //   }
  // });
  // return flat;

// solution 2 : loop

  let flat = [];
  let stack = [...arr];
  while(stack.length){
    let next = stack.pop();
    if(Object.prototype.toString.call(next) === '[object Array]'){
      stack.push(...next);
    }else{
      flat.unshift(next);
    }
  }
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Question Link
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether(...args) {
  if(args.length<2){
    if(typeof args[0] != 'number'){
      return undefined;
    }
    return ((x,y=args[0])=>(typeof x === typeof y)?x+y:undefined);
  }
  return (typeof args[0]=== typeof args[1])?(args[0]+args[1]):undefined;
}

console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

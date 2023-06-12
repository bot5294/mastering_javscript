// Question Link
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

// solution

let key = [
    "A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];
  function rot13(str) {
    let ans="";
    for(let s of str){
      let index = key.indexOf(s);
      if(index>=0){
        let rindex = (index+13)%26;
        ans += key[rindex];
      }else{
        ans+=s;
      }
  
    }
    return ans;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
// question link
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

//solution

function palindrome(str) {
  str = str.toLowerCase().trim();
  let regex = /[^A-Za-z0-9]+/gm;
  str = str.replace(regex,"");
  console.log("str => ",str);
  console.log("regex => ",regex);
  let mid,lstr,rstr;
  if(str.length%2==0){
    mid = parseInt((str.length)/2);
    lstr = str.slice(0,mid);
    rstr = str.slice(mid);
  }else{
    mid = parseInt((str.length)/2)+1;
    lstr = str.slice(0,mid-1);
    rstr = str.slice(mid);
  }
    console.log("lstr => ",lstr);
  console.log("rstr => ",rstr);
  if(lstr==[...rstr].reverse().join("")){
    return true;
  }
  return false;
}

palindrome("_eye");
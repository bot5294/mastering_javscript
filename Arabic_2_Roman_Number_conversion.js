// Question link
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter


// Solution

function convertToRoman(num) {
    let Anumbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let Rnumbers = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let ans="";
    for(let i=0;i<Anumbers.length;i++){
      while(num>=Anumbers[i]){
        ans+=Rnumbers[i];
        num-=Anumbers[i];
      }
    }
     return ans;
    }
    
    convertToRoman(36);
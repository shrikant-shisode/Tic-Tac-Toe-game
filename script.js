let marks=[85,97,44,37,76,60];
let sum=0;

for(let mark of marks){
 sum+=mark;

}

let avg= sum/marks.length;
console.log(`average marks=${avg}`);
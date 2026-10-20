let word="I love javascript"
let current=""
let reverse=""

for(let i=0;i<word.length;i++){
    if (word[i]!=" ") {
        current+=word[i]
    }
    else{
        reverse= current + " "+reverse
        current=""
    }
}
reverse= current + " "+reverse
console.log(reverse);

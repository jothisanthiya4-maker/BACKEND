let word="banana"
let duplicate=""

for(let i=0;i<word.length;i++){
    let count=0
    let exist=true
    for(let j=0;j<duplicate.length;j++){
        if(word[i]==duplicate[j]){
            exist=false
        }
    }
if(exist){
    for(let j=0;j<word.length;j++){
        if(word[i]==word[j]){
            count++
        }
    }
    console.log(`${word[i]} : ${count}`);
    duplicate+=word[i]
}
}
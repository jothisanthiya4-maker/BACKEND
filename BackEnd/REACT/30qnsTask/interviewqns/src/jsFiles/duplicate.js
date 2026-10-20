let array=[1, 2, 2, 3, 4, 4, 5]
let result=[]
for(let i=0;i<array.length;i++){
    let exist = true;
    for(let j=0;j<result.length;j++){
        if(array[i]==result[j]){
            exist=false
        }
    }
    if(exist){
        result[result.length]=array[i]
    }
}
console.log(result);

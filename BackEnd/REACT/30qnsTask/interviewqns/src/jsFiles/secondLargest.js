// second largest number in the array 

let array=[10, 45, 20, 45, 30]
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

for(let i=0;i<result.length-1;i++){
    for(let j=i+1;j<result.length;j++){
        if(result[i]>result[j]){
            let temp=result[i]
            result[i]=result[j]
            result[j]=temp
        }
    }
}
console.log(result);
console.log("second largest number in the array is :",result[result.length-2]);


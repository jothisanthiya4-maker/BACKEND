let arr=[1, [2, 3], [4, [5, 6]]]
let result=[]

for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])=="number"){
        result.push(arr[i])
    }
    if(typeof(arr[i])=="object"){
        for(let j=0;j<arr[i].length;j++){
            result.push(arr[i][j])
        }
    }
}
console.log(result);

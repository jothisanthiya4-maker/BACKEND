const datas = [{name:"react",salary:20467,subject:"node",department:"IT"},
    {name:"react",salary:30467,subject:"js",department:"IT"},
    {name:"react",salary:60467,subject:"HTML",department:"IT"},
    {name:"react",salary:100467,subject:"CSS",department:"IT"}
]

let sum=0

for(let i=0;i<datas.length;i++){
    sum= sum+datas[i].salary
}
console.log("average salary :",sum/datas.length);


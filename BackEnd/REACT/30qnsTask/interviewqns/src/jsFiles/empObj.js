let emp=[{name:"jothi",salary:20000},
    {name:"divya",salary:30000},
    {name:"dilaka",salary:40000},
    {name:"faitha",salary:10000}]

let total=0
for(let i=0;i<emp.length;i++){
    if(emp[i].salary>=30000){
        console.log(`${emp[i].name} : ${emp[i].salary}`);
        total+=emp[i].salary
    }
    
}
console.log(`Total salary : ${total}`);

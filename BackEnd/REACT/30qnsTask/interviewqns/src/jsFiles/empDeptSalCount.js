let employees = [
    { name: "Jothi", department: "CS", salary: 20000 },
    { name: "Divya", department: "DS", salary: 25000 },
    { name: "Faitha", department: "CS", salary: 30000 },
    { name: "Dilaka", department: "DS", salary: 15000 }
]

let CS=0
let DS=0

for(let i=0;i<employees.length;i++){
    if(employees[i].department=="CS"){
        CS+=employees[i].salary
    }
    if(employees[i].department=="DS"){
        DS+=employees[i].salary
    }
}
console.log(`CS Department total salary is : ${CS}
DS Department total salary is : ${DS}`);

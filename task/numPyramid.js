// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let row = ""

for(let a=1;a<=5;a++){
    for(let b=1;b<=a;b++){
        row+=b
    }
    console.log(row);
    row=""
}
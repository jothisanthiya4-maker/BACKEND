let cart = [
    { name: "Mouse", price: 1000, quantity: 3, stock:3  },
    { name: "Keyboard", price: 2000, quantity: 2, stock: 4 }
]

let subtotal=0


for(let i=0;i<cart.length;i++){
    if(cart[i].quantity<1){
        console.log("provide correct quantity");
        break
    }
    else if(cart[i].stock<cart[i].quantity){
        console.log("stock is less");
        break
    }
    else{
        subtotal+= (cart[i].price * cart[i].quantity) 
    }
}
if(subtotal>5000){

    let discount=1
    discount= subtotal * 10/100
    console.log("subtotal is : ",subtotal);
    console.log("discount is :",discount);
    console.log("Total :",subtotal-discount);
}
else{
    console.log("subtotal is :", subtotal);
    
}
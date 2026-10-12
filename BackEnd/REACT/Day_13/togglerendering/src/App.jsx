import { useState } from "react";


const App = () => {

  const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 15000, inStock: true }
]);

  const handleclick=(id)=>{
    setProducts(products.map((e)=>e.id==id?{...e,inStock:!e.inStock}:e))
    
    
  }


  return (

    <>
    
    <div>
      {products.map((e)=>(
        <div key={e.id}>
            <h2>Name : {e.name} </h2>
            <h3>Price :{e.price} </h3>
            <h3>Availability : {e.inStock?"in stock":"out of stock"} </h3>
            <button onClick={()=>handleclick(e.id)}>click button</button>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default App

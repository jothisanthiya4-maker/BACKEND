import { useParams } from "react-router-dom"


const ProductDetails = () => {

const userid = useParams()

   const cardsData = [
  {
    id: 1,
    title: "Forest Hiking Guide",
    description: "Discover the best trails and beginner tips for a safe weekend hike.",
    image: "https://picsum.photos",
    category: "Adventure",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "Modern Coffee Brewing",
    description: "Learn how to pour-over like a professional barista at home.",
    image: "https://picsum.photos",
    category: "Lifestyle",
    author: "Alex Smith"
  },
  {
    id: 3,
    title: "Minimalist Desk Setup",
    description: "Clean aesthetic ideas to boost your daily productivity and focus.",
    image: "https://picsum.photos",
    category: "Design",
    author: "Chris Lee"
  }
];

console.log(userid);


const findspro = cardsData.find((e)=>e.id==userid.id)

console.log(findspro);



  return (
    <>
    <div>
        <h1>{findspro.title}</h1>
        <img src={findspro.image} alt="" />
        
    </div>
    </>
  )
}

export default ProductDetails

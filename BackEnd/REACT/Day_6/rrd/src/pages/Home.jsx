import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar"

const Home = () => {

const navigate = useNavigate()

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


const handlemove = (userid)=>{

  navigate(`/productdeatils/${userid}`)
  
}

  return (
    <>
    <div className="">
        <div className="  bg-gray-500 flex justify-center items-center h-200 ">
        <div className="flex gap-5 p-5">
            {cardsData.map((e)=>(
                <div key={e.id} className="flex flex-col gap-15 bg-gray-200 h-120 rounded-2xl items-center p-10">
                    <h1>Title : {e.title}</h1>
                    <h4>Description :{e.description}</h4>
                    <p>Category :{e.category}</p>
                    <p>Author :{e.author}</p>
                    <button onClick={()=>handlemove(e.id)}>View Details</button>
                </div>
            ))}
        </div>
    </div>
    </div>
    
      
    </>
  )
}

export default Home

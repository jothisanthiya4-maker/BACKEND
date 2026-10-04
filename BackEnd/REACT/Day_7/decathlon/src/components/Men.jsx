import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"

const Men = () => {
  return (
    <>
    <div className="flex gap-4 p-10 h-150 overflow-y-scroll">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                
            </div></>
  )
}

export default Men

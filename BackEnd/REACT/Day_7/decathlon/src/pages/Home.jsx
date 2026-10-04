import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"
import five from "../assets/images/5.jpg"
import six from "../assets/images/6.jpg"
import seven from "../assets/images/7.jpg"
import eight from "../assets/images/8.jpg"
import nine from "../assets/images/9.jpg"
import ten from "../assets/images/10.jpg"
import eleven from "../assets/images/11.jpg"
import twelve from "../assets/images/12.jpg"


const Home = () => {
  return (
    <>
        <div className="flex gap-4 p-10 h-150 overflow-y-scroll">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
            <img src={nine} alt="" />
            <img src={ten} alt="" />
            <img src={eleven} alt="" />
            <img src={twelve} alt="" />
        </div>
    </>
  )
}

export default Home

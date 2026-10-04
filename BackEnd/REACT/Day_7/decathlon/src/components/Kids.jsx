import nine from "../assets/images/9.jpg"
import ten from "../assets/images/10.jpg"
import eleven from "../assets/images/11.jpg"
import twelve from "../assets/images/12.jpg"

const Kids = () => {
  return (
    <>
            <div className="flex gap-4 p-10 h-150 overflow-y-scroll">
                
                <img src={nine} alt="" />
                <img src={ten} alt="" />
                <img src={eleven} alt="" />
                <img src={twelve} alt="" />
            </div>
        </>
  )
}

export default Kids

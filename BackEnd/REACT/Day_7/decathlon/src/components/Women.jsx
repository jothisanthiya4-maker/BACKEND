import five from "../assets/images/5.jpg"
import six from "../assets/images/6.jpg"
import seven from "../assets/images/7.jpg"
import eight from "../assets/images/8.jpg"

const Women = () => {
  return (
    <>
            <div className="flex gap-4 p-10 h-150 overflow-y-scroll">
                
                <img src={five} alt="" />
                <img src={six} alt="" />
                <img src={seven} alt="" />
                <img src={eight} alt="" />
                
            </div>
        </>
  )
}

export default Women

import img from "../assets/images/404.jpg"
const NotFound = () => {
  return (
    <div className="w-100 h-screen">
        <img src={img} className="w-full h-full" alt="not found image" />
        

    </div>
  )
}

export default NotFound
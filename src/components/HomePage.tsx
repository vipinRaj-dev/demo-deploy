import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate()
  return (
    <div>HomePage
        <button onClick={()=>navigate("/vite")}>Vite</button>
    </div>
  )
}

export default HomePage
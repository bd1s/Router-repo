import { useNavigate } from "react-router-dom"
export const OrderSummary =()=>{
    const navigate=useNavigate()
    return (
    <div className="home">
        {/*<img src="https://iconape.com/wp-content/png_logo_vector/react-router.png"
          alt="Logo React Router"
          className="centered-image"/>*/}
        
        <button className="button-home" onClick={() => navigate(-1)}>Back Home </button>
        <div className="center-text">
        <p>Here You Are ! </p>
        </div>
        </div>
        
    
    
    )
};
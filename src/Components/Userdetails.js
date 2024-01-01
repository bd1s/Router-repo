import { useParams } from "react-router-dom"
export const Userdetails =()=>{
    const params=useParams()
    const userid=params.userId
    return(
        <>
            <div> user {userid} details </div>
 
        </>
    )
}
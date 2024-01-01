import { Outlet,useSearchParams } from "react-router-dom"
export const Users =()=>{
    const [searchparams,setsearchparams]=useSearchParams()
    const showactive=searchparams.get('filter')==='active'
    return(
    <>
    <h1>List of users</h1> 
    <p> user 1 </p>
    <p> user 2 </p>
    <p> user 3 </p>
    <Outlet/>
    <div>
    <button onClick={()=>setsearchparams({filter:'active'})} >Active users</button>
    <button onClick={()=>setsearchparams({})} >Reset</button>
    </div>
    <div>
        {showactive? (<p>show active users</p>):(<p>show all users</p>)}
    </div>
    </>
    
    )

}
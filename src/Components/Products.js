import { NavLink,Outlet } from "react-router-dom"

export const Products=()=>{
    return(
      <>
        <nav className="nav2">
          <NavLink to="featured">featured</NavLink>
          <NavLink to="new">new products</NavLink>
        </nav>
        
        <Outlet/>
      </>
        
        
    );
}
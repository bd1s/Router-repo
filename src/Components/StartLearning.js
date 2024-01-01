import { NavLink } from "react-router-dom"

export  const StartLearning=()=>{
    return(
      <>
        <nav className="opt">
          <NavLink to="/bconcepts">Concepts de base</NavLink>
          <NavLink to="/bconfiguration">Configuration de base</NavLink>
          <NavLink to="/adnavigation">Navigation avancee</NavLink>
        </nav>
      </>
        
        
    );
}
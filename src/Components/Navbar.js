import { NavLink } from "react-router-dom"

export const Navbar =()=>{
    const navLinkStyles =({isActive})=>{
        return{
            fontWeight: isActive ? 'bolder':'normal',
            /*color: isActive ?'white':'black',*/
            fontSize: isActive ? '150%' : '110%',
            textdecoration : isActive ? 'none':'normal'
           }
    }
    return(
        <nav className="primaryNav">
            <NavLink style={navLinkStyles } to="/">Accueil</NavLink>
            <NavLink style={navLinkStyles } to="/doc">Documentation</NavLink>
            <NavLink style={navLinkStyles } to="/exo">Exercices</NavLink>
            <NavLink style={navLinkStyles } to="/realisateurs">Realisateurs</NavLink>
        </nav>
    )

}





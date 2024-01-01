import React from "react";

import { useNavigate } from "react-router-dom";

export const Realisateurs =()=>{
    const navigate = useNavigate();

    return (
<>
    <h1> Realisateurs </h1>
    <button onClick={() => navigate("/")}>Accueil</button>
    
</>

    )
    
}
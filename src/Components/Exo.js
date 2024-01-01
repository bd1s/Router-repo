import React from "react";

import { useNavigate } from "react-router-dom";

export const Exo =()=>{
    const navigate = useNavigate();

    return (
<>
    <h1> Exercices </h1>
    <button onClick={() => navigate("/doc")}>Consulter la documentation</button>
    
</>

    )
    
}
import React from "react";

import { useNavigate } from "react-router-dom";

export const Documentation =()=>{
    const navigate = useNavigate();

    return (
<>
    <h1> Documentation </h1>
    <button onClick={() => navigate("/exo")}>Exercices</button>
    
</>

    )
    
}
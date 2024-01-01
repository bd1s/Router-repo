import React from "react";

import { useNavigate } from "react-router-dom";
export const Adnavigation =()=>{
    const navigate = useNavigate();

    return (
<>
<div>
<h1> Navigation avancee </h1>
<h2>Définitions avancées d'itinéraires</h2>
<p>là que React Router devient vraiment intéressant, 
on commence a definir des routes  plus complexes, 
plus faciles à lire et  beaucoup plus fonctionnels.
Cela peut être fait grâce à cinq techniques principales.
</p>
</div>
    
    <button onClick={() => navigate("/exo")}>
                Suivant</button>
    
</>

    )
    
}
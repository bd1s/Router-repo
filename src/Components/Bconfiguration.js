import React from "react";

import { useNavigate } from "react-router-dom";
export const Bconfiguration =()=>{
    const navigate = useNavigate();

    return (
<>
    <h1> Configuration de base  </h1>
    <h2>Définir des Routes </h2>
    <h3>Route</h3> 
    <p>le composant `Route` dans React Router est utilisé pour définir comment l'interface utilisateur de notre application réagit à une certaine route. Il fait correspondre une route spécifique à un composant particulier.

il prend généralement deux props importantes :
Props : 
- path : C'est le chemin de l'URL que vous souhaitez faire correspondre. 
  
- element : C'est le composant React que vous souhaitez rendre lorsque le chemin correspond. 

   Par exemple, si vous voulez correspondre à l'URL "/home", vous définiriez `path="/home"`.
   et lorsque l'URL correspond à "/home", le composant Home sera rendu dans l'interface utilisateur de votre application.</p>
    <button onClick={() => navigate("/adnavigation")}>
                Suivant</button>
    
</>

    )
    
}
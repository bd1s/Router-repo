import React from "react";

import { useNavigate } from "react-router-dom";
export const Adnavigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-div">
        <h1> Navigation avancee </h1>
        <div>
          <h2>Définitions avancées d'itinéraires</h2>
          <p>
            là que React Router devient vraiment intéressant, on commence a
            definir des routes plus complexes, plus faciles à lire et beaucoup
            plus fonctionnels. Cela peut être fait grâce à cinq techniques
            principales.
          </p>
        </div>

        <div className="flex-horz">
          <button
            onClick={() => navigate("/bconfiguration")}
            className="button-suivant"
          >
            Precedent
          </button>
          <button onClick={() => navigate("/exo")} className="button-suivant">
            Suivant
          </button>
        </div>
      </div>
    </>
  );
};

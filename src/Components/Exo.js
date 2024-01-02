import React from "react";

import { useNavigate } from "react-router-dom";

export const Exo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-div">
        <h1> Exercices </h1>
        <div>YOUR EXERCICES HERE</div>
        <button onClick={() => navigate("/doc")} className="button-suivant">
          Consulter la documentation
        </button>
      </div>
    </>
  );
};

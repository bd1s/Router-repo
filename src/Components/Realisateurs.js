import React from "react";

import { useNavigate } from "react-router-dom";

export const Realisateurs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-div">
        <h1> Realisateurs </h1>
        <div>YOUR EXERCICES HERE</div>
        <button onClick={() => navigate("/")} className="button-suivant">
          Accueil
        </button>
      </div>
    </>
  );
};

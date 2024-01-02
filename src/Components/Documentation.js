import React from "react";

import { useNavigate } from "react-router-dom";

export const Documentation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-div">
        <h1> Documentation </h1>
        <div>YOUR DOCUMENTATION HERE</div>
        <button onClick={() => navigate("/exo")} className="button-suivant">
          Exercices
        </button>
      </div>
    </>
  );
};

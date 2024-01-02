import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/react-router.png"
          alt="Logo React Router"
          className="centered-image"
        />
        <p className="home-title">React router </p>
        <button className="button-home" onClick={() => navigate("/start")}>
          Commencer
        </button>
      </div>
    </>
  );
};

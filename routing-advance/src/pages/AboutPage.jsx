import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About page</h1>
      <button
        onClick={btnClick}
        className="cursor-pointer bg-amber-500 rounded-full px-2 active:scale-95"
      >
        Return to homepage
      </button>
    </div>
  );
};

export default AboutPage;

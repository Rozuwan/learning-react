import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About page</h1>
      <button
        onClick={() => {
          navigate('/')
        }}
        className="cursor-pointer bg-amber-500 rounded-full px-2 active:scale-95"
      >
        Return to homepage
      </button>
      <button
        onClick={() => {
          navigate(-1)
        }}
        className="cursor-pointer bg-amber-500 rounded-full px-2 active:scale-95"
      >
       Back
      </button>
    </div>
  );
};

export default AboutPage;

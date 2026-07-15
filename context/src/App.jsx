import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { useContext } from "react";
import { userContext } from "./context/DataContext";

const App = () => {
  const data = useContext(userContext);
  console.log(data);
  return (
    <div>
      <h1>This is app {data} </h1>
      <Header  />
      <Section />
      <Footer />
    </div>
  );
};

export default App;

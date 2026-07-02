import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1675731938231-a7c5705836f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "I finally found a financial service that is simple, reliable, and fits my everyday needs.",
    tag: "Satisfied",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661645746892-6db165857d91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Despite working hard, I still struggle to access affordable financial products and services.",
    tag: "Underserved",
  },
  {
    img: "https://images.unsplash.com/photo-1745434159123-5b99b94206ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "I have limited access to banking, making it difficult to save, invest, and grow financially.",
    tag: "Underbanked",
  },
  {
    img: "https://images.unsplash.com/photo-1696453424673-8b05ed67ce0f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "As an intern, I'm looking for opportunities to learn, earn, and build a strong financial future.",
    tag: "Intern",
  },
];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;

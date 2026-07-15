import { useContext } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Section from "./components/Section"
import { DataContext } from "./context/UserContext"

function App() {
  const data = useContext(DataContext)
  console.log(data);
  
  return (
    <div>
      <h1>This is APP{data}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App

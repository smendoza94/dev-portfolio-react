import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "Displays titled images of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository.",
    },
    {
      name: "Resume",
      description:
        "Provides a link to a downloadable resume and a list of the developer’s proficiencies.",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;

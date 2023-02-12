import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "javascript",
      description:
        "Displays titled images of the developer’s applications using Javascript with links to both the deployed applications and the corresponding GitHub repository.",
    },
    {
      name: "roblox",
      description:
        "Showcase with links of games created by the developer through Roblox Studio, Lua scripting included in each game.",
    },
    {
      name: "resume",
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
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;

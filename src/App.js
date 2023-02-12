import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
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
        // Passing the getter and setter functions into the Nav component
        // will allow this component to modify the state in the App component,
        // which will conditionally render based on the user's selection.
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* The shorthand condition is called a ternary operator, 
        identified with the ? and : symbols. The ternary operator is 
        a popular pattern in React to enable conditional rendering, 
        similar to how we used the && operator as a short circuit. 
        With the ternary, though, we supply the false condition to 
        render as well. */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

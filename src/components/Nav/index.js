import React from "react";

function Nav() {
  const categories = [
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
  ];
  // event listener "onClick" run categorySelected function that...
  function categorySelected(name) {
    console.log(`${name} clicked!`);
  }
  // returns the completed nav component to DOM
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            🔖
          </span>{" "}
          Steve's Developer Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* loads the categories listed in the navigation bar */}
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

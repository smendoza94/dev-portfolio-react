import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// passing props from App.js
function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  // returns the completed nav component to DOM
  return (
    <header className="flex-row px-1">
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
          {/* loads the categories listed in the navigation bar 
          the useState hook here for the option to change the 
          categories at some point in the future. */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

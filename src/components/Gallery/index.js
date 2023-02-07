import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import ProjectList from "../ProjectList";

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;

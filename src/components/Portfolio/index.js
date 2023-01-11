import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/photos/0.jpg";

function Portfolio(props) {
  const currentProject = {
    name: "jquery work day task manager",
    description:
      "Utilize this task manager for the work day where each time block is color-coded to indicate whether it is in the past (grey), present (red), or future (green).",
    url: "https://smendoza94.github.io/work-day-calendar/",
    github: "https://github.com/smendoza94/work-day-calendar",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="eight hour calendar example"
          className="img-thumbnail mx-1"
        />
      </div>
      <a href={currentProject.url} target="#">
        Site
      </a>
      <a href={currentProject.github} target="#">
        GitHub
      </a>
    </section>
  );
}

export default Portfolio;

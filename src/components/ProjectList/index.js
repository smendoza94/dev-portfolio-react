import React, { useState } from "react";
import Modal from "../Modal";

const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
      name: "jquery work day task manager",
      category: "javascript",
      description:
        "Utilize this task manager for the work day where each time block is color-coded to indicate whether it is in the past (grey), present (red), or future (green).",
      url: "https://smendoza94.github.io/work-day-calendar/",
      github: "https://github.com/smendoza94/work-day-calendar",
    },
    {
      name: "fuax photographer portfolio",
      category: "javascript",
      description:
        "Developer practice using react by creating a faux client who requested a Single-Page portfolio site to display her photos and a contact me page.",
      url: "https://smendoza94.github.io/photo-port/",
      github: "https://github.com/smendoza94/photo-port",
    },
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* only render the modal if the isModalOpen value is true */}
      {isModalOpen && <Modal currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <>
            <img
              src={require(`../../assets/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

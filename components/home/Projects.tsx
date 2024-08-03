import { projects } from "@/constants/projects";
import React, { useEffect, useState } from "react";
import MyWorkCard from "../ui/ProjectCard";
import AOS from "aos";
import ProjectModal from "../ui/ProjectModel";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<workProps | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleShowModal = (project: workProps) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      id="Projects"
      className="min-h-screen w-screen flex flex-col items-center justify-center lg:px-[119px] gap-6 px-4"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-sm text-gray-700 text-center">Featured Projects</h1>
        <h1 className="text-4xl font-bold text-center">
          Able to do the right <br /> things at the right time.
        </h1>
      </div>
      <div className="flex flex-col gap-5 max-w-[1440px]">
        <h1 className="text-lg font-semibold">All Projects</h1>
        <div className="flex gap-10 xs:flex-col">
          {projects.map((project, i) => (
            <MyWorkCard
              key={i}
              img={project.img}
              title={project.title}
              description={project.description}
              label={project.label}
              link={project.link}
              date={project.date}
              onShowModal={() => handleShowModal(project)} // Trigger modal with project data
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          showModal={showModal}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;

import ProjectCard from "./ProjectCard";

function ProjectList({ projects, deleteProject }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onDelete={() => deleteProject(index)}
        />
      ))}
    </div>
  );
}

export default ProjectList;

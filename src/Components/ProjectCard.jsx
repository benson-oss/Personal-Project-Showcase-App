// src/components/ProjectCard.jsx
function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
}

export default ProjectCard;

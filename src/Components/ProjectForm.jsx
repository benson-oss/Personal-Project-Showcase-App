// src/components/ProjectForm.jsx
import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addProject({ title, description, image });
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="form-box">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;

// src/App.jsx

import { useState, useEffect } from "react";
import ProjectForm from "./Components/ProjectForm.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import ProjectList from "./Components/ProjectList.jsx";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Modern Website UI",
      description: "A sleek responsive web design project",
      image:
        "https://s3-alpha.figma.com/hub/file/6235856616/2dcfa04b-0f3f-43e3-bb68-3a9dd899f7c3-cover.png",
    },
    {
      title: "Branding Portfolio",
      description: "Creative branding and identity design",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_vXvfTk-B1Kk0nUOUtbG6NdKp2f56Tg1qMVEvL81Ig&s=10",
    },
    {
      title: "Mobile App Concept",
      description: "Prototype for a mobile app interface",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-T-41L-pQLjHPXGaICH5RdmGDuGM89sPPinwaWb2PQq-3cpu_l39WPnXa&s=10",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="app">
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <h1>Personal Project Showcase App</h1>
      <ProjectForm addProject={addProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} deleteProject={deleteProject} />
    </div>
  );
}

export default App;

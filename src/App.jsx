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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte3zHdiDFckzqeeLmi1MCM6610236Y5-Eh-yjK6cT8Q&s=10"
  },
  {
    title: "Branding Portfolio",
    description: "Creative branding and identity design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_vXvfTk-B1Kk0nUOUtbG6NdKp2f56Tg1qMVEvL81Ig&s=10"
  },
  {
    title: "Mobile App Concept",
    description: "Prototype for a mobile app interface",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-T-41L-pQLjHPXGaICH5RdmGDuGM89sPPinwaWb2PQq-3cpu_l39WPnXa&s=10"
  },
  {
    title: "E‑Commerce Storefront",
    description: "React + Stripe integration for online shopping",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Rl1wmm3uvLaHjhstSxlvoi_zVKYWRat6xd1_LA0Eg&s=10"
  },
  {
    title: "Travel Blog",
    description: "Responsive blog with map integration",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Music Player App",
    description: "Interactive audio player with playlists",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    title: "Recipe Finder",
    description: "Search and filter recipes with API integration",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts and progress with charts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-fpQpxCM4rqcDjTiXbG1GcYrSN9deYH6reoifJBvCA&s=10h"
  },
    {
      title: "Modern Website UI",
      description: "A sleek responsive web design project",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxk4agyXsmQZT7hEzcBu2Wp8w6r1cdWa0BtsbOpH8bQ&sp",
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

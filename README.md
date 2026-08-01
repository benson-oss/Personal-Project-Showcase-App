# Personal Project Showcase App

A modern, responsive Single Page Application (SPA) built with React to showcase personal or agency projects.  
This app demonstrates key frontend development practices including component hierarchy, state management, event handling, data fetching, and client-side routing.

---

## 🚀 Features
- Landing Page: Displays projects as cards with title, description, and image.
- Add Project Form: Users can add new projects dynamically, including an image URL.
- Delete Functionality: Remove projects from the showcase with a simple button.
- Search & Filter: Search projects by title or description.
- Responsive Layout: Two cards per row on desktop, one per row on mobile.
- Sample Project: Includes a starter project ("Modern Portfolio Website") with a real Unsplash image.

---

## 🛠️ Technologies Used
- React (functional components, hooks)
- JavaScript (ES6+)
- HTML5 & CSS3
- Git & GitHub (version control and deployment)

---

## 📂 Project Structure
src/
├── components/
│    ├── ProjectCard.jsx
│    ├── ProjectForm.jsx
│    └── SearchBar.jsx
├── pages/
│    └── Showcase.jsx
├── App.jsx
├── index.js
└── styles/
└── App.css

Code

---

## ⚙️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-project-showcase.git
Navigate into the project folder:

bash
cd personal-project-showcase
Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev
🌐 Deployment
To deploy on GitHub Pages:

Install gh-pages:

bash
npm install gh-pages --save-dev
Add the following to package.json:

json
"homepage": "https://your-username.github.io/personal-project-showcase",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy:

bash
npm run deploy
Your app will be live at:
https://your-username.github.io/personal-project-showcase

📸 Screenshots
Landing page with project cards

Add Project form with image URL input

Responsive layout (desktop vs mobile)

🎯 Learning Outcomes
Building reusable React components

Managing state with useState

Handling events and form inputs

Implementing responsive design with CSS Grid & media queries

Using Git & GitHub for version control and deployment

🤝 Contributing
Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature-name)

Open a Pull Request

📜 License
This project is open-source and available under the MIT License.



  


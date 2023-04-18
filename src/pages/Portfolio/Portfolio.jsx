import React from 'react';
import Project from '../../components/Project/Project'

const projects = [
  {
    id: 0,
    title: "Kanto Quest",
    image: "/images/projects/KantoQuest.png",
    github: "https://github.com/MarkJNap/Kanto-Quest",
    deploy: "https://stormy-wave-79983.herokuapp.com/",
  },

  {
    id: 1,
    title: "Hops Hunter",
    image: "/images/projects/HopsHunter.png",
    github: "https://github.com/MarkJNap/Hops-hunter",
    deploy: "https://markjnap.github.io/Hops-hunter/",
  },

  {
    id: 2,
    title: "Express Note Taker",
    image: "/images/projects/ExpressNoteTaker.png",
    github: "https://github.com/MarkJNap/Expressjs-Note-Taker",
    deploy: "https://protected-woodland-67317.herokuapp.com/",
  },

  {
    id: 3,
    title: "MVC Tech Blog",
    image: "/images/projects/MVCTechBlog.png",
    github: "https://github.com/MarkJNap/MVC-Tech-Blog",
    deploy: "https://gentle-beach-96121.herokuapp.com/",
  },

  {
    id: 4,
    title: "PWA Text Editor",
    image: "/images/projects/PWATextEditor.png",
    github: "https://github.com/MarkJNap/PWA-Text-Editor",
    deploy: "https://evening-lowlands-74305.herokuapp.com/",
  },

  {
    id: 5,
    title: "First Portfolio",
    image: "/images/projects/FirstPortfolio.png",
    github: "https://github.com/MarkJNap/personal-portfolio",
    deploy: "https://markjnap.github.io/personal-portfolio/",
  },
]

export default function Portfolio() {

    return (
      <main>
        <h1>Portfolio</h1>
        <Project projects={projects}/>
      </main>
    );
}
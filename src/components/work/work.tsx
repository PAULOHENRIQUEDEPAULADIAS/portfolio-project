import "./work.css";

import { useState } from "react";
import Card from "./card/card";
import Modal from "./modal/modal";



function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Controle Financeiro",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo, doloribus ab harum hic minima sapiente minus maiores? Officia qui corrupti aspernatur incidunt voluptas. Cumque minima deserunt natus temporibus quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident minus neque aperiam eius quibusdam, tempore quos voluptatem corrupti sed? Iure ea temporibus consequatur sed tempore, culpa incidunt laudantium ipsum!",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    },  
        {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    }, 
        {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    }, 
        {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    }, 
        {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    },     {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    },     {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    },     {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    },     {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    },     {
      title: "Controle Financeiro",
      desc: "App simples para gerenciar despesas pessoais.",
      link: "https://github.com/seuuser/finance-app",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Clima em Tempo Real",
      desc: "Consulta APIs para exibir dados meteorológicos.",
      link: "https://github.com/seuuser/weather-app",
      stack: ["React", "Bootstrap", "OpenWeather API"],
    }, 
  ];

  return (
    <div className="Work">
      <div className="WorkText">
        <h2>Aqui separei alguns dos meus projetos mais interessantes</h2>
      </div>
      <div className="row g-3 WorkCards">
        {projects.map((proj, i) => (
            <Card {...proj} onClick={() => setSelectedProject(proj)} />
        ))}

        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Work;
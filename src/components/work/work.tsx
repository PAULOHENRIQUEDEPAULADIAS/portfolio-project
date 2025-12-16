import "./work.css";
import Footer from "./footer/footer";

import { useState } from "react";
import Card from "./card/card";
import Modal from "./modal/modal";

function Work() {
  const [selectedProject, setSelectedProject] = useState<{
  title: string;
  desc: string;
  link: string;
  stack: string[];
} | null>(null);

  const projects = [
    {
      title: "Microserviços com Docker e Kafka (Acadêmico)",
      desc: "Este projeto acadêmico foca no desenvolvimento e implantação de dois microserviços independentes, PetFriends_Transportes e PetFriends_Almoxarifado, ambos voltados para a empresa fictícia PetFriends, uma rede nacional especializada em serviços para pets. A proposta consiste na criação dos microserviços, com a implementação de endpoints via API Rest para comunicação, além de integrar serviços de mensageria Kafka para garantir a troca eficiente de eventos e dados entre os sistemas. A arquitetura foi projetada com foco em event-driven, proporcionando uma base robusta e escalável para atender às demandas dinâmicas da plataforma.",
      link: "http://github.com/PAULOHENRIQUEDEPAULADIAS/Paulo_Dias_DDDASEJ_AT?tab=readme-ov-file",
      stack: ["Kafka", "Docker", "Java", "Spring Boot"],
    },
    {
      title: "Análise, limpeza e exploração de dados (Acadêmico)",
      desc: "Projeto consiste na limpeza e tratamento dos dados de uma rede de telefonia. Entender motivos prováveis de evazão de clientes, após a devida normalização e tratamento de dados",
      link: "https://github.com/PAULOHENRIQUEDEPAULADIAS/Paulo_Dias_AluraChallenge_DS/blob/main/Alura%20Challenge.ipynb",
      stack: ["Python", "Pandas", "Numpy"],
    },{
      title: "App: TurismoPorAi (Acadêmico)",
      desc: "Desenvolvimento de uma aplicação simples para gerenciamento de uma agência de turismo chamada 'TurismoPorAi'. O projeto se utiliza de integração com banco de dados SQLite e uso de Razor Pages para criação da interface",
      link: "https://github.com/PAULOHENRIQUEDEPAULADIAS/TurismoPorAi",
      stack: ["C#", "SQLite", "HTML"],
    },{
      title: "Projeto Portfólio",
      desc: "Este projeto consiste no desenvolvimento desta plataforma de portfólio, criada com TSX e CSS. A aplicação utiliza o framework React com uma abordagem baseada em componentização, promovendo uma melhor organização do código e uma clara separação de responsabilidades entre os diferentes componentes e serviços.",
      link: "https://github.com/PAULOHENRIQUEDEPAULADIAS/portfolio-project",
      stack: ["React", "TypeScript", "CSS"],
    },
  ];

  return (
    <div className="Work">
      <div className="WorkText">
        <h2>Aqui separei alguns dos meus projetos mais interessantes</h2>
      </div>
      <div className="row g-3 WorkCards">
        {projects.map((proj, i) => (
          <Card key={i} {...proj} onClick={() => setSelectedProject(proj)} />
        ))}

        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Work;

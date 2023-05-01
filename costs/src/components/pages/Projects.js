import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import LinkButton from "../../layouts/LinkButton";
import Message from "../../layouts/Message";
import Container from "../../layouts/Container";
import Loading from "../../layouts/Loading";
import ProjectCard from "../projects/ProjectCard";

import styles from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState([])

  const location = useLocation();
  // Para pegar a mensagem que coloquei
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
   setTimeout(() =>{
    fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err));
  
      // Isso tudo para pegar do banco de dados e depois inserir
   }, 300)
  }, []);

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },  
    })
    .then(resp => resp.json())
    .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso')
        
    })
    .catch(err => console.log(err))
  }


  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      {projectMessage && <Message type="sucess" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category && project.category.name}
              key={project.id}
              handleRemove={removeProject} 
            />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados</p>
          )}
      </Container>
    </div>
  );
}

export default Projects;
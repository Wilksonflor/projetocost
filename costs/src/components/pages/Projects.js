import {useLocation} from 'react-router-dom'


import LinkButton from '../../layouts/LinkButton'
import Message from "../../layouts/Message";
import Container from '../../layouts/Container'

import styles from './Project.module.css'


function Projects(){

    const location = useLocation()
    // Para pegar a mensagem que coloquei
    let message = ''
    if(location.state){
        message = location.state.message
    }
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message}/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects;
import '../Styles/ProjectSectionStyle.css'
import ProjectComponent from './projectComponent'
import { Container, Row, Col } from 'react-grid-system'
import myProject from '../ProjectDetails'

function ProjectSection() {

    const projectGridFunction = (projectList) => {
        return Object.keys(projectList).map((projectKey) => (
            <Col key={projectKey}>
                <ProjectComponent
                    projectName={projectList[projectKey].name}
                    liveLink={projectList[projectKey].liveLink}
                    codeLink={projectList[projectKey].codeLink}
                />
            </Col>
        ));
    }

    return (
        <>
        <div className="container6">
            <p className='projectTitleCont'>PROJECTS</p>
            <div>
                <Container>
                    <Row>
                        {projectGridFunction(myProject)}
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default ProjectSection
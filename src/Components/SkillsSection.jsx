import { Container, Col, Row } from "react-grid-system";
import '../Styles/SkillsSectionStyle.css'
import cpp from '../assets/c++.png'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mongodb.png'
import python from '../assets/python.png'
import scikit from '../assets/scikit.png'
import tensorflow from '../assets/tensorflow.png'
import mysql from '../assets/mysql.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'

function SkillsSection() {
    let row1 = [cpp, html, css, bootstrap, tailwind]
    let row2 = [js, react, node, mongo, python]
    let row3 = [scikit, tensorflow, mysql, firebase, git]

    const rowFunction = (rowNumber) => {
        return rowNumber.map((img) => (
            <Col key={img}><img src={img} className="skillComp"></img></Col>
        ))
    }

    return(
        <>
        <div className="container4">
            <p className="skillHeadline">SKILLS</p>
            <div className="skillContainer">
                <Container>
                    <Row align="stretch">
                        {rowFunction(row1)}
                    </Row>
                    <Row>
                        {rowFunction(row2)}
                    </Row>
                    <Row>
                        {rowFunction(row3)}
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default SkillsSection;
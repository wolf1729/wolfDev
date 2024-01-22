import '../Styles/projectComponent.css'

// eslint-disable-next-line react/prop-types
function ProjectComponent({projectName, liveLink, codeLink}) {
    let backgroundColor = ["#404552", "#383c4a", "#4b5162", "#7c818c"]
    let backgroundColorSelector = () => {
        let randomNumber = Math.floor(Math.random()*4)
        return { backgroundColor: backgroundColor[randomNumber] };
    }

    return (
        <>
        <div className="container5" style={backgroundColorSelector()}>
            <p className='projectTitle'>{projectName}</p>
            <div className='but'>
                <a href={liveLink}><button className='linkBut'>Link</button></a>
                <a href={codeLink}><button className='CodeBut'>Code</button></a>
            </div>
        </div>
        </>
    )
}

export default ProjectComponent
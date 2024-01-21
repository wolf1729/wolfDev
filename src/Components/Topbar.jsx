import '../Styles/TopBarStyle.css'

function Topbar() {
    return (
        <>
        <div className="container1">
            <div className="nameContainer">
                <p className='title'>wolfDev</p>
            </div>
            <div className="contentContainer">
                <div className='contentTitle'>About Me</div>
                <div className='contentTitle'>Skills</div>
                <div className='contentTitle'>Project</div>
                <div className='contentTitle'>Get in Touch</div>
            </div>
        </div>
        </>
    )
}

export default Topbar
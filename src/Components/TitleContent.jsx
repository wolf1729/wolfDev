import '../Styles/TitleContextStyle.css'
import symbol from '../assets/wolf.png'

function TitleSection() {
    return (
        <>
        <div className="container2">
           <div className='cont'>
                <div className='content'>
                    <div className='contentList'>
                        <div className='greetingContainer'>Hi,</div>
                        <div className='nameContainer'>My name is <span className='name'>Aryan Mishra</span></div>
                        <div className='positionContainer'>I am a <span className='position'>Full-Stack Developer</span></div>
                    </div>
                    <img src={symbol} className='symbol'></img>
                </div>
           </div>
        </div>
        </>
    )
}

export default TitleSection
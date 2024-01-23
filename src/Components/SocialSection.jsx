import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import '../Styles/SocialSectionStyle.css'

function SocialSection() {

    return (
        <>
        <div className="container8">
            <a href='https://github.com/wolf1729'><img src={github} className='social github'></img></a>
            <a href='https://www.linkedin.com/in/aryan-mishra-78578b22a/'><img src={linkedin} className='social linkedin'></img></a>
            <a href='https://twitter.com/wolf1729'><img src={twitter} className='social twitter'></img></a>
        </div>
        </>
    )
}

export default SocialSection
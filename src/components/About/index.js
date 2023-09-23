import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faAngular, faCss3, faGit, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
    return (
        <>        
        <div className='container about-page'>
            <div className='text-zone'>
        
                <h1>
                    <AnimatedLetters
                    strArray = {['A','b','o','u','t',' ','m','e']}
                    idx={15}>    
                    </AnimatedLetters>
                </h1>
                <p>Hello, I'm Anand Yadav, a dedicated coder and technology enthusiast with a diverse skill set and
                     a passion for crafting robust and efficient solutions.
                     Currently pursuing my MCA and holding a Bachelor's degree in Computer Applications (BCA), 
                     I'm on a relentless journey to expand my knowledge and contribute to the ever-evolving world of technology.</p>
                <p>My expertise spans a wide spectrum of programming languages, 
                    including C, C++, Java, Python, and Kotlin, which form the backbone of my passion for technology and software development.</p>
                <p>In the realm of mobile app development, I specialize in Android development using modern tools and libraries, including Jetpack Compose and Flutter. 
                    I take pride in creating seamless, responsive, and user-friendly mobile applications.</p>
                <p>As a technology enthusiast, I relish the opportunity to explore new horizons, tackle complex challenges,
                     and contribute to the tech community. Whether it's mobile app development, web design, database management, or back-end solutions, 
                    I'm eager to collaborate on projects that push boundaries and deliver impactful results.</p>
                <p>
                I invite you to connect with me to discuss coding, share insights, and explore potential collaborations
                </p>
        </div>
        <div  className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className='face2'>
        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face3'>
        <FontAwesomeIcon icon={faAndroid} color='#DD0031' />
                </div>
                <div className='face4'>
        <FontAwesomeIcon icon={faJava} color='#DD0031' />
                </div>
                <div className='face5'>
        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                
                <div className='face6'>
        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face7'>
        <FontAwesomeIcon icon={faGit} color='#EC4B2A' />
                </div>

            </div>

        </div>
            
        </div>
        
        <Loader type='pacman'/>
        </>
    )
}
export default About
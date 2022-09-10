import './styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    
    return(
    <footer id="footer">
        <div id = "footer-text">
        <h2 style={{fontSize: '1.2em'}}>Contact</h2>
        <h2 style={{fontSize: '1.2em'}} >Email: Alextechdev1988@gmail.com</h2>
        <h3 style={{fontSize: '1.2em'}}>Connect@</h3>
            <a className="LinkedIn" href ="https://www.linkedin.com/in/alexander-pelta-5bab37245/">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
            
            <a className="github" href ="https://github.com/alexpxrad">
            <FontAwesomeIcon icon={faGithub} size="1x"/>
            </a>

        </div>
    </footer>
    )
}
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"
import './Footer.css'

const Footer = () => {
    return (<footer>
        <p>
            developed by<span> WrN </span> &copy; 2023
        </p>
        <ul>
            <li>
                <SiFacebook className="face" />
            </li>
            <li>
                <SiInstagram className="insta" />
            </li>
            <li>
                <SiLinkedin className="linkedin" />
            </li>
        </ul>
    </footer>)
}

export default Footer
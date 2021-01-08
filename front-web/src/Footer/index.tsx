import './styles.css';
import { ReactComponent as LinkedinIcon} from './Linkedin.svg';
import { ReactComponent as InstagramIcon} from './Instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento <strong>Semana DevSuperior 2.0</strong>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/elias-nepomuceno-232273192/" target="_new"> <LinkedinIcon /> </a>
                <a href="https://www.instagram.com/eliasnepo/" target="_new"> <InstagramIcon /> </a>
            </div>
        </footer>
    )
}

export default Footer;
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer ({blok}) {

    return (
        <footer className="footer">
            <p className="footer-text">{blok.footer_label}</p>
            <div className="footer-contacts">
                <a href={blok.footer_email} className="footer-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Samguliker@hotmail.com
                </a>
                <a href={blok.github} className="footer-text">
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                </a>
                <a href={blok.frontend_mentor} className="footer-text">
                    <FontAwesomeIcon icon={faBookOpen} />
                    Frontend mentor
                </a>
            </div>
        </footer>
    )
  }
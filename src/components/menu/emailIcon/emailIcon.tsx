import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./emailIcon.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const email = <FontAwesomeIcon className="emailIconItem" icon={faEnvelope} />;

function EmailIcon(){
    return (
        <a href="mailto:paulo.dias@al.infnet.edu.br" className="emailIconBox">
            {email}
        </a>
    );
}

export default EmailIcon;
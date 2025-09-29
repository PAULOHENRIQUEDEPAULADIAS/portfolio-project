import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./githubIcon.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon className="githubIconItem" icon={faGithub} />;

function GithubIcon(){
    return (
        <a href="https://github.com/PAULOHENRIQUEDEPAULADIAS" target="_blank" className="githubIconBox" >
            {github}
        </a>
    );
}

export default GithubIcon;
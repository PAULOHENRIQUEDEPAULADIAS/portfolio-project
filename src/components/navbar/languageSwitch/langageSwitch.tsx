import "./languageSwitch.css"

import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const languageIcon = <FontAwesomeIcon className="languageIcon" icon={faLanguage}/>;

function LanguageSwitch(){
        return (
            <div className="languageSwitchBox">
                {languageIcon}
            </div>
        );    
}

export default LanguageSwitch;
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./circleNode.css";

const CircleNodes = <FontAwesomeIcon className="CircleNodesIcon" icon={faCircleNodes} />;

function CircleNode(){
    return(
        <div className="CircleNodeItem">
            {CircleNodes}
        </div>
    );
}

export default CircleNode;
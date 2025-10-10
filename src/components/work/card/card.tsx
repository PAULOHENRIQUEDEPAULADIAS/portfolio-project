import "./card.css";

interface Project {
  title: string;
  desc: string;
  stack: string[];
}

interface CardProps extends Project {
  onClick: () => void;
}


function Card({ title, desc, stack, onClick }: CardProps) {
  return (
    <div className="col-sm-6" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{truncate(desc, 50)}</p>
          {stack && (
            <div className="stacks">
              {stack.map((tech, index) => (
                <span key={index} className="badge bg-secondary me-1">
                  {tech}
                  {index < stack.length - 1 ? " - " : ""}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function truncate(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default Card;
import "./card.css";

function Card({ title, desc, link, stack, onClick }) {
  return (
    <div className="col-sm-6" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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

function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default Card;
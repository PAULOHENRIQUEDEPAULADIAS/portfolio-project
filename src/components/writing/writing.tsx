import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./writing.css";

interface Textos {
  id: string;
  header: string;
  intro: string;
  text: string;
  date: string;
}

const mockTextos: Textos[] = [
  { id: "1", header: "Texto sobre XTOP", intro: "Este texto aborda assunto XYZ", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis vitae laborum consectetur pariatur deleniti, necessitatibus tempore veritatis nulla asperiores magnam voluptate. Similique assumenda est tempore quod, maiores quis rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae quo rerum, magni nam est ipsum odio obcaecati iure voluptate eligendi. Incidunt omnis facilis quia, placeat optio hic natus id." , date: "10/2025" },
  { id: "2", header: "Outro texto", intro: "Intro sobre XYZ", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis...", date: "10/2025" },
  { id: "3", header: "Mais um texto", intro: "Intro sobre XYZ", text: "Outro exemplo de texto com Markdown\n\n**Negrito**, *itálico*, [link](https://example.com)", date: "10/2025" },
];

function Writing() {
  const [selectedText, setSelectedText] = useState<Textos | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedText ? "hidden" : "auto";
  }, [selectedText]);

  return (
    <>
      <div className={`writing-container ${selectedText ? "blurred" : ""}`}>
        <h2>Aqui você encontrará textos relacionados a tecnologia e linguística</h2>
        <div className="text-list">
          {mockTextos.map((item) => (
            <div
              key={item.id}
              className="text-card"
              onClick={() => setSelectedText(item)}
            >
              <h2>{item.header}</h2>
              <p>{item.intro}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedText && (
        <div className="modal-overlay" onClick={() => setSelectedText(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedText(null)}>✕</button>
            
            <h2>{selectedText.header}</h2>
            <div className="modal-text">
              <ReactMarkdown>{selectedText.text}</ReactMarkdown>
            </div>
            <div className="modal-date">{selectedText.date}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Writing;

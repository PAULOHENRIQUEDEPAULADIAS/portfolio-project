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
  { id: "1", header: "Transição de carreira", intro: "Perspectivas e anseios em uma transação de carreira.", 
    text: "Após o meu retorno ao Brasil em 2022, revi e ressignifiquei muitos tópicos pessoais. Durante minha estadia inicial, decidi retornar ao meu campo de atuação, atuando como conciliador financeiro, e posteriormente como assistente operacional em uma empresa de Crédito Imobiliário, infelizmente ambos não se alinhavam como meus interesses (Ao menos não mais). Após algum tempo, entendi que retornei para um campo que eu conhecia, mas já não fazia mais parte de mim, um intercâmbio e um de tanto tempo nos abre a mente para novos horizontes.\n\nAo ingressar em programação, Engenharia de software me possibilitou abrir o espaço que estava buscando, encaixar, montar, desfazer e colorir, criar fora da caixa era o que estava buscando. Assim, desempregado e com um propósito, me aventurei em vendas, um dos maiores desafios, desde sempre, na minha carreira. Vender é a arte de falar e influenciar. Como vendedor, entendi o 'speech de vendas', entendi as necessidades das vendas (que por mais estranho que possa parecer, não é só vender), e neste mundo desbravei minhas dificuldades com o setor. Lembro do início onde falar com o cliente, demonstrando domínio sobre algo que não estava estruturado internamente, coisa que me deixou uma lição de vida, nunca estaremos 100% prontos, e aprender no on the go faz toda diferença. Vendas e ser vendedor significa muita coisa que eu mesmo não pude entregar, mas foi um marco que levarei como aprendizado por muitos anos.\n\nPor outro lado, Engenharia de Software me possibilitou novos rumos, seja em lógica, ou criatividade. A TI me possibilitou encontrar a inspiração intelectual que almejei por muito tempo.\n\nEm novembro de 2024, tomei um tempo do trabalho, e decidi custear meus estudos sem distrações, foi uma das melhores decisões que tomei em vários âmbitos. Agora buscando a oportunidade de entrada e estudando para melhorar minha compreensão do mundo da TI, relembro como o mercado de trabalho está neste momento - 2025. Pessoas ainda impactadas pelos efeitos sociais pós COVID, a busca por oportunidades está acirrada, sem perspectiva de terminar. Realizei algumas entrevistas (Sinceramente gostaria que fossem mais hehe) e consegui captar um pouco dessa disputa do outro lado, os recrutadores estão subindo a régua, o mercado mais exigente, e mesmo com experiências relevantes, vejo como o caminho à ser percorrido ainda é longo, ainda mais com as constantes evoluções tecnológicas.\n\nAntes de um texto motivacional, aqui deixo um registo, em pouco mais de 6 meses, construí uma fundação em Java sólida, dominei conceitos e princípios no ramo (Como SOLID, Abstração, Encapsulamento e Clean Code), vivenciei projetos acadêmicos relevantes, absorvi linguagens como C#, Python e sigo pincelando Artificial Intelligence. Como a área de tecnologia está evoluindo, como as ofertas de trabalho estão pedindo mais, e acima de tudo, meu progresso perante tudo isso.", date: "07/2025" },
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

import "./about.css";

import SaoPauloShape from "../../assets/saopauloShape.svg";
import Languages from "../../assets/languages.svg";


function About() {
  return (
    <div className="aboutContent">
      {/* ---------- Texto inicial ---------- */}
      <div className="aboutMe1">
        <h1>Sobre mim.</h1>
        <p>
          Sou um entusiasta do conhecimento e, em 2023, decidi dedicar meus
          esforços ao ramo da tecnologia. Mecho e brinco com computadores desde
          a infância e me interesso por tecnologias em geral, mas tenho um
          interesse particular em AI e geração de imagens artificiais.
        </p>
      </div>

      {/* ---------- Bloco São Paulo ---------- */}
      <div className="aboutMe2">
        <div className="aboutMe2Text">
          <p>
            Crescer na zona Sul de São Paulo não é exatamente o universo
            tecnológico, mas pude explorar e crescer ao ar livre. Quando não
            estava fora de casa, provavelmente estaria jogando vídeo games, o
            que proporcionou pensamento criativo aguçado tanto dentro quanto
            fora das telas. Muita coisa mudou desde então, e todas elas
            contribuiram de alguma forma a construir quem sou hoje.
            <br />
            <br />
            Após concluir minha primeira graduação em 2016, me mudei para
            Dublin, Irlanda, visando estudo de inglês, onde vivi de meados de
            2018 até início de 2022, conquistando minha segunda graduação
            (ambas em negócios). Hoje, curso Bacharelado em Engenharia de
            Software, e estou combinando ambos os mundos de uma forma bem
            única.
            <br />
            <br />
            Atualmente, carrego uma bagagem do mercado financeiro contábil,
            que aos poucos estou aplicando nos meus mais recentes estudos.
          </p>
        </div>
        <div className="aboutMe2Img">
          <img src={SaoPauloShape} className="aboutMe2ImgItem" />
        </div>
      </div>

      {/* ---------- Bloco Linguas ---------- */}
      <div className="AboutHobbies AboutHobbies1">
        <div className="AboutHobbies1Img">
          <img src={Languages} alt="Ícones de línguas" />
        </div>
        <div className="AboutHobbies1Text">
          <h1>Contínuo Estudante Linguista.</h1>
          <p>
            Além de tecnologia, tenho gosto por uma sintaxe diferente - Sou
            profundo entusiasta de línguas e a psicologia do aprendizado geral
            e de idiomas. Devido a minhas origens, tenho maior familiaridade
            com idiomas derivados do Latim, mas também me aventuro em idiomas
            originários da Ásia.
            <br />
            <br />
            Atualmente exploro o trabalho do Sueco Frederick Bodmer,
            estudioso linguista, filósofo e autor de The Loom of Language - 1943.
            Futuramente, tenho interesse em incorporar ferramentas
            tecnológicas ao estudo de idiomas e a psicologia do aprendizado.
          </p>
        </div>
      </div>

      {/* ---------- Bloco Viagens  ---------- */}
      <div className="AboutHobbies AboutHobbies2">
        <div className="AboutHobbies2Text">
          <h1>Viajante</h1>
          <p>
            Fora dos estudos e da carreira, o que mais gosto de fazer é viajar.
            Sempre que posso, pego o caminho e vou. Tem algo em conhecer lugares
            novos, encontrar pessoas diferentes e mergulhar em outras culturas
            que desperta em mim a vontade de ver mais, sentir mais, viver mais.
            Até agora, já carimbei 6 países no passaporte — não é tanto quanto
            eu gostaria, mas cada carimbo carrega uma história única, e todos
            eles me lembram que ainda tenho muito mundo pela frente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

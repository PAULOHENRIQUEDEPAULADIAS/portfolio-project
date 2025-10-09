import "./footer.css";
import Photo from "../../../assets/photo.jpg"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <img
          src= {Photo}
          alt="Foto do Paulo"
          className="footer-photo"
        />
        <div className="footer-text">
          <h3>Oi! Sou o Paulo, e ajudo pessoas a transformar ideias em realidade.</h3>
          <a className="contact-button" href="mailto:paulo.dias@al.infnet.edu.br" >Entre em contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

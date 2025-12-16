import { useState, useRef, useEffect, useCallback } from "react";
import "./album.css";

import Image1 from "../../assets/img/voando_alto_10_25.jpg";
import Image2 from "../../assets/img/lamen_aska_sp_05_25.jpg";
import Image3 from "../../assets/img/mercadao_sp_12_25.jpg";
import Image4 from "../../assets/img/centro_cultural_mario_quintana_poa_10_25.jpg";
import Image5 from "../../assets/img/elis_Regina_poa_10_25.jpg";
import Image6 from "../../assets/img/laranjal_rs_10_25.jpg";
import Image7 from "../../assets/img/melhor_lugar_da_irlanda_07_19.jpg";
import Image8 from "../../assets/img/peixe_da_sorte_belfast_09_20.jpg";
import Image9 from "../../assets/img/museo_do_titanic_belfast_09_20.jpg";
import Image10 from "../../assets/img/olives_the_cork_market_cork_09_20.jpg";
import Image11 from "../../assets/img/o_mundo_fantastico_das_sardinhas_lisboa_portugal_10_19.jpg";
import Image12 from "../../assets/img/cabelo_cumprido_faro_portugal_10_19.jpg";
import Image13 from "../../assets/img/amigos_desconhecidos_na_balada_dublin_07_19.jpg";
import Image14 from "../../assets/img/talbot_st_dublin_07_19.jpg";
import Image15 from "../../assets/img/carnaval_sp_02_24.jpg";




interface Photo {
  id: string;
  src: string;
  caption: string;
  date: string;
  alt: string;
}

const mockPhotos: Photo[] = [
  { id: "1", src: Image1, caption: "Voando na paz total! 🌄", date: "2025-10-10", alt: "Foto da janela do avião" },
  { id: "2", src: Image2, caption: "Melhor lamen de SP", date: "2025-05-10", alt: "Foto de um chef preparando lamen"},
  { id: "3", src: Image3, caption: "Mercadão de São Paulo", date: "2025-05-12", alt: "Foto dmercadão de São Paulp"},
  { id: "4", src: Image4, caption: "Casa da Cultura Mario Quintana Porto Alegre - Rio Grande do Sul", date: "2025-10-01", alt: "Foto de duas torres cor de rosa, chamada Casa da Cultura Mario Quintana"},
  { id: "5", src: Image5, caption: "Homenagem à Elis Regina Porto Alegre - Rio Grande do Sul", date: "2025-10-01", alt: "Foto de uma estátua da cantora Elis Regina"},
  { id: "6", src: Image6, caption: "Esquadrão da Alegria em Laranjal - Rio Grande do Sul", date: "2025-10-01", alt: "Foto de um grupo de pessoas sentadas à frente de um letreiro escrito 'Laranjal' da cidade de Laranjal no RS"},
  { id: "15", src: Image15, caption: "Meus queridos do Carnaval de SP", date: "2024-02-01", alt: "Foto de um grupo de amigos"},
  { id: "7", src: Image7, caption: "Howth - Irlanda", date: "2019-09-01", alt: "Foto de um desenho do mapa de Howth - Irlanda"},
  { id: "8", src: Image8, caption: "Peixe da sorte em Belfast - Irlanda do Norte", date: "2020-09-15", alt: "Foto minha beijando um monumento de um peixe em Belfast"},
  { id: "9", src: Image9, caption: "Museo do Titanic em Belfast - Irlanda do Norte", date: "2020-09-01", alt: "Foto minha à frente de um letreiro metálico escrito 'Titanic'"},
  { id: "10", src: Image10, caption: "Mercado Central de Cork - Irlanda", date: "2020-09-01", alt: "Foto de uma loja com várias azeitonas em concerva"},
  { id: "11", src: Image11, caption: "O mundo fantástico das sardinhas em Lisboa - Portugal", date: "2019-10-01", alt: "Foto de prateleiras cheias de sardinha em lata"},
  { id: "12", src: Image12, caption: "Quando meu cabelo era senssacional em Faro - Portugal", date: "2019-10-01", alt: "Foto minha de cabelo cumprido"},
  { id: "13", src: Image13, caption: "Amigos desconhecidos na balada em Dublin - Irlanda", date: "2019-07-01", alt: "Foto de pessoas dançando na balada"},
  { id: "14", src: Image14, caption: "Visão do The Spire pela Talbot St. em Dublin - Irlanda ", date: "2019-07-01", alt: "Foto de um monumento puntido no meio da cidade"},      
];

function Album() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [photos] = useState<Photo[]>(mockPhotos);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        setIsLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) => Math.min(prev + 4, photos.length));
          setIsLoading(false);
        }, 500);
      }
    },
    [photos.length, isLoading]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "100px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  const visiblePhotos = photos.slice(0, visibleCount);

  return (
    <div className="album-page">
      <header className="album-header">
        <h2>Um mural pessoal sobre a minha jornada – role pra ver mais!</h2>
      </header>

      <div className="photo-mural">
        {visiblePhotos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <div className="photo-legend">
              <p>
                {photo.caption}{" "}
                <span className="date">
                  ({new Date(photo.date).toLocaleDateString("pt-BR", {
                    month: "long",
                    year: "numeric",
                  })})
                  
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < photos.length && (
        <div ref={loaderRef} className="loader-container">
          {isLoading && <div className="spinner"></div>}
        </div>
      )}
    </div>
  );
}

export default Album;

import { useState, useRef, useEffect, useCallback } from "react";
import "./album.css";

import Image1 from "../../assets/imgMocks/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg";
import Image2 from "../../assets/imgMocks/como-otimizar-imagens-web-internet1.jpg";
import Image3 from "../../assets/imgMocks/images.jpeg";
import Image4 from "../../assets/imgMocks/pexels-nitin-creative-46710.jpg";
import Image5 from "../../assets/imgMocks/ponte-de-madeira-para-a-praia-durante-o-por-do-sol_181624-18247.jpg";

interface Photo {
  id: string;
  src: string;
  caption: string;
  date: string;
  alt: string;
}

const mockPhotos: Photo[] = [
  { id: "1", src: Image1, caption: "Explorando as montanhas – um dia de paz total! 🌄", date: "2025-09-15", alt: "Foto de montanhas ao amanhecer" },
  { id: "2", src: Image2, caption: "Café com vista pro mar, reset das ideias. ☕", date: "2025-09-10", alt: "Café da manhã à beira-mar" },
  { id: "3", src: Image3, caption: "Noite estrelada – pensando no próximo código. ✨", date: "2025-08-28", alt: "Céu estrelado à noite" },
  { id: "4", src: Image4, caption: "Passeio de bike pela cidade velha. 🚲", date: "2025-08-20", alt: "Passeio de bicicleta urbana" },
  { id: "5", src: Image5, caption: "Ler um livro no parque – minha terapia favorita. 📖", date: "2025-08-15", alt: "Leitura em um parque arborizado" },
  { id: "6", src: Image1, caption: "Festival de música ao ar livre – energia pura! 🎶", date: "2025-07-30", alt: "Festival de música noturno" },
  { id: "7", src: Image2, caption: "Cozinhando algo novo – experimentos na cozinha. 🍳", date: "2025-07-25", alt: "Momento na cozinha preparando uma refeição" },
  { id: "8", src: Image3, caption: "Amigos e risadas – o que importa de verdade. 👯‍♂️", date: "2025-07-18", alt: "Encontro com amigos em um café" },
  { id: "9", src: Image4, caption: "Pôr do sol perfeito – gratidão pelo dia. 🌅", date: "2025-07-10", alt: "Pôr do sol na praia" },
  { id: "10", src: Image5, caption: "Corrida matinal – energia pro dia todo. 🏃‍♂️", date: "2025-06-28", alt: "Corrida ao amanhecer" },
  { id: "11", src: Image1, caption: "Arte de rua em viagem – inspirações visuais. 🎨", date: "2025-06-20", alt: "Grafite em parede urbana" },
  { id: "12", src: Image2, caption: "Chuva e um bom chá – momentos introspectivos. ☔", date: "2025-06-15", alt: "Janela com chuva e xícara de chá" },
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
                  ({new Date(photo.date).toLocaleDateString("pt-BR")})
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

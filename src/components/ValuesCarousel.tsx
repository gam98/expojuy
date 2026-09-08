import { useState, useEffect, useCallback } from 'react';
import { expoValores } from '../assets/valores';

export const ValuesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total = expoValores.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Rotación continua e ininterrumpida cada 3.8 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="values-carousel-frame"
      role="region"
      aria-roledescription="carousel"
      aria-label="Valores de la propuesta ExpoJuy 2026"
    >
      <div className="values-carousel-viewport">
        {expoValores.map((valor, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={valor.id}
              className={`values-carousel-slide ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Fotografía de alta resolución con zoom suave continuo */}
              <img
                src={valor.image}
                alt={valor.title}
                className="values-carousel-img"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Degradados cinematográficos para máxima legibilidad tipográfica */}
              <div className="values-carousel-overlay-top" />
              <div className="values-carousel-overlay-bottom" />

              {/* Barra superior con contador y micro-indicadores integrados */}
              <div className="values-carousel-top-bar">
                <span className="values-carousel-badge">
                  {valor.num} <span className="values-carousel-badge-total">/ 0{total}</span>
                </span>

                {/* Micro indicadores sutiles de diapositiva */}
                <div className="values-carousel-dots" aria-label="Indicadores de diapositiva">
                  {expoValores.map((item, dotIdx) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Ver valor ${item.title}`}
                      className={`values-carousel-dot ${dotIdx === currentIndex ? 'is-active' : ''}`}
                      onClick={() => goToSlide(dotIdx)}
                    />
                  ))}
                </div>
              </div>

              {/* Contenido textual del valor montado directamente SOBRE la imagen */}
              <div className="values-carousel-content">
                <h3 className="values-carousel-title">{valor.title}</h3>
                <p className="values-carousel-subtitle">{valor.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

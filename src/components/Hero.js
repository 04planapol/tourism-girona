import React from 'react';
// Opcional: Si vols assegurar-te que la ruta està bé, pots fer un import a dalt:
// import videoGirona from '../assets/girona.mp4'; 

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* VÍDEO DE FONS */}
      <video autoPlay loop muted playsInline className="hero-video">
        {/* Aquesta línia busca el fitxer a la carpeta assets */}
        <source src={require('../assets/girona.mp4')} type="video/mp4" />
        
        {/* Si per algun cas no et va el fitxer local, descomenta la línia de sota per tenir un backup d'internet: */}
        {/* <source src="https://assets.mixkit.co/videos/preview/mixkit-medieval-stone-bridge-in-a-forest-4258-large.mp4" type="video/mp4" /> */}
        
        El teu navegador no suporta vídeo.
      </video>
      
      <div className="hero-overlay">
        <h1>Girona m'enamora</h1>
        <p>Història, llegendes i gastronomia al cor del Barri Vell.</p>
      </div>
    </section>
  );
}

export default Hero;
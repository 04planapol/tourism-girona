import React from 'react';

function Multimedia() {
  return (
    <section id="multimedia" className="multimedia-section">
      <h2>Girona: Imatge, Vídeo i So</h2>
      <div className="media-container">
        
        {/* 1. LA IMATGE (casesOnyar.png) */}
        <div className="media-item">
            <h3>Les Cases de l'Onyar</h3>
            <p>La imatge més icònica de Girona:</p>
            {/* Fixa't: El teu fitxer és .png, no .jpg */}
            <img 
                src={require('../assets/casesOnyar.png')} 
                alt="Cases de l'Onyar" 
                className="edited-img"
            />
        </div>

        {/* 2. EL VÍDEO (Videogirona.mp4) */}
        <div className="media-item">
            <h3>Passeig Visual</h3>
            <p>Un tastet dels carrers de la ciutat:</p>
            <video controls width="100%">
                {/* El teu fitxer es diu Videogirona.mp4 */}
                <source src={require('../assets/Videogirona.mp4')} type="video/mp4" />
                El teu navegador no suporta vídeo.
            </video>
        </div>

        {/* 3. L'ÀUDIO (audiogirona.mp3) */}
        <div className="media-item">
            <h3>Ambient: La Devesa</h3>
            <p>Tanca els ulls i escolta la natura urbana:</p>
            <audio controls>
                {/* El teu fitxer es diu audiogirona.mp3 */}
                <source src={require('../assets/audiogirona.mp3')} type="audio/mpeg" />
                El teu navegador no suporta àudio.
            </audio>
        </div>
        
      </div>
    </section>
  );
}

export default Multimedia;
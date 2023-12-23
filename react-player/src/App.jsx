import React, { useState } from "react";
import react from './assets/react.svg'
import YoutubePlayer from "react-player/youtube";

function App() {

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {

    setPlaying((prev) => !prev);
  }

  return (
    <>
      <div>
        <span className="header__title">
          <h1>React Player en ViteJS</h1>
          <span>
            <img src={react} alt="React Logo" 
            className="header__react-logo" />
          </span>
        </span>

        <button style={{ 
          margin: '1rem',
          padding: '0.5rem'
         }} onClick={handlePlay}>
          Parar/Reproducir
        </button>

        <span>App</span> 

        <div style={{ 
          background: "gray",
          width: '1000px'
         }}>
          <YoutubePlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
            controls
            light
            // loop
            playing={playing}
            volume={0.7}
            width={780}
            height={720}
            style={{ 
              padding: '10px',
              margin: 'auto'
             }}
            onEnded={() => {
              alert("Vídeo finalizado.")
            }}
          />
        </div>
        
      </div>
    </>
  );

}

export default App

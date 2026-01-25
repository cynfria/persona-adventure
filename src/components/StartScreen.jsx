import { useState, useMemo } from 'react';
import borderImg from '../assets/border.svg';
import { personas } from '../gameData';
import personaShadow from '../assets/questions/persona-shadow.png';

function StartScreen({ onStart }) {
  const availablePersonas = useMemo(() => {
    return Object.values(personas).filter(
      persona => persona.name !== 'coffee cup'
    );
  }, []);

  const [currentPersonaIndex, setCurrentPersonaIndex] = useState(() =>
    Math.floor(Math.random() * availablePersonas.length)
  );

  const handlePersonaClick = () => {
    setCurrentPersonaIndex((prev) => (prev + 1) % availablePersonas.length);
  };

  const currentPersona = availablePersonas[currentPersonaIndex];

  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="title">which lil tech guy are you</h1>
        <div className="start-persona-image" onClick={handlePersonaClick} style={{ cursor: 'pointer' }}>
          <img src={personaShadow} alt="" className="persona-shadow" />
          <img src={currentPersona.image} alt={currentPersona.name} className="persona-img" />
        </div>
        <button className="start-button" onClick={onStart}>
          start
        </button>
        <p className="credit">
          made by <a href="https://x.com/yescynfria" target="_blank" rel="noopener noreferrer" className="credit-link">cynthia chen</a>
        </p>
      </div>
    </div>
  );
}

export default StartScreen;

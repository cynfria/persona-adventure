import { useMemo } from 'react';
import borderImg from '../assets/border.svg';
import { personas } from '../gameData';
import personaShadow from '../assets/questions/persona-shadow.png';

function StartScreen({ onStart }) {
  const randomPersona = useMemo(() => {
    const personaArray = Object.values(personas).filter(
      persona => persona.name !== 'coffee cup'
    );
    return personaArray[Math.floor(Math.random() * personaArray.length)];
  }, []);

  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="title">which lil tech guy are you</h1>
        <div className="start-persona-image">
          <img src={personaShadow} alt="" className="persona-shadow" />
          <img src={randomPersona.image} alt={randomPersona.name} className="persona-img" />
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

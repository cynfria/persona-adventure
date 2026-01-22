import { useMemo } from 'react';
import borderImg from '../assets/border.svg';
import { personas } from '../gameData';

function StartScreen({ onStart }) {
  const randomPersona = useMemo(() => {
    const personaArray = Object.values(personas);
    return personaArray[Math.floor(Math.random() * personaArray.length)];
  }, []);

  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="title">which lil tech guy are you</h1>
        <div className="start-persona-image">
          <img src={randomPersona.image} alt={randomPersona.name} />
        </div>
        <button className="start-button" onClick={onStart}>
          start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;

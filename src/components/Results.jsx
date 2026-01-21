import { useState, useRef, useEffect } from 'react';
import { personas } from '../gameData';
import borderImg from '../assets/border.svg';

function Results({ persona, onRestart }) {
  const mostCompatible = personas[persona.mostCompatible.id];
  const leastCompatible = personas[persona.leastCompatible.id];
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [viewMode, setViewMode] = useState('result'); // 'result' or 'all-personas'

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rotateY = ((mouseX - cardCenterX) / (rect.width / 2)) * 10;
      const rotateX = ((cardCenterY - mouseY) / (rect.height / 2)) * 10;

      // Calculate shader position (0 to 100)
      const shaderX = ((mouseX - rect.left) / rect.width) * 100;
      const shaderY = ((mouseY - rect.top) / rect.height) * 100;

      setTilt({ rotateX, rotateY, shaderX, shaderY });
    };

    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0, shaderX: 50, shaderY: 50 });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  if (viewMode === 'all-personas') {
    return (
      <div className="results-screen">
        <div className="all-personas-view">
          <button className="back-button" onClick={() => setViewMode('result')}>
            ← Back to Your Result
          </button>

          <h3 className="all-personas-title">Meet All The Friends!</h3>
          <div className="personas-grid">
            {Object.values(personas).map((p) => (
              <div
                key={p.id}
                className={`persona-mini-card ${p.id === persona.id ? 'highlighted' : ''}`}
              >
                {p.id === persona.id && <div className="you-badge">YOU!</div>}
                <img src={p.image} alt={p.name} className="persona-mini-emoji" />
                <h4 className="persona-mini-name">{p.name}</h4>
                <p className="persona-mini-vibe">{p.vibe}</p>
                <div className="persona-mini-traits">
                  {p.traits.map((trait, index) => (
                    <span key={index} className="mini-trait">{trait}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="results-screen">
      <div className="results-content">
        <div
          ref={cardRef}
          className="persona-card-wrapper"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img src={borderImg} alt="" className="persona-card-border" />
          <div
            className="persona-card"
            style={{
              '--shader-x': `${tilt.shaderX || 50}%`,
              '--shader-y': `${tilt.shaderY || 50}%`
            }}
          >
            <h2 className="persona-name">{persona.name}</h2>

          <div className="persona-emoji-large">
            <img src={persona.image} alt={persona.name} />
          </div>

          <div className="traits-badges">
            {persona.traits.map((trait, index) => (
              <span key={index} className="trait-badge">{trait}</span>
            ))}
          </div>

          <div className="compatibility-grid">
            <div className="compatibility-column">
              <h3 className="compat-label">NOT YOUR VIBE 😬</h3>
              <h4 className="compat-persona-name">{leastCompatible.name}</h4>
              <img src={leastCompatible.image} alt={leastCompatible.name} className="compat-emoji-small" />
            </div>

            <div className="compatibility-column">
              <h3 className="compat-label">YOUR BESTIE ✨</h3>
              <h4 className="compat-persona-name">{mostCompatible.name}</h4>
              <img src={mostCompatible.image} alt={mostCompatible.name} className="compat-emoji-small" />
            </div>
          </div>
        </div>
        </div>

        <button className="restart-button" onClick={onRestart}>
          Play Again!
        </button>

        <button
          className="view-all-link"
          onClick={() => setViewMode('all-personas')}
        >
          View all personas
        </button>
      </div>
    </div>
  );
}

export default Results;

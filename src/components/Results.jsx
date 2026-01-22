import { useState } from 'react';
import { personas } from '../gameData';
import borderImg from '../assets/border.svg';
import backArrow from '../assets/arrow.png';

function Results({ persona, onRestart }) {
  const mostCompatible = personas[persona.mostCompatible.id];
  const leastCompatible = personas[persona.leastCompatible.id];
  const [viewMode, setViewMode] = useState('result'); // 'result' or 'all-personas'

  if (viewMode === 'all-personas') {
    return (
      <div className="results-screen">
        <div className="all-personas-view">
          <div className="all-personas-header">
            <button className="back-button" onClick={() => setViewMode('result')}>
              <img src={backArrow} alt="Back" className="back-arrow-img" />
            </button>
            <h3 className="all-personas-title">Meet All The Friends!</h3>
          </div>
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
        <div className="persona-card">
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

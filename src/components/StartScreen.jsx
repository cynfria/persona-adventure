import borderImg from '../assets/border.png';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-card-wrapper">
        <img src={borderImg} alt="" className="start-card-border" />
        <div className="start-content">
        <h1 className="title">Persona Adventure</h1>
        <p className="subtitle">Which lil friend are you?</p>
        <div className="description">
          <p>Welcome to the digital playground! ✨</p>
          <p>Answer some silly questions and discover which of our 10 quirky friends matches your vibe!</p>
        </div>
        <button className="start-button" onClick={onStart}>
          Let's Go!
        </button>
      </div>
      </div>
    </div>
  );
}

export default StartScreen;

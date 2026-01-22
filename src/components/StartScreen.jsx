import borderImg from '../assets/border.svg';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-card-wrapper">
        <img src={borderImg} alt="" className="start-card-border" />
        <div className="start-content">
        <h1 className="title">which lil tech guy are you</h1>
        <button className="start-button" onClick={onStart}>
          start
        </button>
      </div>
      </div>
    </div>
  );
}

export default StartScreen;

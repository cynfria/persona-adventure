import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Results from './components/Results';
import { questions, personas } from './gameData';

function App() {
  const [gameState, setGameState] = useState('start'); // start, playing, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    brickie: 0,
    pixelPuff: 0,
    stickyNote: 0,
    numberNoodle: 0,
    sparkleChaser: 0,
    safetySnail: 0,
    glitchGremlin: 0,
    mossyRock: 0,
    hypeHorn: 0,
    lazyLoop: 0
  });
  const [result, setResult] = useState(null);

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScores({
      brickie: 0,
      pixelPuff: 0,
      stickyNote: 0,
      numberNoodle: 0,
      sparkleChaser: 0,
      safetySnail: 0,
      glitchGremlin: 0,
      mossyRock: 0,
      hypeHorn: 0,
      lazyLoop: 0
    });
  };

  const handleAnswer = (choiceScores) => {
    // Update scores
    const newScores = { ...scores };
    Object.keys(choiceScores).forEach(persona => {
      newScores[persona] += choiceScores[persona];
    });
    setScores(newScores);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const highestScore = Math.max(...Object.values(newScores));
      const winningPersona = Object.keys(newScores).find(
        key => newScores[key] === highestScore
      );
      setResult(personas[winningPersona]);
      setGameState('results');
    }
  };

  const restartGame = () => {
    setGameState('start');
    setResult(null);
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen onStart={startGame} />}
      {gameState === 'playing' && (
        <Question
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {gameState === 'results' && (
        <Results persona={result} onRestart={restartGame} />
      )}
    </div>
  );
}

export default App;

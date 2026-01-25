import { useState, useEffect } from 'react';
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
    bouncyBall: 0,
    lazyLoop: 0,
    coffeeCup: 0,
    sleepyMoon: 0,
    rubberDuck: 0
  });
  const [result, setResult] = useState(null);
  const [answerHistory, setAnswerHistory] = useState([]);

  // Browser history management
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setGameState(event.state.gameState);
        setCurrentQuestion(event.state.currentQuestion);
        setScores(event.state.scores);
        setResult(event.state.result);
        setAnswerHistory(event.state.answerHistory || []);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initialize history with current state
    window.history.replaceState({
      gameState,
      currentQuestion,
      scores,
      result,
      answerHistory
    }, '');

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Cursor trail effect
  useEffect(() => {
    const createTrail = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 800);
    };

    let throttleTimer;
    const handleMouseMove = (e) => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        createTrail(e);
        throttleTimer = null;
      }, 30);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const startGame = () => {
    const newScores = {
      brickie: 0,
      pixelPuff: 0,
      stickyNote: 0,
      numberNoodle: 0,
      sparkleChaser: 0,
      safetySnail: 0,
      glitchGremlin: 0,
      mossyRock: 0,
      bouncyBall: 0,
      lazyLoop: 0,
      coffeeCup: 0,
      sleepyMoon: 0,
      rubberDuck: 0
    };
    setGameState('playing');
    setCurrentQuestion(0);
    setScores(newScores);
    setAnswerHistory([]);

    window.history.pushState({
      gameState: 'playing',
      currentQuestion: 0,
      scores: newScores,
      result: null,
      answerHistory: []
    }, '');
  };

  const handleAnswer = (choiceScores) => {
    // Update scores
    const newScores = { ...scores };
    Object.keys(choiceScores).forEach(persona => {
      newScores[persona] += choiceScores[persona];
    });
    setScores(newScores);

    // Track answer history
    const newAnswerHistory = [...answerHistory, choiceScores];
    setAnswerHistory(newAnswerHistory);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);

      window.history.pushState({
        gameState: 'playing',
        currentQuestion: nextQuestion,
        scores: newScores,
        result: null,
        answerHistory: newAnswerHistory
      }, '');
    } else {
      // Calculate result
      const highestScore = Math.max(...Object.values(newScores));
      const winningPersona = Object.keys(newScores).find(
        key => newScores[key] === highestScore
      );
      const finalResult = personas[winningPersona];
      setResult(finalResult);
      setGameState('results');

      window.history.pushState({
        gameState: 'results',
        currentQuestion,
        scores: newScores,
        result: finalResult,
        answerHistory: newAnswerHistory
      }, '');
    }
  };

  const restartGame = () => {
    setGameState('start');
    setResult(null);
    setCurrentQuestion(0);
    setAnswerHistory([]);

    window.history.pushState({
      gameState: 'start',
      currentQuestion: 0,
      scores: {
        brickie: 0,
        pixelPuff: 0,
        stickyNote: 0,
        numberNoodle: 0,
        sparkleChaser: 0,
        safetySnail: 0,
        glitchGremlin: 0,
        mossyRock: 0,
        bouncyBall: 0,
        lazyLoop: 0,
        coffeeCup: 0,
        sleepyMoon: 0,
        rubberDuck: 0
      },
      result: null,
      answerHistory: []
    }, '');
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

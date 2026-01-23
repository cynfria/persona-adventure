import { useMemo } from 'react';
import borderImg from '../assets/border.svg';

function Question({ question, questionNumber, totalQuestions, onAnswer }) {
  // Shuffle choices for each question
  const shuffledChoices = useMemo(() => {
    const choices = [...question.choices];
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    return choices;
  }, [question.id]);

  return (
    <div className="question-screen">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        ></div>
      </div>
      <div className="question-content">
        <h2 className="scenario">{question.scenario}</h2>
        {question.image && (
          <div className="question-image">
            <img src={question.image} alt={`Question ${questionNumber}`} />
          </div>
        )}
        <div className="choices">
          {shuffledChoices.map((choice, index) => (
            <button
              key={index}
              className="choice-button"
              onClick={() => onAnswer(choice.scores)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;

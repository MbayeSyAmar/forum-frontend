import React from 'react';

function QuestionCard() {
  return (
    <div className="question-card">
      <div className="question-details">
        <h3>Où puis-je m'en procurer?</h3>
        <p>Un bref texte de description du contenu de la question ici...</p>
        <div className="question-meta">
          <span>2 Votes</span>
          <span>5 views</span>
        </div>
      </div>
      <div className="question-actions">
        <button>👍 4000</button>
        <button>👎 5</button>
        <button>💬 23</button>
      </div>
    </div>
  );
}

export default QuestionCard;

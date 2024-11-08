import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Styles de React Quill
import QuestionCard from './QuestionCard';

function MainContent() {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    console.log('Contenu soumis :', content);
    // Logique pour soumettre le contenu, ex. l'envoyer à l'API ou le sauvegarder dans un état global
    setContent(''); // Réinitialiser le contenu après l'envoi
  };

  return (
    <div className="main-content">
      <div className="question-form">
        <label>What are the details of your problem?</label>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder="Describe your issue here..."
          theme="snow"
        />
        <button onClick={handleSubmit} className="submit-button">Envoyer</button>
      </div>
      <div className="questions-list">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}

export default MainContent;

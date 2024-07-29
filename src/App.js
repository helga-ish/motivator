import logo from './logo.svg';
import './App.css';
import React from 'react';
import { notes } from './notes';
import flower1 from './images/flower1.svg';

function App() {

// делаем стейт для языков
  const [language, setLanguage] = React.useState('en');

  // достаем рандомную запись из словарика
  const [note, setNote] = React.useState("");
  function getRandomNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    return setNote(notes[randomIndex]);
  }

  const getNoteText = (note) => {
    if (note) {
      return note.translations[language] || note.translations['en']
    }
    return '';
  }


  // делаем стейты и функции для смены кнопки на текст
  const [isOpen, setIsOpen] = React.useState(false);

    const [isVisible, setIsVisible] = React.useState(true);
    function handleVisibleState() {
        setIsVisible(true);
        setIsOpen(false);
    }
    function handleNotVisibleState() {
      setIsVisible(false);
      setIsOpen(true);
      getRandomNote();
    }

  // переключаем классы в зависимости от того, что открыто: кнопка или текст
  const noteOpen = `motivation-note-container ${isOpen ? '' : 'motivation-note-container_disabled'}`;
  const buttonVisible = `button ${!isVisible ? 'button_disabled' : ''}`;

  return (
    <div className="App">
      <header className="App-header">
        <div className="change-languages">
          <button className='change-languages_button' onClick={() => setLanguage('en')}>English</button>
          <button className='change-languages_button' onClick={() => setLanguage('ru')}>Русский</button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        
        <button className={buttonVisible} onClick={!isVisible ? handleVisibleState : handleNotVisibleState}>Find your motivation and affirmation here</button>
        <div className={noteOpen}>
          <p className="motivation-note">{getNoteText(note)}</p>
          <div className='motivation-note-back-container'>
            <img src={flower1} className='note-flower' onClick={!isVisible ? handleVisibleState : handleNotVisibleState} />
            <button className='note-button' onClick={!isVisible ? handleVisibleState : handleNotVisibleState}>Back</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

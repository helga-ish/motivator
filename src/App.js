import logo from './logo.svg';
import './App.css';
import React from 'react';
import { notes } from './notes';
import { motivationButtonText } from './motivationButton'
import flower1 from './images/flower1.svg';
import ruLang from './images/ru_language.png';
import engLang from './images/eng_language.png';

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
          <button className={`change-languages_button ${language === 'en' ? 'active' : 'inactive'}`} onClick={() => setLanguage('en')}><img src={engLang} className='change-languages_button_eng' />English</button>
          <button className={`change-languages_button ${language === 'ru' ? 'active' : 'inactive'}`} onClick={() => setLanguage('ru')}><img src={ruLang} className='change-languages_button_ru'/>Русский</button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        
        <button className={buttonVisible} onClick={!isVisible ? handleVisibleState : handleNotVisibleState}>{motivationButtonText[language].motivation}</button>
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

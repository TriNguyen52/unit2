import React, {useState} from 'react';
import './App.css';

const cardData = [
  { id: 1, question: 'This painting titled “Portrait of Pope Innocent X" was painted by...', answer: 'Diego Velazquez', image: 'https://www.proprofs.com/quiz-school/user_upload/ckeditor/Velazquez%20Portrait%20of%20Pope%20Innocent%20X%201650(1).jpg', difficulty: 'easy', subject: 'Biology' },
  { id: 2, question: 'True or False: This frescoe is painted by Michelangelo', answer: 'True',image:'https://www.proprofs.com/quiz-school/user_upload/ckeditor/prophet%20Isaiah(1).jpg' ,difficulty: 'easy', subject: 'Chemistry' },
  { id: 3, question: 'What is the title of the sculpture and who did it?', answer: 'Bird in Space by Constantin Brâncuşi', difficulty: 'medium', subject: 'Earth Science' },
  { id: 4, question: 'Which artist painted "The Starry Night"?', answer: 'Vincent van Gogh', difficulty: 'easy', subject: 'Art History' },
  { id: 5, question: 'What is the name of the famous sculpture of a seated man by Auguste Rodin?', answer: 'The Thinker', difficulty: 'medium', subject: 'Art History' },
  { id: 6, question: 'Which movement is Pablo Picasso associated with?', answer: 'Cubism', difficulty: 'medium', subject: 'Art History' },
  { id: 7, question: 'Who painted "The Persistence of Memory" featuring melting clocks?', answer: 'Salvador Dalí', difficulty: 'easy', subject: 'Art History' },
  { id: 8, question: 'What is the title of the fresco painted by Michelangelo on the ceiling of the Sistine Chapel?', answer: 'The Creation of Adam', difficulty: 'hard', subject: 'Art History' },
  { id: 9, question: 'Which Dutch artist is known for his detailed engravings and woodcuts, such as "Knight, Death, and the Devil"?', answer: 'Albrecht Dürer', difficulty: 'hard', subject: 'Art History' },
  { id: 10, question: 'Which famous mural by Leonardo da Vinci depicts Jesus and his disciples at the Last Supper?', answer: 'The Last Supper', difficulty: 'easy', subject: 'Art History' }
];

const App = () => {

  // State variables
  const [currentCard, setCurrentCard] = useState(cardData[0]); // Current card object
  const [showAnswer, setShowAnswer] = useState(false); // Whether to show question or answer
  const [count, setCount] = useState(1); // Initialize count state

  const updateCount = () => setCount(count);

  // Function to switch to a random card
  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCard(cardData[randomIndex]);
    setShowAnswer(false); // Reset to question when switching
    setCount(count + 1);
  };

  // Function to toggle between question and answer
  const toggleCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>By touch we create!</h1>
        <h2>Welcome to the test of world art history!</h2>
        <h3>Count: {count}</h3>
      </div>
      <div className={`card ${currentCard.difficulty}`}>
        {currentCard.image && <img src={currentCard.image} alt={currentCard.question} />}
        <div className="card-content" onClick={toggleCard}>
          <h2>{showAnswer ? currentCard.answer : currentCard.question}</h2>
        </div>
      </div>
      <button onClick={nextCard}>( ͡° ͜ʖ ͡°)</button>
    </div>
  )
}

export default App
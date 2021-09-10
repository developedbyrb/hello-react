import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import Button from './element/Button';
import axios from 'axios';

const theme = {
  primary: '#4CAF50',
  secondary: 'Yellow'
};
function App() {
  const [cards, setCards] = useState([]);
  const [showCard, setShowCard] = useState(true);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log('res', res);
        setCards(res.data);
      });
  }, [])
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const copy_cards = [...cards];
    copy_cards.splice(cardIndex, 1);
    setCards(copy_cards);
  };
  const changeNameHandler = (event, id) => {
    const cardIndex = cards.findIndex(card => card.id === id);
    const card_copy = [...cards];
    card_copy[cardIndex].name = event.target.value;
    setCards(card_copy);
  }
  const cardMarkup = (
    cards.map((card, index) => <Card
      name={card.name}
      phone={card.phone}
      key={card.id}
      onDelete={() => deleteCardHandler(index)}
      onChangeName={(event) => changeNameHandler(event, card.id)}
    />
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="secondary" onClick={toggleShowCard} length={cards.length}>{showCard ? 'Hide Cards' : 'Show Cards'}</Button>
        {showCard && cardMarkup}
      </div >
    </ThemeProvider>
  );
}

export default App;

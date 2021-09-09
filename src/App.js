import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import Button from './element/Button';

const theme = {
  primary: '#4CAF50',
  secondary: 'Yellow'
};
function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Rahul Bhilesha',
      title: 'Project Manager',
      avtar: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'
    },
    {
      id: 2,
      name: 'Developer Bhilesha',
      title: 'Designer',
      avtar: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      id: 3,
      name: 'Alvero morte',
      title: 'Developer',
      avtar: 'https://images.unsplash.com/photo-1573997960962-858fb33936bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ]);
  const [showCard, setShowCard] = useState(true);
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
      avatar={card.avtar}
      name={card.name}
      title={card.title}
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

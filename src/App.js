import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [name, setName] = useState('Rahul Bhilesha');
  const [showCard, setShowCard] = useState(true);
  const changeNameHandler = name => setName(name);
  const changeInputHandler = event => setName(event.target.value);
  const toggleShowCard = () => setShowCard(!showCard);
  const buttonMarkup = (
    <div>
      <button className="button button2">Yes</button>
      <button className="button button3">No</button>
    </div>
  );
  const cardMarkup = (
    <Card avatar={'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'} name={name} title={'Internal Response Officer'} onChangeName={() => changeNameHandler('Bhilesha Rahul')} onChangeInput={changeInputHandler}>
      {buttonMarkup}
    </Card>
  );
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>{showCard ? 'Hide Card' : 'Show Card'}</button>
      {showCard && cardMarkup}
    </div >
  );
}

export default App;

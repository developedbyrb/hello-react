import React from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
  return (
    <div className="App">
      <Card avatar={faker.image.avatar()} name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()}></Card>
      <Card avatar={faker.image.avatar()} name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()}></Card>
    </div>
  );
}

export default App;

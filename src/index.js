import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random() * 1000) + 1;


const greeting = user => {
  return (
    <div className="container">
      <h1>Hello {user.name}</h1>
      <h2 className="text-muted">Your lucky number is {user.luckyNumber}</h2>
    </div>
  )
}

const person = {
  name: 'Johnny',
  luckyNumber: luckyNumber()
}

ReactDOM.render(
    <h1 className="container">{greeting(person)}</h1>,
    document.getElementById('root')
);

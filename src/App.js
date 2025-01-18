import './App.css';

import React from 'react';

const questions = [
  {
    questionText: 'Wat is de hoofdstad van Frankrijk?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Wie is de oprichter van Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'Welk bedrijf was eind jaren 90 bijna failliet?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'Hoeveel Harry Potter boeken zijn er?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
  {
    questionText: 'Wat is GEEN Cryptomunt?',
    answerOptions: [
      { answerText: 'Bitcoin', isCorrect: false },
      { answerText: 'EOS', isCorrect: false },
      { answerText: 'Pancake Swap', isCorrect: false },
      { answerText: 'XOTA-XL', isCorrect: true },
    ],
  },
  {
    questionText: 'Hoeveel wielen heeft een Tricycle?',
    answerOptions: [
      { answerText: '2', isCorrect: false },
      { answerText: '3', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '1', isCorrect: false },
    ],
  },
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vraagNr: 0,
      score: 0
    }
    // this.getNumbers();
  }

  handleAnswerOptionClick(isCorrect) {
    console.log("Button clicked");
    if (isCorrect) {
      console.log("Antwoord is goed!");
    }else{
      console.log("Antwoord is fout!");
    }

    if ( this.state.vraagNr < questions.length - 1) {
      this.setState( {'vraagNr': this.state.vraagNr+1} );
    }
  }

  render() {
    var antwoorden = questions[this.state.vraagNr].answerOptions;

    return (
      <div className="app">
        <div>{questions[this.state.vraagNr].questionText}</div>
        <button onClick={() => this.handleAnswerOptionClick(antwoorden[0].isCorrect)}>{antwoorden[0].answerText}</button>
        <button onClick={() => this.handleAnswerOptionClick(antwoorden[1].isCorrect)}>{antwoorden[1].answerText}</button>
        <button onClick={() => this.handleAnswerOptionClick(antwoorden[2].isCorrect)}>{antwoorden[2].answerText}</button>
        <button onClick={() => this.handleAnswerOptionClick(antwoorden[3].isCorrect)}>{antwoorden[3].answerText}</button>
      </div>
    );
  }


}

export default App;
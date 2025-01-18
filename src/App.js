import './App.css';

import React from 'react';

// const questions = [
//   {
//     questionText: 'Wat is de hoofdstad van Frankrijk?',
//     answerOptions: [
//       { answerText: 'New York', isCorrect: false },
//       { answerText: 'London', isCorrect: false },
//       { answerText: 'Paris', isCorrect: true },
//       { answerText: 'Dublin', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'Wie is de oprichter van Tesla?',
//     answerOptions: [
//       { answerText: 'Jeff Bezos', isCorrect: false },
//       { answerText: 'Elon Musk', isCorrect: true },
//       { answerText: 'Bill Gates', isCorrect: false },
//       { answerText: 'Tony Stark', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'Welk bedrijf was eind jaren 90 bijna failliet?',
//     answerOptions: [
//       { answerText: 'Apple', isCorrect: true },
//       { answerText: 'Intel', isCorrect: false },
//       { answerText: 'Amazon', isCorrect: false },
//       { answerText: 'Microsoft', isCorrect: false },
//     ],
//   },
//   {
//     questionText: 'Hoeveel Harry Potter boeken zijn er?',
//     answerOptions: [
//       { answerText: '1', isCorrect: false },
//       { answerText: '4', isCorrect: false },
//       { answerText: '6', isCorrect: false },
//       { answerText: '7', isCorrect: true },
//     ],
//   },
//   {
//     questionText: 'Wat is GEEN Cryptomunt?',
//     answerOptions: [
//       { answerText: 'Bitcoin', isCorrect: false },
//       { answerText: 'EOS', isCorrect: false },
//       { answerText: 'Pancake Swap', isCorrect: false },
//       { answerText: 'XOTA-XL', isCorrect: true },
//     ],
//   },
//   {
//     questionText: 'Hoeveel wielen heeft een Tricycle?',
//     answerOptions: [
//       { answerText: '2', isCorrect: false },
//       { answerText: '3', isCorrect: true },
//       { answerText: '4', isCorrect: false },
//       { answerText: '1', isCorrect: false },
//     ],
//   },
// ];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vraagNr: 0,
      score: 0,
      stop: false
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://localhost:8080/quizes/api-get')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          jsonLoaded: true,
          jsonData: data
        });
      })
      .catch(console.log);
  }

  handleAnswerOptionClick(isCorrect) {
    console.log("Button clicked");
    if (isCorrect) {
      this.setState({ 'score': this.state.score + 1 });
    }
    if (this.state.vraagNr < this.state.jsonData.length - 1) {
      this.setState({ 'vraagNr': this.state.vraagNr + 1 });
    } else {
      this.setState({ 'stop': true });
    }
  }

  render() {
    if (!this.state.jsonLoaded) {
      return (<div className="app">loading...</div>)
    }

    var questions = this.state.jsonData;
    var antwoorden = questions[this.state.vraagNr].answerOptions;

    return (
      <div className="app">
        {this.state.stop ?  // hier testen we of we moeten stoppen, als we moeten stoppen laat dan het einde zien.
          (
            <div className='score'>
              Jouw score is {this.state.score} van de {questions.length}
            </div>
          )
          : // dit is de else, we stoppen dus niet en laten de volgende vraag zien
          (
            <>
              <div className="column">
                <span>Vraag {this.state.vraagNr + 1} van {questions.length}</span>
                <span className="question">{questions[this.state.vraagNr].questionText}</span>
              </div>

              <div className="column uitlijnen">
                {antwoorden.map((antwoord) => (
                  <button onClick={() => this.handleAnswerOptionClick(antwoord.isCorrect)}>{antwoord.answerText} {antwoord.isCorrect}</button>
                ))}
              </div>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
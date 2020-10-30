import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import questionBank from "./questionBank";
import QuestionBox from "./QuestionBox";

class App extends React.Component {
  state = {
    questions: [],
    score: 0,
    questionCount: 0,
  };

  setQuestions = () => {
    questionBank().then((question) => {
      this.setState({
        questions: question,
      });
    });
  };

  componentDidMount() {
    this.setQuestions();
  }

  selectedAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      questionCount:
        this.state.questionCount < 21 ? this.state.questionCount + 1 : 21,
    });
  };
  render() {
    console.log("this.state.questionCount", this.state.questionCount);
    console.log("this.state.score", this.state.score);
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
          </Router>
        </header>
        <div>
          {this.state.questions.length > 0 &&
            this.state.questionCount < 21 &&
            this.state.questions.map(
              ({ question, incorrect, correct, questionId }) => (
                <QuestionBox
                  key={questionId}
                  question={question}
                  incorrect={incorrect}
                  correct={correct}
                  selected={(answer) => this.selectedAnswer(answer, correct)}
                />
              )
            )}
          {this.state.questionCount === 21 ? (
            <div>
              <h1>USER SCORE</h1>
              <h2>{this.state.score}</h2>
              <img
                src="https://cdn3.whatculture.com/images/2019/10/cd5d7dd0451193b6-600x338.jpg"
                className="App-logo"
                alt="logo"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

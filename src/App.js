import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import questionBank from "./questionBank";
import QuestionBox from "./QuestionBox";
import AllQuestions from "./AllQuestions";

class App extends React.Component {
  state = {
    questions: [],
    score: 0,
    questionCount: 1,
    showAnswer: "",
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
        showAnswer: correctAnswer,
      });
    } else {
      this.setState({
        showAnswer: correctAnswer,
      });
    }
    this.setState({
      questionCount:
        this.state.questionCount < 10 ? this.state.questionCount + 1 : 10,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
          </Router>
        </header>
        <div>
          {this.state.questionCount < 10 ? (
            <h1>Question# {this.state.questionCount}</h1>
          ) : (
            <h1>GAME OVER</h1>
          )}
          <div className="userscore">
            {this.state.score && this.state.questionCount === 10 ? (
              <h1>User Score: {this.state.score + 1}</h1>
            ) : (
              <h1>User Score: {this.state.score}</h1>
            )}
          </div>
          {this.state.questions[this.state.questionCount] ? (
            <QuestionBox
              key={this.state.questionCount}
              question={this.state.questions[this.state.questionCount].question}
              incorrect={
                this.state.questions[this.state.questionCount].incorrect
              }
              correct={this.state.questions[this.state.questionCount].correct}
              selected={(answer) =>
                this.selectedAnswer(
                  answer,
                  this.state.questions[this.state.questionCount].correct
                )
              }
            />
          ) : null}

          {this.state.questionCount === 10 ? (
            <div>
              <img
                src="https://cdn3.whatculture.com/images/2019/10/cd5d7dd0451193b6-600x338.jpg"
                className="App-logo"
                alt="logo"
              />
            </div>
          ) : null}
        </div>
        <div className="showAnswer">
          {this.state.showAnswer === "" ? null : (
            <h4>
              The Correct Answer to the last question was{" "}
              <strong>{this.state.showAnswer}</strong>
            </h4>
          )}
        </div>

        <div>
          <h5>ALL the Questions</h5>
          <AllQuestions questions={this.state.questions} />
        </div>
      </div>
    );
  }
}

export default App;

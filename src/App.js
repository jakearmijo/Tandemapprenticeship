import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import questionBank from "./questionBank";
import QuestionBox from "./QuestionBox";
import AllQuestions from "./AllQuestions";
// import { theQuestionBank } from "../Apprentice_TandemFor400_Data.json";

class App extends React.Component {
  state = {
    questions: [],
    score: 0,
    questionCount: 1,
    showAnswer: "",
    displayQuestions: false,
  };

  displayQuestion = () => {
    this.setState({
      displayQuestions: !this.state.displayQuestions,
    });
  };

  setQuestions = () => {
    questionBank().then((question) => {
      this.setState({
        questions: question,
      });
    });
    // const questionBank = JSON.parse(theQuestionsBankExport);
    // this.setState({
    //   questions: questionBank,
    // });
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
    const theQuestionCount = this.state.questionCount;
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
          </Router>
        </header>
        <div>
          {theQuestionCount < 10 ? (
            <h1>Question# {theQuestionCount}</h1>
          ) : (
            <h1>GAME OVER</h1>
          )}
          <div className="userscore">
            {this.state.score && theQuestionCount === 10 ? (
              <h1>Bamboozled Score: {this.state.score + 1}</h1>
            ) : (
              <h1>Bamboozled Score: {this.state.score}</h1>
            )}
          </div>
          {theQuestionCount < 10 ? (
            <div>
              {this.state.questions[theQuestionCount] ? (
                <QuestionBox
                  key={theQuestionCount}
                  question={this.state.questions[theQuestionCount].question}
                  incorrect={this.state.questions[theQuestionCount].incorrect}
                  correct={this.state.questions[theQuestionCount].correct}
                  selected={(answer) =>
                    this.selectedAnswer(
                      answer,
                      this.state.questions[theQuestionCount].correct
                    )
                  }
                />
              ) : null}
            </div>
          ) : null}

          {theQuestionCount === 10 ? (
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
          <button onClick={this.displayQuestion}>
            CLICK ME TO SEE ALL QUESTIONS
          </button>
          {this.state.displayQuestions === false ? null : (
            <div>
              <h5>ALL the Questions</h5>
              <AllQuestions
                data-testid="all-questions-test"
                questions={this.state.questions}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

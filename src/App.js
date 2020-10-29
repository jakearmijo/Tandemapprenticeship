import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
          </Router>
          <img
            src="https://cdn3.whatculture.com/images/2019/10/cd5d7dd0451193b6-600x338.jpg"
            className="App-logo"
            alt="logo"
          />
        </header>
      </div>
    );
  }
}

export default App;

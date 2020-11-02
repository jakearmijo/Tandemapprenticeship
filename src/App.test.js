import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("A user can view questions.", () => {
  const state = {
    questions: [
      {
        question: "What was Tandem previous name?",
        incorrect: [
          "Tandem",
          "Devmynd",
          "Burger Shack",
          "Extraordinary Humans",
        ],
        correct: "Devmynd",
        questionId: 0,
      },
      {
        question:
          "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        incorrect: [
          "Iacta alea est!",
          "Vidi, vini, vici",
          "Aegri somnia vana",
          "Et tu, Brute?",
        ],
        correct: "Et tu, Brute?",
        questionId: 1,
      },
      {
        question: "A group of tigers are referred to as:",
        incorrect: ["Chowder", "Ambush", "Pride", "Destruction"],
        correct: "Ambush",
        questionId: 2,
      },
      {
        question: "What is the top speed an average cat can travel?",
        incorrect: ["42 mph", "31 mph", "13 mph", "9 mph"],
        correct: "31 mph",
        questionId: 3,
      },
      {
        question: "A cat can jump to _____ times its own height:",
        incorrect: ["5", "3", "9", "7"],
        correct: "5",
        questionId: 4,
      },
      {
        question:
          "What is the only letter that doesn't appear in a US state name?",
        incorrect: ["M", "Z", "Q", "X"],
        correct: "Q",
        questionId: 5,
      },
      {
        question: "What is the name for a cow-bison hybrid?",
        incorrect: ["Cowson", "Beefalo", "Bicow", "Mooson"],
        correct: "Beefalo",
        questionId: 6,
      },
      {
        question: "What is the largest freshwater lake in the world?",
        incorrect: [
          "Lake Baikal",
          "Lake Michigan",
          "Lake Superior",
          "Lake Victoria",
        ],
        correct: "Lake Superior",
        questionId: 7,
      },

      {
        question: "In a website address bar, what does WWW stand for?",
        incorrect: [
          "World Wide Web",
          "Wacky Wailing Warabees",
          "Wild Wild West",
          "War World Web",
        ],
        correct: "World Wide Web",
        questionId: 8,
      },
      {
        question:
          "In a game of bingo, what number is represented by the name two little ducks?",
        incorrect: ["20", "55", "22", "77"],
        correct: "22",
        questionId: 9,
      },
      {
        question:
          "According to Greek mythology, who was the first woman on Earth?",
        incorrect: ["Pandora", "Lilith", "Eve", "Hera"],
        correct: "Pandora",
        questionId: 10,
      },
      {
        question: "In which European city would you find Orly airport?",
        incorrect: ["London", "Belgium", "Munich", "Paris"],
        correct: "Paris",
        questionId: 11,
      },
      {
        question: "Where would you find the Sea of Tranquility?",
        incorrect: ["California", "The Moon", "Siberia", "China"],
        correct: "The Moon",
        questionId: 12,
      },
      {
        question: "Which artist painted 'Girl with a Pearl Earrin'?",
        incorrect: ["Vermeer", "Van Gogh", "Picasso", "Da Vinci"],
        correct: "Vermeer",
        questionId: 13,
      },
      {
        question: "What is the official name for the 'hashtag' symbol?",
        incorrect: ["Number sign", "Hash Sign", "Octothorpe", "Pound"],
        correct: "Octothorpe",
        questionId: 14,
      },
      {
        question: "Not American at all, where is apple pie from?",
        incorrect: ["Japan", "England", "Ethiopia", "Canada"],
        correct: "England",
        questionId: 15,
      },
      {
        question: "What is the national animal of Scotland?",
        incorrect: ["Bear", "Rabbit", "Seal", "Unicorn"],
        correct: "Unicorn",
        questionId: 16,
      },
      {
        question:
          "Where in the world is the only place where Canada is *due south*",
        incorrect: ["Alaska", "Russia", "Detroit", "Washington"],
        correct: "Detroit",
        questionId: 17,
      },
      {
        question: "Approximately how many grapes go into a bottle of wine?",
        incorrect: ["700", "500", "200", "1000"],
        correct: "700",
        questionId: 18,
      },
      {
        question: "How much does a US One Dollar Bill cost to make?",
        incorrect: ["$0.25", "$1", "$0.05", "$5"],
        correct: "$0.05",
        questionId: 19,
      },
      {
        question:
          "The Vatican bank has the only ATM in the world that allows users to do what?",
        incorrect: [
          "Receive withdrawls in rosary beads",
          "Vote for the Pope",
          "Perform transactions in Latin",
          "Purchase indulgences",
        ],
        correct: "Perform transactions in Latin",
        questionId: 20,
      },
    ],
    score: 0,
    questionCount: 1,
    showAnswer: "",
  };

  expect(state.questions.length === 20).toMatch(20);
});

test("Questions with their multiple choice options must be displayed one at a time.", () => {});

xtest("Questions should not repeat in a round.", () => {});

xtest("A user can select only 1 answer out of the 4 possible answers.", () => {});

xtest("The correct answer must be revealed after a user has submitted their answer", () => {});

xtest("A user can see the score they received at the end of the round", () => {});

const questionBank = [
  {
    question: "What was Tandem previous name?",
    incorrect: ["Tandem", "Devmynd", "Burger Shack", "Extraordinary Humans"],
    correct: "Devmynd",
    questionId: 1,
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
    questionId: 2,
  },
  {
    question: "A group of tigers are referred to as:",
    incorrect: ["Chowder", "Ambush", "Pride", "Destruction"],
    correct: "Ambush",
    questionId: 3,
  },
  {
    question: "What is the top speed an average cat can travel?",
    incorrect: ["42 mph", "31 mph", "13 mph", "9 mph"],
    correct: "31 mph",
    questionId: 4,
  },
  {
    question: "A cat can jump to _____ times its own height:",
    incorrect: ["5", "3", "9", "7"],
    correct: "5",
    questionId: 5,
  },
  {
    question: "What is the only letter that doesn't appear in a US state name?",
    incorrect: ["M", "Z", "Q", "X"],
    correct: "Q",
    questionId: 6,
  },
  {
    question: "What is the name for a cow-bison hybrid?",
    incorrect: ["Cowson", "Beefalo", "Bicow", "Mooson"],
    correct: "Beefalo",
    questionId: 7,
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
    questionId: 8,
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
    questionId: 9,
  },
  {
    question:
      "In a game of bingo, what number is represented by the name two little ducks?",
    incorrect: ["20", "55", "22", "77"],
    correct: "22",
    questionId: 10,
  },
  {
    question: "According to Greek mythology, who was the first woman on Earth?",
    incorrect: ["Pandora", "Lilith", "Eve", "Hera"],
    correct: "Pandora",
    questionId: 11,
  },
  {
    question: "In which European city would you find Orly airport?",
    incorrect: ["London", "Belgium", "Munich", "Paris"],
    correct: "Paris",
    questionId: 12,
  },
  {
    question: "Where would you find the Sea of Tranquility?",
    incorrect: ["California", "The Moon", "Siberia", "China"],
    correct: "The Moon",
    questionId: 13,
  },
  {
    question: "Which artist painted 'Girl with a Pearl Earrin'?",
    incorrect: ["Vermeer", "Van Gogh", "Picasso", "Da Vinci"],
    correct: "Vermeer",
    questionId: 14,
  },
  {
    question: "What is the official name for the 'hashtag' symbol?",
    incorrect: ["Number sign", "Hash Sign", "Octothorpe", "Pound"],
    correct: "Octothorpe",
    questionId: 15,
  },
  {
    question: "Not American at all, where is apple pie from?",
    incorrect: ["Japan", "England", "Ethiopia", "Canada"],
    correct: "England",
    questionId: 16,
  },
  {
    question: "What is the national animal of Scotland?",
    incorrect: ["Bear", "Rabbit", "Seal", "Unicorn"],
    correct: "Unicorn",
    questionId: 17,
  },
  {
    question:
      "Where in the world is the only place where Canada is *due south*",
    incorrect: ["Alaska", "Russia", "Detroit", "Washington"],
    correct: "Detroit",
    questionId: 18,
  },
  {
    question: "Approximately how many grapes go into a bottle of wine?",
    incorrect: ["700", "500", "200", "1000"],
    correct: "700",
    questionId: 19,
  },
  {
    question: "How much does a US One Dollar Bill cost to make?",
    incorrect: ["$0.25", "$1", "$0.05", "$5"],
    correct: "$0.05",
    questionId: 20,
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
    questionId: 21,
  },
];

const theQuestionsBankExport = (n = 21) =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));

export default theQuestionsBankExport;

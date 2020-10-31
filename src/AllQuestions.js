import React from "react";

export default function AllQuestions({ questions }) {
  return (
    <div>
      <div>
        {!questions.length
          ? null
          : questions.map((question, index) => (
              <div key={index}>
                <h5>{question.question}</h5>
              </div>
            ))}
      </div>
    </div>
  );
}

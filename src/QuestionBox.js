import React, { useState } from "react";

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 15px solid white;
  color: palevioletred;
  margin: 0 5em;
  padding: 1em 4em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
const Container = styled.div`
  text-align: center;
`;

export default function QuestionBox({
  question,
  incorrect,
  selected,
  correct,
}) {
  const [answer, setAnswer] = useState(incorrect);
  return (
    <div className="questionBox">
      <div className="question">
        <h2>{question}</h2>
        {answer.map((text, index) => (
          <Container key={index}>
            <Button
              primary
              onClick={() => {
                setAnswer([text]);
                selected(text);
              }}
            >
              {text}
            </Button>
          </Container>
        ))}
      </div>
    </div>
  );
}

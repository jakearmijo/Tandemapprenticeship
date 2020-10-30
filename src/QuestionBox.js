import React, { useState } from "react";

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

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

export default function QuestionBox({ question, incorrect, selected }) {
  const [answer, setAnswer] = useState(incorrect);
  return (
    <div className="questionBox">
      <div className="question">
        {question}
        {answer.map((text, index) => (
          <Container>
            <Button
              primary
              key={index}
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

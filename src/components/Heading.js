// src/components/Heading.js
import React from 'react';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const HeadingText = styled.h1`
  font-size: 2.5rem;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #007bff, #00d084);
    border-radius: 5px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Heading = () => {
  return (
    <HeadingContainer>
      <HeadingText>Todo List</HeadingText>
    </HeadingContainer>
  );
};

export default Heading;

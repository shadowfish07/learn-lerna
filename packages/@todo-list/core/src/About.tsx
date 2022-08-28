import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function About() {
  return (
    <StyledAbout>
      <h1>Hi</h1>
      <p>这是一个简单的TodoList，用来实验lerna/React-Router</p>
      <Link to="/">回到主页</Link>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 20px;
`;

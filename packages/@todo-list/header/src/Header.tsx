import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #bababa;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  h1 {
    margin: 0;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <h1>Hello-Todo-List</h1>
    </StyledHeader>
  );
}

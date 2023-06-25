import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Main = styled.main`
  height: 300px;
`;

export default function ThemeMain() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Main>
      <h1>ThemeMain</h1>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <p>현재 Theme = {theme}</p>
    </Main>
  );
}

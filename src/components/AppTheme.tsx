import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeFooter from "./ThemeFooter";
import ThemeHeader from "./ThemeHeader";
import ThemeMain from "./ThemeMain";

export default function AppTheme() {
  return (
    <div>
      <ThemeProvider>
        <ThemeHeader />
        <ThemeMain />
        <ThemeFooter />
      </ThemeProvider>
    </div>
  );
}

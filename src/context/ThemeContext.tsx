import { createContext, useState } from "react";

type ThemeMode = "light" | "dark";

type Theme = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<Theme>({
  theme: "light",
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  let [theme, setTheme] = useState<ThemeMode>("light");
  const toggleTheme = () => {
    setTheme((prev) => (theme = prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

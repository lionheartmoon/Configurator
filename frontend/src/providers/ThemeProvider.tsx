import { ThemeContext } from "contexts/themeContext";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "themes/themes";

export enum ETheme {
  LIGHT_THEME = "lightTheme",
  DARK_THEME = "darkTheme",
}

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(
    (localStorage.getItem("theme") as ETheme) ?? ETheme.DARK_THEME
  );

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ETheme.LIGHT_THEME ? ETheme.DARK_THEME : ETheme.LIGHT_THEME
    );
    localStorage.setItem(
      "theme",
      theme === ETheme.LIGHT_THEME ? ETheme.DARK_THEME : ETheme.LIGHT_THEME
    );
  };

  // const muiTheme = useMemo(() => {
    // return theme === ETheme.LIGHT_THEME ? lightTheme : darkTheme;
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme === ETheme.LIGHT_THEME ? lightTheme : darkTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

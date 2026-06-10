import { useMemo } from "react";
import { Sun, Moon } from "lucide-react";
import { observer } from "mobx-react-lite";
import { ETheme } from "providers/ThemeProvider";
import { useThemeContext } from "contexts/themeContext";
import { CIconsButton } from "components/ui/CIconsButton/CIconsButton";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  const isDarkTheme = useMemo(() => theme === ETheme.DARK_THEME, [theme]);

  return (
    <CIconsButton
      icon={isDarkTheme ? <Moon size={16} /> : <Sun size={16} />}
      onClick={toggleTheme}
      tooltipText={isDarkTheme ? "Светлая тема" : "Темная тема"}
    />
  );
};

export default observer(ToggleThemeButton);

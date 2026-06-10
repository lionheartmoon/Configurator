import { observer } from "mobx-react-lite";
import { Button, ButtonProps } from "@mui/material";
import RefreshIcon from "components/Icons/RefreshIcon/RefreshIcon";
import { useThemeContext } from "contexts/themeContext";

interface Props extends ButtonProps {
  title: string;
  onRefresh: () => void;
}

export const RefreshButton = observer(({ title, onRefresh, ...props }: Props) => {
  const { theme } = useThemeContext();

  const isDarkTheme = theme === "darkTheme";

  return (
    <Button
      size="small"
      onClick={onRefresh}
      startIcon={
        <RefreshIcon color={isDarkTheme ? "#90caf9" : "#548c87"} height="18px" />
      }
      {...props}
    >
      <span style={{ lineHeight: 1 }}>{title}</span>
    </Button>
  );
});

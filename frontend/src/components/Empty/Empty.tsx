import { ReactNode, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useEmptyStyles } from "./Empty.styles";
import { useThemeContext } from "contexts/themeContext";
import { ETheme } from "providers/ThemeProvider";
import EmptyIcon from "components/Icons/EmptyIcon/EmptyIcon";
import { RefreshButton } from "components/RefreshButton/RefreshButton";

interface Props {
  title?: string;
  description?: ReactNode;
  onRefresh?: () => void;
  height?: string | number;
}

const Empty = ({
  description,
  onRefresh,
  title = "Нет данных",
  height = "100%",
}: Props) => {
  const { classes } = useEmptyStyles();
  const { theme } = useThemeContext();

  const isDarkTheme = useMemo(() => theme === ETheme.DARK_THEME, [theme]);

  return (
    <Box className={classes.emptyWrapper} sx={{ height }}>
      <EmptyIcon
        color={isDarkTheme ? "#5d637a" : "#f5f5f5"}
        stroke={isDarkTheme ? "#363a4b" : "#d9d9d9"}
      />
      <Box className={classes.titleWrapper}>
        <Typography className={classes.title}>{title}</Typography>
        {onRefresh && <RefreshButton title="обновить" onRefresh={onRefresh} />}
      </Box>
      {description}
    </Box>
  );
};

export default Empty;

import { Box, Typography } from "@mui/material";
import { useNavItemStyles } from "./NavItem.styles";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  icon: ReactNode;
  path?: string;
}

export const NavItem = ({ name, icon, path }: Props) => {
  const navigate = useNavigate();

  const isActive = path && window.location.pathname === path;

  const handleChangePage = () => {
    if (!path) return;

    navigate(path);
  };

  const { classes, cx } = useNavItemStyles();
  return (
    <Box
      className={cx(classes.container, isActive && classes.active)}
      onClick={handleChangePage}
    >
      {icon}
      <Typography>{name}</Typography>
    </Box>
  );
};

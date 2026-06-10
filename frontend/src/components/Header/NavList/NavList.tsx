import { Box } from "@mui/material";
import { useNavListStyles } from "./NavList.styles";
import { NavItem } from "../NavItem/NavItem";
import { mainMenu } from "router/mainMenu";
import { EMainMenuTitle, translatedMenuTitle } from "helpers/mainTitles";

export const NavList = () => {
  const { classes } = useNavListStyles();
  return (
    <Box className={classes.container}>
      {mainMenu.map(({ icon, title, path }) => {
        const Icon = icon;
        return (
          <NavItem
            key={title}
            icon={<Icon size={14} />}
            name={translatedMenuTitle[title as keyof typeof EMainMenuTitle]}
            path={path}
          />
        );
      })}
    </Box>
  );
};

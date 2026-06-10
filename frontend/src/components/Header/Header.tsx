import {
  AppBar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useHeaderStyles } from "./Header.styles";
import ToggleThemeButton from "components/ToggleThemeButton/ToggleThemeButton";
import { LogoIcon } from "components/Icons/LogoIcon/LogoIcon";
import { appTexts } from "appTexts/appTexts";
import { CIconsButton } from "components/ui/CIconsButton/CIconsButton";
import { UserRoundCog } from "lucide-react";
import { useState } from "react";
import { Help, Logout, Settings } from "@mui/icons-material";
import { NavList } from "./NavList/NavList";
import { observer } from "mobx-react-lite";
import { useSettingsContext } from "contexts/settingsContext";
import { useNavigate } from "react-router-dom";
import { routesPath } from "router/routes";

export const Header = observer(() => {
  const { setIP, setIsAuth } = useSettingsContext();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenHelp = () => {
    window.open("http://172.16.0.104:3599/");
  };

  const logOut = () => {
    setIP(null);
    setIsAuth(false);
  };

  const { classes, cx } = useHeaderStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} color="transparent">
        <Toolbar>
          <Box className={classes.leftSection}>
            <ToggleThemeButton />
            <NavList />
          </Box>
          <Box className={classes.rightSection}>
            <LogoIcon height={32} />
            <Typography
              variant="h6"
              component="div"
              className={cx(classes.title, classes.text)}
            >
              {appTexts.components.header.title}
            </Typography>
            <CIconsButton
              icon={<UserRoundCog size={16} />}
              tooltipText="Настройки"
              onClick={handleMenuOpen}
            />
          </Box>

          <Menu
            id="engineer-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: 200,
                  width: 200,
                },
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleOpenHelp();
                handleMenuClose();
              }}
            >
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              Инструкция
            </MenuItem>
            <Divider className={classes.divider} />
            <MenuItem
              onClick={() => {
                logOut();
                navigate(routesPath.SIGN_IN);
                handleMenuClose();
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Выйти
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

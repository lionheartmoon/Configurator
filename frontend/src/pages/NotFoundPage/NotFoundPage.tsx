import { Box, Typography } from "@mui/material";
import { usePageTitle } from "hooks/usePageTitle";
import { useNotFoundPageStyles } from "./NotFoundPage.styles";
import { routesPath } from "router/routes";
import { appTexts } from "appTexts/appTexts";
import CLink from "components/CLink/CLink";

const NotFoundPage = () => {
  const { classes } = useNotFoundPageStyles();
  usePageTitle("404");

  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <Typography component="h5" variant="h5">
          {appTexts.notFoundPage.title}
        </Typography>
        <CLink
          path={routesPath.DASHBOARD}
          content={appTexts.notFoundPage.redirectLink}
          underline
        />
      </Box>
    </Box>
  );
};


export default NotFoundPage;

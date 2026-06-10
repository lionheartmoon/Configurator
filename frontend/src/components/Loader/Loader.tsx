import { Box, CircularProgress } from "@mui/material";

import { useLoaderStyles } from "./Loader.style";

const Loader = () => {
  const { classes } = useLoaderStyles();

  return (
    <Box className={classes.loader}>
      <CircularProgress className={classes.progress} />
    </Box>
  );
};

export default Loader;

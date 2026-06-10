import { Box, Container } from "@mui/material";
import { useMainLayoutStyles } from "./MainLayout.styles";
import { ReactNode } from "react";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

interface Props {
  children: ReactNode;
  showFooter?: boolean;
  fullSize?: boolean;
  gap?: number;
  className?: string;
}

export const MainLayout = ({ children, className, fullSize, gap }: Props) => {
  const { classes, cx } = useMainLayoutStyles();
  return (
    <Box className={classes.rootWrapper}>
      <Header />
      <Box component="main" className={cx(classes.mainLayout, classes.withFooter)}>
        <Container maxWidth="xl">
          <Box
            className={cx(classes.content, className, fullSize && classes.fullContent)}
          >
            {children}
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

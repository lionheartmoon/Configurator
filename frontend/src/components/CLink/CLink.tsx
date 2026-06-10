import { Link } from "@mui/material";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  path: string;
  content: string | ReactNode;
  underline?: boolean;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: () => void;
}

const CLink = ({ content, path, underline, target, onClick }: Props) => {
  return (
    <Link
      component={RouterLink}
      underline={underline ? "always" : "none"}
      to={path}
      target={target}
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default CLink;

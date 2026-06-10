import { Tooltip } from "@mui/material";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

export const DefaultSortIcon = ({ className }: Props) => {
  return (
    <Tooltip title="Сортировать">
      <ArrowUpDown size={12} className={className} />
    </Tooltip>
  );
};

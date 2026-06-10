import { FC } from "react";
import { ArrowDown } from "lucide-react";
import { Tooltip } from "@mui/material";
import { EOrder } from "types/types";
import { appTexts } from "appTexts/appTexts";

interface Props {
  direction: EOrder;
  className?: string;
}

export const SortIcon: FC<Props> = ({ direction, className }) => {
  return (
    <Tooltip title={appTexts.components.table[direction]}>
      <ArrowDown
        size={12}
        style={{
          transform: direction === EOrder.ASC ? undefined : "rotate(-180deg)",
          transition: "transform 0.2s ease-in-out",
        }}
        className={className}
      />
    </Tooltip>
  );
};


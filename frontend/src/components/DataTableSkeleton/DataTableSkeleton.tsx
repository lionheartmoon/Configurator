import { useMemo } from "react";
import { Box, Skeleton } from "@mui/material";

interface Props {
  rows?: number;
  columns?: number;
  width?: string;
}

export const DataTableSkeleton = ({ rows = 10, columns = 5, width = "100%" }: Props) => {
  const columnWidth = useMemo(() => {
    if (!columns || columns === 0) return "100%";
    return `${100 / columns}%`;
  }, [columns]);

  return (
    <Box sx={{ width, padding: 2 }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ mb: 2, borderRadius: 1 }}
      />
      {Array.from({ length: rows }).map((_, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, mb: 1.5 }}>
          {Array.from({ length: columns }).map((_, ind) => (
            <Skeleton
              key={ind}
              width={columnWidth}
              variant="rectangular"
              height={24}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

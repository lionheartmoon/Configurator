import { Skeleton } from "@mui/material";

interface Props {
  height: number | string;
  width: number | string;
}

export const BlockSkeleton = ({ width, height }: Props) => {
  return (
    <Skeleton variant="rounded" sx={{ borderRadius: 3 }} width={width} height={height} />
  );
};

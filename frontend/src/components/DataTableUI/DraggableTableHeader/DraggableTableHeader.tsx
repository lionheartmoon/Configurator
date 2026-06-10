import { useCallback, useMemo } from "react";
import { TableCell, Box, Typography, TableCellProps } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { SortIcon } from "components/Icons/SortIcon/SortIcon";
import { DefaultSortIcon } from "components/Icons/DefaultSortIcon/DefaultSortIcon";
import { EOrder } from "types/types";

import { useDraggableTableHeaderStyles } from "./DraggableTableHeader.styles";
import { minWidth } from "@mui/system";

interface DraggableTableHeaderProps {
  id: string;
  title: string;
  draggable?: boolean;
  sortable?: boolean;
  isActiveSort: boolean;
  sortDirection: EOrder;
  align?: TableCellProps["align"];
  width?: string | number;
  onSort?: () => void;
  className?: string;
  titleWrapperClassName?: string;
  sortIconClassName?: string;
}

export const DraggableTableHeader = ({
  id,
  title,
  draggable = true,
  sortable,
  isActiveSort,
  sortDirection,
  align = "center",
  width,
  onSort,
  className,
  titleWrapperClassName,
  sortIconClassName,
}: DraggableTableHeaderProps) => {
  const { cx, classes } = useDraggableTableHeaderStyles();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isSorting,
  } = useSortable({ id });

  const dragStyle = useMemo(
    () => ({
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      transition,
      opacity: isSorting ? 0.5 : 1,
      zIndex: isDragging ? 1 : undefined,
      position: "relative" as const,
      willChange: "transform",
      backfaceVisibility: "hidden" as const,
      WebkitFontSmoothing: "antialiased",
    }),
    [transform, transition, isSorting, isDragging],
  );

  const justifyContent = useMemo(() => {
    const map: Record<NonNullable<TableCellProps["align"]>, string> = {
      right: "flex-end",
      center: "center",
      left: "flex-start",
      justify: "space-between",
      inherit: "flex-start",
    };
    return map[align || "center"];
  }, [align]);

  const hasSortHandler = useMemo(() => typeof onSort === "function", [onSort]);

  const getCursor = useCallback(() => {
    if (isDragging) return "grabbing";
    if (draggable) return "grab";
    if (hasSortHandler) return "pointer";
    return "default";
  }, [isDragging, draggable, hasSortHandler]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging || !hasSortHandler) {
        e.stopPropagation();
        return;
      }
      onSort?.();
    },
    [isDragging, hasSortHandler, onSort],
  );

  return (
    <TableCell
      ref={setNodeRef}
      style={dragStyle}
      className={cx(classes.cell, { [classes.dragging]: isDragging }, className)}
      sx={{
        cursor: getCursor(),
        minWidth: width,
        width: "auto",
        maxWidth: "400px",
      }}
      onClick={handleClick}
    >
      <Box
        className={cx(
          classes.titleWrapper,
          { [classes.draggingWrapper]: isDragging },
          titleWrapperClassName,
        )}
        sx={{ justifyContent }}
        {...(draggable ? attributes : {})}
        {...(draggable ? listeners : {})}
      >
        <Typography component="span" className={classes.title}>
          {title}
        </Typography>
        {sortable &&
          (isActiveSort ? (
            <SortIcon
              direction={sortDirection}
              className={cx(classes.icon, sortIconClassName)}
            />
          ) : (
            <DefaultSortIcon className={cx(classes.icon, sortIconClassName)} />
          ))}
      </Box>
    </TableCell>
  );
};

import { ReactNode, useMemo, useState, useCallback, useRef, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Typography,
  TableFooter,
} from "@mui/material";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { SortIcon } from "components/Icons/SortIcon/SortIcon";
import { DefaultSortIcon } from "components/Icons/DefaultSortIcon/DefaultSortIcon";
import Empty from "components/Empty/Empty";
import { DraggableTableHeader } from "./DraggableTableHeader/DraggableTableHeader";
import { ColumnSettings } from "./SettingPopover/ColumnSettings";
import { EOrder, ISortConfig } from "types/types";

import { useDataTableUIStyles } from "./DataTableUI.styles";
import { DataTableSkeleton } from "components/DataTableSkeleton/DataTableSkeleton";
import {
  ColumnsConfig,
  IDataTable,
} from "components/DataTableServiceUI/DataTableServiceUI.types";

interface Props {
  data: IDataTable[];
  columnsConfig: ColumnsConfig[];
  loading?: boolean;
  total?: number | null;
  onCellClick?: (row: IDataTable) => void;
  renderCell?: (columnKey: string, row: IDataTable, rowIndex: number) => ReactNode;
  hideableColumns?: string[];
  emptyText?: string;
  draggableColumns?: boolean;
  onColumnsReorder?: (newOrder: string[]) => void;
  skeletonRows?: number;
  skeletonColumns?: number;
  containerBorder?: boolean;
  maxHeight?: number | string;
  scrollToBottom?: boolean;
}

export const DataTableUI = ({
  data,
  columnsConfig,
  loading,
  total,
  emptyText,
  onCellClick,
  renderCell,
  hideableColumns = [],
  draggableColumns = false,
  skeletonRows = 16,
  skeletonColumns = 10,
  containerBorder = false,
  maxHeight,
  scrollToBottom,
  onColumnsReorder,
}: Props) => {
  const { classes, cx } = useDataTableUIStyles();

  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key:
      columnsConfig.find((item) => item.defaultSort)?.key || columnsConfig[0]?.key || "",
    direction: EOrder.ASC,
  });
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  const defaultKeysOrder = columnsConfig.map((col) => col.key);

  // Состояние для порядка колонок
  const [columnOrder, setColumnOrder] = useState<string[]>(defaultKeysOrder);

  // Настройка сенсоров для dnd-kit
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleToggleColumn = useCallback((columnKey: string) => {
    setHiddenColumns((prev) =>
      prev.includes(columnKey)
        ? prev.filter((key) => key !== columnKey)
        : [...prev, columnKey]
    );
  }, []);

  // Обновляем видимые колонки с учетом порядка
  const visibleColumns = useMemo(() => {
    const visible = columnsConfig.filter((col) => !hiddenColumns.includes(col.key));
    return [...visible].sort((a, b) => {
      const indexA = columnOrder.indexOf(a.key);
      const indexB = columnOrder.indexOf(b.key);
      return indexA - indexB;
    });
  }, [columnsConfig, hiddenColumns, columnOrder]);

  const sortedData = useMemo(() => {
    if (!data?.length) return [];

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === EOrder.ASC ? aValue - bValue : bValue - aValue;
      }

      const comparison = String(aValue).localeCompare(String(bValue));
      return sortConfig.direction === EOrder.ASC ? comparison : -comparison;
    });

    return sorted;
  }, [data, sortConfig]);

  const handleSort = useCallback((key: string) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === EOrder.ASC ? EOrder.DESC : EOrder.ASC,
    }));
  }, []);

  const renderCellContent = useCallback(
    (columnKey: string, row: IDataTable, rowIndex: number) => {
      if (renderCell) {
        return renderCell(columnKey, row, rowIndex);
      }
      const value = row[columnKey];
      return value !== undefined && value !== null ? value : "-";
    },
    [renderCell]
  );

  // Обработчик завершения перетаскивания
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        setColumnOrder((items) => {
          const oldIndex = items.indexOf(active.id as string);
          const newIndex = items.indexOf(over?.id as string);
          const newOrder = arrayMove(items, oldIndex, newIndex);

          if (onColumnsReorder) {
            onColumnsReorder(newOrder);
          }

          return newOrder;
        });
      }
    },
    [onColumnsReorder]
  );

  const open = Boolean(anchorEl);
  const hasSettingsColumn = useMemo(() => hideableColumns.length > 0, [hideableColumns]);
  const totalColumnsCount = useMemo(
    () => visibleColumns.length + (hasSettingsColumn ? 1 : 0),
    [visibleColumns.length, hasSettingsColumn]
  );

  const handleSettingsReset = useCallback(() => {
    setHiddenColumns([]);
    setColumnOrder(defaultKeysOrder);
  }, [defaultKeysOrder]);

  useEffect(() => {
    if (!scrollToBottom || !data || !tableRef) return;

    tableRef.current?.scroll({ behavior: "smooth", top: 100000 });
  }, [scrollToBottom, tableRef, data]);

  const renderTableHeader = () => {
    if (!draggableColumns) {
      return (
        <TableHead className={maxHeight ? classes.stickyHeader : ""}>
          <TableRow className={classes.headRow}>
            {visibleColumns.map(({ title, sort, key, align }) => {
              const justifyContent =
                align === "right"
                  ? "flex-end"
                  : align === "center"
                    ? "center"
                    : "flex-start";
              return (
                <TableCell
                  className={classes.th}
                  key={key}
                  sx={{ cursor: sort ? "pointer" : "default" }}
                  onClick={() => sort && handleSort(key)}
                >
                  <Box className={classes.titleWrapper} sx={{ justifyContent }}>
                    <Typography component="span">{title}</Typography>
                    {sort &&
                      (sortConfig.key === key ? (
                        <SortIcon
                          direction={sortConfig.direction}
                          className={classes.sortIcon}
                        />
                      ) : (
                        <DefaultSortIcon className={classes.sortIcon} />
                      ))}
                  </Box>
                </TableCell>
              );
            })}
            {hasSettingsColumn && (
              <TableCell className={cx(classes.th, classes.settings)}>
                <ColumnSettings
                  open={open}
                  anchorEl={anchorEl}
                  onOpen={handleOpenPopover}
                  onClose={handleClosePopover}
                  columnsConfig={columnsConfig}
                  hideableColumns={hideableColumns}
                  hiddenColumns={hiddenColumns}
                  onToggleColumn={handleToggleColumn}
                  reset={handleSettingsReset}
                />
              </TableCell>
            )}
          </TableRow>
        </TableHead>
      );
    }

    return (
      <TableHead>
        <SortableContext
          items={visibleColumns.map((col) => col.key)}
          strategy={horizontalListSortingStrategy}
        >
          <TableRow className={classes.headRow}>
            {visibleColumns.map(({ title, sort, key, align, width }) => (
              <DraggableTableHeader
                key={key}
                id={key}
                title={title}
                draggable={draggableColumns}
                sortable={sort}
                isActiveSort={sortConfig.key === key}
                sortDirection={sortConfig.direction}
                align={align}
                width={width}
                onSort={sort ? () => handleSort(key) : undefined}
                className={classes.th}
                titleWrapperClassName={classes.titleWrapper}
                sortIconClassName={classes.sortIcon}
              />
            ))}
            {hasSettingsColumn && (
              <TableCell className={cx(classes.th, classes.settings)}>
                <ColumnSettings
                  open={open}
                  anchorEl={anchorEl}
                  onOpen={handleOpenPopover}
                  onClose={handleClosePopover}
                  columnsConfig={columnsConfig}
                  hideableColumns={hideableColumns}
                  hiddenColumns={hiddenColumns}
                  onToggleColumn={handleToggleColumn}
                  reset={handleSettingsReset}
                />
              </TableCell>
            )}
          </TableRow>
        </SortableContext>
      </TableHead>
    );
  };

  return (
    <TableContainer
      ref={tableRef}
      className={cx(classes.container, containerBorder && classes.containerBorder)}
      sx={{ maxHeight: maxHeight }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis]}
      >
        <Table>
          {loading && !data?.length ? (
            <DataTableSkeleton rows={skeletonRows} columns={skeletonColumns} />
          ) : (
            <>
              {renderTableHeader()}
              <TableBody>
                {!sortedData?.length ? (
                  <TableRow>
                    <TableCell colSpan={totalColumnsCount} className={classes.footerTd}>
                      <Empty height={600} title={emptyText} />
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedData.map((row, rowIndex) => (
                    <TableRow key={rowIndex} className={classes.tdRow}>
                      {visibleColumns.map((col) => (
                        <TableCell
                          key={col.key}
                          align={col.align || "center"}
                          onClick={() => onCellClick?.(row)}
                          sx={{ cursor: onCellClick ? "pointer" : "default" }}
                          className={classes.td}
                          width={col.width}
                        >
                          {renderCellContent(col.key, row, rowIndex)}
                        </TableCell>
                      ))}
                      {hasSettingsColumn && <TableCell className={classes.emptyTd} />}
                    </TableRow>
                  ))
                )}
              </TableBody>
              {total && !!data?.length && (
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={totalColumnsCount} className={classes.footerTd}>
                      Показано {data.length} из {total} записей
                    </TableCell>
                  </TableRow>
                </TableFooter>
              )}
            </>
          )}
        </Table>
      </DndContext>
    </TableContainer>
  );
};

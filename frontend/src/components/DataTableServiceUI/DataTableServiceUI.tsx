import React, { FC, useState, ReactNode, useMemo, useEffect, useCallback } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  TableFooter,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import Empty from "components/Empty/Empty";
import { EOrder, ISortConfig } from "types/types";
import { SortIcon } from "components/Icons/SortIcon/SortIcon";
import { DefaultSortIcon } from "components/Icons/DefaultSortIcon/DefaultSortIcon";
import {
  ColumnsConfig,
  IDataTable,
  IDataTableDowntime,
} from "./DataTableServiceUI.types";
import { useDataTableDowntimeUIStyles } from "./DataTableServiceUI.style";
import { DataTableSkeleton } from "components/DataTableSkeleton/DataTableSkeleton";

interface Props {
  data?: IDataTableDowntime | null;
  columnsConfig: ColumnsConfig[];
  loading?: boolean;
  renderCell?: (
    columnKey: string,
    row: IDataTable,
    rowIndex: number,
    isDetailRow?: boolean
  ) => ReactNode;
  hideableColumns?: string[];
  emptyText?: string;
  total?: number | null;
}

export const DataTableServiceUI: FC<Props> = ({
  data,
  columnsConfig,
  loading,
  renderCell,
  hideableColumns = [],
  emptyText,
  total,
}) => {
  const { classes, cx } = useDataTableDowntimeUIStyles();
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key:
      columnsConfig.find((item) => item.defaultSort)?.key || columnsConfig[0]?.key || "",
    direction: EOrder.ASC,
  });

  const totalData = data?.total || [];
  const detailedData = data?.data || [];
  const hasDetailedData = detailedData.length > 0;

  const columnConfigMap = useMemo(() => {
    const map = new Map<string, ColumnsConfig>();
    columnsConfig.forEach((col) => map.set(col.key, col));
    return map;
  }, [columnsConfig]);

  const visibleColumns = useMemo(() => {
    return columnsConfig.filter((col) => !hiddenColumns.includes(col.key));
  }, [columnsConfig, hiddenColumns]);

  const sortedTotalData = useMemo(() => {
    if (!totalData?.length) return totalData;

    const { key, direction } = sortConfig;
    const actualSortKey =
      key === "title" ? columnConfigMap.get("title")?.key || key : key;

    return [...totalData].sort((a, b) => {
      const aValue = a[actualSortKey];
      const bValue = b[actualSortKey];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return direction === EOrder.ASC ? 1 : -1;
      if (bValue == null) return direction === EOrder.ASC ? -1 : 1;

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === EOrder.ASC ? aValue - bValue : bValue - aValue;
      }

      const comparison = String(aValue).localeCompare(String(bValue), "ru");
      return direction === EOrder.ASC ? comparison : -comparison;
    });
  }, [totalData, sortConfig, columnConfigMap]);

  const detailedDataByGroup = useMemo(() => {
    if (!hasDetailedData) return new Map<string, IDataTable[]>();

    const map = new Map<string, IDataTable[]>();
    detailedData.forEach((item) => {
      const groupKey = String(item.group);
      if (!map.has(groupKey)) {
        map.set(groupKey, []);
      }
      map.get(groupKey)!.push(item);
    });

    map.forEach((items) => {
      items.sort((a, b) => {
        if (a.time && b.time) {
          return new Date(a.time).getTime() - new Date(b.time).getTime();
        }
        return 0;
      });
    });

    return map;
  }, [detailedData, hasDetailedData]);

  const nameColumnKey =
    columnsConfig?.find((c) => ["group", "title"].includes(c.key))?.key || "group";
  const nameColumnConfig = columnConfigMap.get(nameColumnKey);


  const emptyPlaceholderSx = useMemo(() => ({ pl: 2 }), []);

  const totalColumnsCount = useMemo(() => visibleColumns.length + 1, [visibleColumns.length]);

  const groupRowSx = useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      cursor: hasDetailedData ? "pointer" : "default",
    }),
    [hasDetailedData]
  );

  const getDetailedDataForGroup = useCallback(
    (group: string | number) => {
      return detailedDataByGroup.get(String(group)) || [];
    },
    [detailedDataByGroup]
  );

  const toggleRowExpansion = useCallback(
    (group: string | number) => {
      if (!hasDetailedData) return;
      const groupKey = String(group);
      setExpandedRows((prev) => ({
        ...prev,
        [groupKey]: !prev[groupKey],
      }));
    },
    [hasDetailedData]
  );

  const renderDefaultCell = useCallback((value: unknown): ReactNode => {
    if (value === null || value === undefined || value === "") {
      return "-";
    }
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
    return String(value);
  }, []);

  const renderCellContent = useCallback(
    (
      columnKey: string,
      row: IDataTable,
      rowIndex: number,
      isDetailRow = false
    ): ReactNode => {
      if (columnKey === "position" && isDetailRow) {
        return null;
      }

      if (renderCell) {
        return renderCell(columnKey, row, rowIndex, isDetailRow);
      }

      const value = row[columnKey];
      return renderDefaultCell(value);
    },
    [renderCell, renderDefaultCell]
  );

  const handleSort = useCallback((key: string) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === EOrder.ASC ? EOrder.DESC : EOrder.ASC,
    }));
  }, []);

  useEffect(() => {
    setSortConfig({
      key:
        columnsConfig.find((item) => item.defaultSort)?.key ||
        columnsConfig[0]?.key ||
        "",
      direction: EOrder.ASC,
    });
  }, [columnsConfig]);

  useEffect(() => {
    setExpandedRows({});
  }, [data]);

  return (
    <TableContainer className={classes.container}>
      {loading ? (
        <DataTableSkeleton />
      ) : (
        <Table>
          <TableHead>
            <TableRow className={classes.headRow}>
              {!hiddenColumns.includes("position") && (
                <TableCell className={cx(classes.th)} width="50px" align="center">
                  <Box className={classes.titleWrapper}>
                    <Typography component="span">
                      {columnConfigMap.get("")?.title || "№"}
                    </Typography>
                  </Box>
                </TableCell>
              )}

              {!hiddenColumns.includes(nameColumnKey) && (
                <TableCell
                  className={cx(classes.th)}
                  sx={{ cursor: nameColumnConfig?.sort ? "pointer" : "default" }}
                  align={nameColumnConfig?.align || "left"}
                  onClick={() =>
                    nameColumnConfig?.sort && handleSort(nameColumnConfig.key)
                  }
                >
                  <Box className={classes.titleWrapper}>
                    <Typography component="span">
                      {nameColumnConfig?.title || "-/-"}
                      {nameColumnConfig?.sort &&
                        (sortConfig.key === nameColumnConfig.key ? (
                          <SortIcon
                            direction={sortConfig.direction}
                            className={classes.sortIcon}
                          />
                        ) : (
                          <DefaultSortIcon className={classes.sortIcon} />
                        ))}
                    </Typography>
                  </Box>
                </TableCell>
              )}

              {visibleColumns.map((col) => {
                if (["position", "title", "group"].includes(col.key)) {
                  return null;
                }
                const colCfg = columnConfigMap.get(col.key);
                const width = colCfg?.width;
                const align = colCfg?.align || "left";
                return (
                  <TableCell
                    key={col.key}
                    className={cx(classes.th)}
                    width={width}
                    align={align}
                    sx={{ cursor: col.sort ? "pointer" : "default" }}
                    onClick={() => col.sort && handleSort(col.key)}
                  >
                    <Box className={classes.titleWrapper}>
                      <Typography component="span">{col.title}</Typography>
                      {col.sort &&
                        (sortConfig.key === col.key ? (
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
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedTotalData?.length ? (
              sortedTotalData.map((item, index) => {
                const group = item.group;
                const groupKey = String(group);
                const isExpanded = hasDetailedData
                  ? expandedRows[groupKey] || false
                  : false;
                const groupDetails = getDetailedDataForGroup(group);
                const rowNumber = index + 1;

                return (
                  <React.Fragment key={`${item.group}_${item.plant}_${index}`}>
                    <TableRow className={classes.tdRow}>
                      {!hiddenColumns.includes("position") && (
                        <TableCell className={cx(classes.td)} align="center">
                          {renderCell
                            ? renderCell(
                                "position",
                                { ...item, position: rowNumber },
                                index,
                                false
                              )
                            : rowNumber}
                        </TableCell>
                      )}

                      {!hiddenColumns.includes("title") && (
                        <TableCell className={cx(classes.td, classes.tdGroup)}>
                          <Box sx={groupRowSx}>
                            {hasDetailedData ? (
                              <IconButton
                                size="small"
                                sx={{ p: 0 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleRowExpansion(group);
                                }}
                              >
                                <KeyboardArrowRight
                                  className={
                                    isExpanded ? classes.arrowDown : classes.arrow
                                  }
                                />
                              </IconButton>
                            ) : (
                              <Box sx={emptyPlaceholderSx} />
                            )}
                            {renderCell
                              ? renderCell(
                                  "title",
                                  { ...item, title: group },
                                  index,
                                  false
                                )
                              : group}
                          </Box>
                        </TableCell>
                      )}

                      {visibleColumns.map((col) => {
                        if (["position", "title", "group"].includes(col.key)) {
                          return null;
                        }
                        const colCfg = columnConfigMap.get(col.key);
                        const align = colCfg?.align || "left";
                        return (
                          <TableCell
                            key={`${groupKey}-${col.key}`}
                            className={classes.td}
                            align={align}
                          >
                            {renderCellContent(col.key, item, index, false)}
                          </TableCell>
                        );
                      })}
                    </TableRow>

                    {hasDetailedData &&
                      isExpanded &&
                      groupDetails.map((detail, detailIndex) => (
                        <TableRow
                          key={`${groupKey}-detail-${detailIndex}`}
                          className={cx(classes.expandedRow)}
                        >
                          {!hiddenColumns.includes("position") && (
                            <TableCell className={cx(classes.td, classes.childTd)}>
                              {renderCellContent("position", detail, detailIndex, true)}
                            </TableCell>
                          )}

                          {!hiddenColumns.includes("title") && (
                            <TableCell className={cx(classes.td, classes.childTd)}>
                              {renderCellContent("time", detail, detailIndex, true)}
                            </TableCell>
                          )}

                          {visibleColumns.map((col) => {
                            if (["position", "title", "group"].includes(col.key)) {
                              return null;
                            }
                            const colCfg = columnConfigMap.get(col.key);
                            const align = colCfg?.align || "left";
                            return (
                              <TableCell
                                key={`${groupKey}-detail-${detailIndex}-${col.key}`}
                                className={cx(classes.td, classes.childTd)}
                                align={align}
                              >
                                {renderCellContent(col.key, detail, detailIndex, true)}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                  </React.Fragment>
                );
              })
            ) : (
              <TableRow>
                <TableCell className={classes.footerTd} colSpan={totalColumnsCount}>
                  <Empty height={400} title={emptyText} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {total && !!totalData?.length && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={totalColumnsCount} className={classes.footerTd}>
                  Показано {totalData.length} из {total} записей
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      )}
    </TableContainer>
  );
};
